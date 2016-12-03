//*****one functon to rule them all
jQuery(document).ready(function(){
//    alert("ready");

//listen for click

//onclick add class to logo and btn to change styles
// alert("working");
var btn = document.getElementById("btn1", "btn2", "btn3", "btn4");
btn.onclick = function myFunction() {
    alert("you clicked");
    if (btn[0]){
        document.getElementById("n2k").className = "logo1";
    };
    if (btn[1]){
        document.getElementById("n2k").className = "logo2";
    };
    alert("here!");
    //end;
    //else if (btn[1]){
       // document.getElementById("n2k").className = "logo2";
    //};
    //end;
}
//alert("shit snacks");
//document.getElementById("logo").className = "btn1"
/*
function myFunction() {
    //if btn1 clicked do this
    //if (btn).clicked
        document.getElementById("logo").className = "logo1";
    //ifelse btn2 clicked do this
    // or
    //function("#peace").removeClass('be-still')
};

window.onload = function() {
    function myFunction();
}
*/
/*

//when clicked n2k changes to btn color
//alert("loading");
//listen for click
//btn1 ORANGE
document.getElementById("btn1").addEventListener("click", changeLogo1);
//alert("worky");
function changeLogo1() {
    document.getElementById("n2k").className = "logo1";
}
//btn2 BLUE
document.getElementById("btn2").addEventListener("click", changeLogo2);
//alert("worky");
function changeLogo2() {
    document.getElementById("n2k").className = "logo2"
}
//btn3 GREEN
document.getElementById("btn3").addEventListener("click", changeLogo3);
//alert("worky");
function changeLogo3() {
    document.getElementById("n2k").className = "logo3"
}
//btn4 BROWN
document.getElementById("btn4").addEventListener("click", changeLogo4);
//alert("worky");
function changeLogo4() {
    document.getElementById("n2k").className = "logo4"
}
//n2k logo HOME
document.getElementById("logo").addEventListener("click", changeLogoHome);
//alert("worky");
function changeLogoHome() {
    document.getElementById("n2k").className = "logohome"
}

*/

});





























