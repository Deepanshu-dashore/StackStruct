/**
 * @typedef {Object} FileNode
 * @property {'file'} type
 * @property {string} name
 * @property {string} content
 */

/**
 * @typedef {Object} FolderNode
 * @property {'folder'} type
 * @property {string} name
 * @property {FileOrFolder[]} children
 */

/**
 * @typedef {FileNode | FolderNode} FileOrFolder
 */

export const getFile = (name, content = "") => ({
  type: "file",
  name,
  content,
});

export const getFolder = (name, children = []) => ({
  type: "folder",
  name,
  children,
});

/**
 * Generates directory creation commands.
 * @param {FileOrFolder} node
 * @param {string} base
 * @returns {string[]}
 */
export function generateDirs(node, base) {
  if (node.type === "file") return [];

  const path = `${base}/${node.name}`.replace(/^\/+/, "");
  const cmds = [`mkdir -p "${path}"`];

  node.children.forEach((c) => {
    cmds.push(...generateDirs(c, path));
  });

  return cmds;
}

/**
 * Generates file creation commands using cat and EOF.
 * @param {FileOrFolder} node
 * @param {string} base
 * @returns {string[]}
 */
export function generateFiles(node, base) {
  if (node.type === "file") {
    const path = `${base}/${node.name}`.replace(/^\/+/, "");
    return [`cat << 'EOF' > "${path}"`, node.content, "EOF"];
  }

  return node.children.flatMap((c) => generateFiles(c, `${base}/${node.name}`));
}
