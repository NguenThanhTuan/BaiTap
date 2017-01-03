"use strict"
//Bài 3
document.write("Bài 3:");
document.write("<br>");
function giaithua (n)
{
    if(n==0)
        return 1;
    else 
    {
        return (n*giaithua(n-1));
    }
    //alert(giaithua);
}
var a = 27;
document.write(giaithua(a));
document.write("<br>");


//Bài 2:
document.write("Bài 2:");
document.write("<br>");
var name = "everyday";
var arr = name.split("");
arr = arr.sort();
document.write(arr.join(""));
document.write("<br>");

//Bài 1:
document.write("Bài 1:");
document.write("<br>");
function tach_ten ()
{
    var str = "TUAN";
    
    var substring = str.substring(0, 4); //trích chuỗi con ở giữa
    var substring2 = str.substring(0, 3);
    var substring3 = str.substring(0, 2);
    var substring4 = str.substring(1, 4);
    document.write(substring); 
    document.write("<br>");
    document.write(substring2);
    document.write("<br>");
    document.write(substring3); 
    document.write("<br>");
    document.write(substring4);
    
    var substr = str.substr(0, 1); //trích chuỗi có chiều dài n ký tự
    var substr2 = str.substr(0, 2);
    var substr3 = str.substr(1, 2);
    document.write("<br>");
    document.write(substr);
    document.write("<br>");
    document.write(substr2);
    document.write("<br>");
    document.write(substr3);

    var charAt = str.charAt(1);
    var charAt2 = str.charAt(2);
    var charAt3 = str.charAt(3);
    document.write("<br>");
    document.write(charAt);
    document.write("<br>");
    document.write(charAt2);
    document.write("<br>");
    document.write(charAt3);

    var slice = str.slice(2, 4);
    document.write("<br>");
    document.write(slice);

    var concat = substr.concat(charAt2);
    var concat2 = substr.concat(charAt3);
    var concat3 = charAt.concat(charAt3);
    var concat4 = substr2.concat(charAt3);
    var concat5 = concat.concat(charAt3);
    document.write("<br>");
    document.write(concat);
    document.write("<br>");
    document.write(concat2);
    document.write("<br>");
    document.write(concat3);
    document.write("<br>");
    document.write(concat4);
    document.write("<br>");
    document.write(concat5);
}
tach_ten();