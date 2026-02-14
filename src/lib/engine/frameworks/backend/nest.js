import { getFolder, getFile } from "../../utils/tree-nodes";

/**
 * Resolves base structure for a NestJS backend.
 */
export function nestFramework(config) {
  const isTS = true; // NestJS is TypeScript-first
  const ext = "ts";

  return [
    getFolder("src", [
      // =========================
      // MAIN BOOTSTRAP
      // =========================
      getFile(
        `main.${ext}`,
        `
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);

  console.log(\`Server running on http://localhost:\${PORT}/api\`);
}

bootstrap();
        `.trim(),
      ),

      // =========================
      // ROOT MODULE
      // =========================
      getFile(
        `app.module.${ext}`,
        `
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './modules/health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HealthModule,
  ],
})
export class AppModule {}
        `.trim(),
      ),

      // =========================
      // HEALTH MODULE
      // =========================
      getFolder("modules", [
        getFolder("health", [
          getFile(
            `health.module.${ext}`,
            `
import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { HealthService } from './health.service';

@Module({
  controllers: [HealthController],
  providers: [HealthService],
})
export class HealthModule {}
            `.trim(),
          ),

          getFile(
            `health.controller.${ext}`,
            `
import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  check() {
    return this.healthService.check();
  }
}
            `.trim(),
          ),

          getFile(
            `health.service.${ext}`,
            `
import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  check() {
    return {
      success: true,
      message: 'API is running',
      timestamp: new Date(),
    };
  }
}
            `.trim(),
          ),
        ]),
      ]),

      // =========================
      // COMMON (GLOBAL UTILS)
      // =========================
      getFolder("common", [
        getFolder("filters", [
          getFile(
            `http-exception.filter.${ext}`,
            `
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof HttpException
        ? exception.getResponse()
        : 'Internal server error';

    response.status(status).json({
      success: false,
      statusCode: status,
      path: request.url,
      message,
      timestamp: new Date(),
    });
  }
}
            `.trim(),
          ),
        ]),
      ]),
    ]),

    // =========================
    // ROOT FILES
    // =========================
    getFile(
      ".env",
      `
PORT=3000
      `.trim(),
    ),

    getFile(
      "package.json",
      JSON.stringify(
        {
          name: "stackstruct-nest-backend",
          version: "1.0.0",
          private: true,
          scripts: {
            start: "nest start",
            start: "node dist/main",
            "start:dev": "nest start --watch",
            build: "nest build",
          },
          dependencies: {
            "@nestjs/common": "^10.0.0",
            "@nestjs/core": "^10.0.0",
            "@nestjs/platform-express": "^10.0.0",
            "@nestjs/config": "^3.0.0",
            "reflect-metadata": "^0.1.13",
            rxjs: "^7.8.0",
          },
          devDependencies: {
            "@nestjs/cli": "^10.0.0",
            "@nestjs/schematics": "^10.0.0",
            "@nestjs/testing": "^10.0.0",
            typescript: "^5.0.0",
          },
        },
        null,
        2,
      ),
    ),

    getFile(
      "tsconfig.json",
      JSON.stringify(
        {
          compilerOptions: {
            module: "commonjs",
            declaration: true,
            removeComments: true,
            emitDecoratorMetadata: true,
            experimentalDecorators: true,
            allowSyntheticDefaultImports: true,
            target: "ES2021",
            sourceMap: true,
            outDir: "./dist",
            baseUrl: "./",
            incremental: true,
          },
        },
        null,
        2,
      ),
    ),

    getFile(".gitignore", "node_modules\n.env\ndist\n.DS_Store"),
  ];
}
