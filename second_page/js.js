///images
var img_1 = document.getElementById("img_1");
var img_2 = document.getElementById("img_2");
var img_3 = document.getElementById("img_3")
var img_4 = document.getElementById("img_4");
///sections
first_sec = document.getElementById("firsttop");
sixth_sec = document.getElementById("sixpic");
seventh_sec = document.getElementById("sevenpic");
nineth_sec = document.getElementById("ninepic");
/// higher than 1500px
var x_1500 = window.matchMedia("(min-width: 1500px)")
var x_1400 = window.matchMedia("(min-width: 1400px)")
var x_1200 = window.matchMedia("(min-width: 1200px)")


img1 = () => {
    if (x_1500.matches) {
        img_1.src = "../img/icon/second_page/logo05.jpg";
        img_2.src = "../img/icon/second_page/logo4.jpg";
        img_3.src = "../img/icon/second_page/logo3.jpg";
        img_4.src = "../img/icon/second_page/logo2.jpg";
        first_sec.style.height = "10.2rem";
        console.log('higher than 1500px')
    } else if (x_1400.matches) {
        img_1.src = "../img/icon/second_page/logo05.jpg";
        img_2.src = "../img/icon/second_page/logo4.jpg";
        img_3.src = "../img/icon/second_page/logo3.jpg";
        img_4.src = "../img/icon/second_page/logo2.jpg";
        first_sec.style.height = "6.5rem";
        console.log('higher than 1400px')
    } else {
        img_1.src = "../img/icon/second_page/logo05.jpg";
        img_2.src = "../img/icon/second_page/logo4.jpg";
        img_3.src = "../img/icon/second_page/logo3.jpg";
        img_4.src = "../img/icon/second_page/logo2.jpg";
        first_sec.style.height = "6.5rem";
        console.log('else first')

    }
    console.log('outside')


}
img2 = () => {
    if (x_1500.matches) {
        img_1.src = "../img/icon/second_page/logo5.jpg";
        img_2.src = "../img/icon/second_page/logo04.jpg";
        img_3.src = "../img/icon/second_page/logo3.jpg";
        img_4.src = "../img/icon/second_page/logo2.jpg";
        sixth_sec.style.height = "9.5rem";
        console.log('higher than 1500px')
    } else if (x_1400.matches) {
        img_1.src = "../img/icon/second_page/logo5.jpg";
        img_2.src = "../img/icon/second_page/logo04.jpg";
        img_3.src = "../img/icon/second_page/logo3.jpg";
        img_4.src = "../img/icon/second_page/logo2.jpg";
        sixth_sec.style.height = "7rem";
        console.log('higher than 1400px second')
    } else {
        img_1.src = "../img/icon/second_page/logo5.jpg";
        img_2.src = "../img/icon/second_page/logo04.jpg";
        img_3.src = "../img/icon/second_page/logo3.jpg";
        img_4.src = "../img/icon/second_page/logo2.jpg";
        sixth_sec.style.height = "6.5rem";
        console.log('else second')

    }
    console.log('outside')


}


img3 = () => {
    if (x_1500.matches) {
        img_1.src = "../img/icon/second_page/logo5.jpg";
        img_2.src = "../img/icon/second_page/logo4.jpg";
        img_3.src = "../img/icon/second_page/logo03.jpg";
        img_4.src = "../img/icon/second_page/logo2.jpg";
        seventh_sec.style.height = "10rem";

        console.log('higher than 1500px third')
    } else if (x_1400.matches) {
        img_1.src = "../img/icon/second_page/logo5.jpg";
        img_2.src = "../img/icon/second_page/logo4.jpg";
        img_3.src = "../img/icon/second_page/logo03.jpg";
        img_4.src = "../img/icon/second_page/logo2.jpg";
        seventh_sec.style.height = "7rem";

        console.log('higher than 1400px third')
    } else {
        img_1.src = "../img/icon/second_page/logo5.jpg";
        img_2.src = "../img/icon/second_page/logo4.jpg";
        img_3.src = "../img/icon/second_page/logo03.jpg";
        img_4.src = "../img/icon/second_page/logo2.jpg";
        seventh_sec.style.height = "7rem";

        console.log('higher than 1200px third')

    }

}
img4 = () => {
    if (x_1500.matches) {
        img_1.src = "../img/icon/second_page/logo5.jpg";
        img_2.src = "../img/icon/second_page/logo4.jpg";
        img_3.src = "../img/icon/second_page/logo3.jpg";
        img_4.src = "../img/icon/second_page/logo02.jpg";
        nineth_sec.style.height = "10rem";

        console.log('higher than 1500px fourth')
    } else if (x_1400.matches) {
        img_1.src = "../img/icon/second_page/logo5.jpg";
        img_2.src = "../img/icon/second_page/logo4.jpg";
        img_3.src = "../img/icon/second_page/logo3.jpg";
        img_4.src = "../img/icon/second_page/logo02.jpg";
        nineth_sec.style.height = "7rem";

        console.log('higher than 1400px fourth')


    } else {
        img_1.src = "../img/icon/second_page/logo5.jpg";
        img_2.src = "../img/icon/second_page/logo4.jpg";
        img_3.src = "../img/icon/second_page/logo3.jpg";
        img_4.src = "../img/icon/second_page/logo02.jpg";
        nineth_sec.style.height = "7rem";

        console.log('higher than 1400px fourth')

    }

}

normalImg = () => {
    console.log("baba")
    first_sec.style.height = "0";
    sixth_sec.style.height = "0";
    seventh_sec.style.height = "0";
    nineth_sec.style.height = "0";

    first_sec.style.transition = "all .5s";
    sixth_sec.style.transition = "all .5s";
    seventh_sec.style.transition = "all .5s";
    nineth_sec.style.transition = "all .5s";

    img_1.src = "../img/icon/second_page/logo5.jpg";
    img_2.src = "../img/icon/second_page/logo4.jpg";
    img_3.src = "../img/icon/second_page/logo3.jpg";
    img_4.src = "../img/icon/second_page/logo2.jpg";

}