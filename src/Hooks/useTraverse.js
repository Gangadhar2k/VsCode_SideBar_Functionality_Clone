const useTraverse = () => {
  const insertNode = (tree, folderId, item, bool) => {
    if (tree.id === folderId && tree.isFolder) {
      // console.log("hook ==>", tree);
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder: bool,
        items: []
      });

      return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((ob) => {
      return insertNode(ob, folderId, item, bool);
    });
  };

  return { insertNode };
};
export default useTraverse;
