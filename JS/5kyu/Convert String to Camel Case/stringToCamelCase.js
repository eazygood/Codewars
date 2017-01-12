function toCamelCase(str){
  return str.replace(/[_-][A-Za-z]/g, function(chr) {
    return chr[1].toUpperCase(); });
}
