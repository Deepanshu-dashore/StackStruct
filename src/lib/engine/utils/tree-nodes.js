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
 * Helper to find a node in the tree by name (shallow)
 */
export const findNode = (nodes, name) => nodes.find((n) => n.name === name);

/**
 * Helper to update or add a file in a list of nodes
 */
export const upsertFile = (nodes, name, content) => {
  const index = nodes.findIndex((n) => n.name === name);
  if (index !== -1) {
    nodes[index] = getFile(name, content);
  } else {
    nodes.push(getFile(name, content));
  }
};
