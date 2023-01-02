/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let result = [];
  let pathArr = path.split("\/");
  pathArr.forEach(val => {
    if (val === "..")
      result.pop();
    else if (val !== "" && val !== ".")
      result.push(val)
  })
  return "/" + result.join("/")
};

