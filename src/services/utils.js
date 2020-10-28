export function buildNestedTree (arr, replyId) {
  let newArr = [...arr]
  let tree = []
  for(var i in newArr) {
    if (newArr[i].replyId === replyId) {
      var children = buildNestedTree(newArr, newArr[i].id)
      if (children.length) {
        newArr[i].children = children
      }
      tree.push(newArr[i])
    }
  }
  return tree
}
