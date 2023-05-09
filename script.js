document.getElementById("parent").innerHTML=("Something else");

//document.getElementById("parent").style.backgroundColor=("red");
//document.getElementById("parent").style.Color=("black");
document.getElementById("parent").style.cssText=("background-color:red; color:white; text-align:center")
document.getElementsByClassName("exercise")[0].innerHTML=("I am sita karki");
document.getElementsByClassName("exercise")[2].innerHTML=("I am sweet 16 ");
 
document.getElementsByTagName(",h1")[1].style.cssText=("text-align:center; text-transform:uppercase");

document.querySelector("h2").innerHTML=("Golden hour");
document.querySelector("#hi").innerHTML=("Bold");
document.querySelector(".hey").innerHTML=("Peace");

const change =document.querySelectorAll("h3")
for (i=0;i<=change.length;i++){
    change[i].innerHTML=("SHAMPS");
}

function myFunction(){
    document.open()
    document.write("<h1>hello world</h1>");
    document.close();
}

functionmyFunction(){
    const myWindow = window.open();
    myWindow.document.open();
    myWindow.document.write("<h1> Hello World</h1>");
    myWindow.document.close();
}