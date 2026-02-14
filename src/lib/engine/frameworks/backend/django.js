import { getFolder, getFile } from "../../utils/tree-nodes";

/**
 * Resolves base structure for a Django REST backend.
 */
export function djangoFramework(config) {
  return [
    // =========================
    // PROJECT ROOT
    // =========================
    getFolder("backend", [
      // =========================
      // DJANGO PROJECT
      // =========================
      getFolder("core", [
        getFile("__init__.py", ""),

        getFile(
          "settings.py",
          `
from pathlib import Path
import os

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = os.getenv('SECRET_KEY', 'unsafe-secret-key')

DEBUG = True

ALLOWED_HOSTS = []

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Third-party
    'rest_framework',
    'corsheaders',

    # Local apps
    'apps.health',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

CORS_ALLOW_ALL_ORIGINS = True

ROOT_URLCONF = 'core.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'core.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

AUTH_PASSWORD_VALIDATORS = []

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

STATIC_URL = 'static/'
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
          `.trim(),
        ),

        getFile(
          "urls.py",
          `
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('apps.health.urls')),
]
          `.trim(),
        ),

        getFile(
          "wsgi.py",
          `
import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')

application = get_wsgi_application()
          `.trim(),
        ),

        getFile(
          "asgi.py",
          `
import os
from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')

application = get_asgi_application()
          `.trim(),
        ),
      ]),

      // =========================
      // APPS
      // =========================
      getFolder("apps", [
        getFolder("health", [
          getFile("__init__.py", ""),

          getFile(
            "apps.py",
            `
from django.apps import AppConfig

class HealthConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.health'
            `.trim(),
          ),

          getFile(
            "views.py",
            `
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def health_check(request):
    return Response({
        'success': True,
        'message': 'API is running',
    })
            `.trim(),
          ),

          getFile(
            "urls.py",
            `
from django.urls import path
from .views import health_check

urlpatterns = [
    path('health/', health_check),
]
            `.trim(),
          ),
        ]),
      ]),

      // =========================
      // MANAGE
      // =========================
      getFile(
        "manage.py",
        `
#!/usr/bin/env python
import os
import sys

def main():
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError:
        raise
    execute_from_command_line(sys.argv)

if __name__ == '__main__':
    main()
        `.trim(),
      ),
    ]),

    // =========================
    // ENV & META
    // =========================
    getFile(
      ".env",
      `
SECRET_KEY=super-secret-key
DEBUG=True
      `.trim(),
    ),

    getFile(
      "requirements.txt",
      `
Django>=4.2
djangorestframework
django-cors-headers
      `.trim(),
    ),

    getFile(
      ".gitignore",
      `
__pycache__/
*.pyc
.env
db.sqlite3
venv/
      `.trim(),
    ),
  ];
}
