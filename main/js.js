 //iniitional
 $('body').scrollspy({
     target: "#main-nav"
 });
 //smoth scrolling 

 // Smooth Scrolling
 $("#main-nav a").on('click', function(event) {
     if (this.hash !== "") {
         event.preventDefault();

         const hash = this.hash;

         $('html, body').animate({
             scrollTop: $(hash).offset().top
         }, 800, function() {

             window.location.hash = hash;
         });
     }
 });


 img1 = () => {
     document.getElementById("img_1").src = "../img/icon_men/1.png";
     document.getElementById("img_2").src = "../img/icon_men/02.png";
     document.getElementById("img_3").src = "../img/icon_men/03.png";
     document.getElementById("img_4").src = "../img/icon_men/04.png";
     document.getElementById("firsttop").style.height = "12rem";
     //  document.getElementById("secondttop").style.height = "0";
     //  document.getElementById("thirdtop").style.height = "0";
     //  document.getElementById("fourthtop").style.height = "0";


 }
 img2 = () => {
     document.getElementById("img_1").src = "../img/icon_men/01.png";
     document.getElementById("img_2").src = "../img/icon_men/2.png";
     document.getElementById("img_3").src = "../img/icon_men/03.png";
     document.getElementById("img_4").src = "../img/icon_men/04.png";
     //  document.getElementById("firsttop").style.height = "0";
     document.getElementById("secondttop").style.height = "12rem";
     //  document.getElementById("thirdtop").style.height = "0";
     //  document.getElementById("fourthtop").style.height = "0";

 }
 img3 = () => {
     document.getElementById("img_1").src = "../img/icon_men/01.png";
     document.getElementById("img_2").src = "../img/icon_men/02.png";
     document.getElementById("img_3").src = "../img/icon_men/3.png";
     document.getElementById("img_4").src = "../img/icon_men/04.png";
     //  document.getElementById("firsttop").style.height = "0";
     //  document.getElementById("secondttop").style.height = "0";
     document.getElementById("thirdtop").style.height = "12rem";
     //  document.getElementById("fourthtop").style.height = "0";

 }
 img4 = () => {
     document.getElementById("img_1").src = "../img/icon_men/01.png";
     document.getElementById("img_2").src = "../img/icon_men/02.png";
     document.getElementById("img_3").src = "../img/icon_men/03.png";
     document.getElementById("img_4").src = "../img/icon_men/4.png";
     //  document.getElementById("firsttop").style.height = "0";
     //  document.getElementById("secondttop").style.height = "0";
     //  document.getElementById("thirdtop").style.height = "0";
     document.getElementById("fourthtop").style.height = "10rem";
 }

 normalImg = () => {
     console.log("baba")
     document.getElementById("firsttop").style.height = "0";
     document.getElementById("secondttop").style.height = "0";
     document.getElementById("thirdtop").style.height = "0";
     document.getElementById("fourthtop").style.height = "0";

     document.getElementById("firsttop").style.transition = "all .5s";
     document.getElementById("secondttop").style.transition = "all .5s";
     document.getElementById("thirdtop").style.transition = "all .5s";
     document.getElementById("fourthtop").style.transition = "all .5s";

     document.getElementById("img_1").src = "../img/icon_men/01.png";
     document.getElementById("img_2").src = "../img/icon_men/02.png";
     document.getElementById("img_3").src = "../img/icon_men/03.png";
     document.getElementById("img_4").src = "../img/icon_men/04.png";

 }