let myh1 = document.getElementsByTagName("h1")[0];
console.log(myh1);


function color() {
    myh1.style.color = "blue";

}

myh1.addEventListener("click", color)