var str="demohi@gmail.com";

console.log(str.indexOf("gmail"));
var str1="gmail@gmail@gmail.com";
console.log(str1.indexOf("gmail",4));
console.log(str1.lastIndexOf("gmail"));
console.log(str1.slice(str1.lastIndexOf("gmail") ,str1.lastIndexOf("gmail")+"gmail".length));
console.log(str1.search(/com/));
console.log(str1.substring(0,5));
var _splitvalue="       kavya / sindhura         ";
console.log( _splitvalue.trim().split("/"));
