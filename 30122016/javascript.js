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
