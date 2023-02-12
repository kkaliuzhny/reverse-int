module.exports = function reverse (a) {
    a=Math.abs(a);
   let str= a.toString();
    str=str.split("").reverse().join("");
    str=Number(str);
    
    return str ;
}
