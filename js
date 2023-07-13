$(document).ready(function(){
        $(".top-fold-start").animate({
            left: '0px',
            opacity: '1',
    });
});

    setTimeout ("contact()", 25000);    

    function contact() {    
    if(true){
    $('#myModal').modal('show');
    }else {
        false
    }
};
/*
$(window).scroll(function() {
    let contact = true;
    if(contact){
    $('#myModal').modal('show'), 3000;
    }else {
        false
    }
});*/
$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    let headr = scroll >= 200;
    if(headr){
        $(".heading-r").animate({
            left: '0px',
            opacity: '1',}, 1500);
    }else {
        false;
    };
});
$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    let headr = scroll >= 400;
    if(headr){
        $(".heading-u").animate({
            left: '0px',
            opacity: '1',}, 1500);
    }else {
        false;
    };
});
$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    let headr = scroll >= 600;
    if(headr){
        $(".heading-ux").animate({
            left: '0px',
            opacity: '1',}, 1500);
    }else {
        false;
    };
});
$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    let headr = scroll >= 800;
    if(headr){
        $(".heading-ui").animate({
            left: '0px',
            opacity: '1',}, 1500);
    }else {
        false;
    };
});
$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    let headr = scroll >= 1100;
    if(headr){
        $(".heading-uid").animate({
            left: '0px',
            opacity: '1',}, 1500);
    }else {
        false;
    };
});
$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    let headr = scroll >= 1400;
    if(headr){
        $(".heading-vuid").animate({
            left: '0px',
            opacity: '1',}, 3500);
    }else {
        false;
    };
});
/*-- graphic deisgn section*/
$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    let headr = scroll >= 30;
    if(headr){
        $(".heading-a1").animate({
            left: '0px',
            opacity: '1',}, 1500);
    }else {
        false;
    };
});

$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    let headr = scroll >= 300;
    if(headr){
        $(".heading-a2").animate({
            left: '0px',
            opacity: '1',}, 1500);
    }else {
        false;
    };
});
$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    let headr = scroll >= 1000;
    if(headr){
        $(".heading-a3").animate({
            left: '0px',
            opacity: '1',}, 1500);
    }else {
        false;
    };
});
$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    let headr = scroll >= 1400;
    if(headr){
        $(".heading-a4").animate({
            left: '0px',
            opacity: '1',}, 1500);
    }else {
        false;
    };
});
/*   ------     */
$('a.smooth-scroll').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top + 20
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});
/*
$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    let head = scroll > 400;
    if (head) {
        $(".heading").addClass("header-from-right");
    } else {
        $(this(".header-from-right")).addClass("heading");
    }
});*/
$(document).ready(function(){
    $("div.panel").hide();
    $(".toggle_panel").click( function() {
        $('.panel').slideToggle();
        $(this).html($(this).html() == 'see less' ? 'read more' : 'see less');   
    });
});



$(document).ready(function(){
    $("div.panel-2").hide();
    $(".toggle_panel-2").click( function() {
        $('.panel-2').slideToggle();
        $(this).html($(this).html() == 'see less' ? 'read more' : 'see less');   
    });
});



$(document).ready(function() {
    let sum = $(window).scrollTop();
    let year2 = () =>{
        setTimeout(function() {
            document.getElementById("year1").innerHTML = "3+ Years"}, 1000);
    }
    let year3 = () =>{
        setTimeout(function() {
            document.getElementById("year1").innerHTML = "5+ Years"}, 2000);
    }
    let scrollOne = sum;
    let scrollTwo = sum;
    if (scrollOne){
         year2();
    } else {
         year3();
    }  if (scrollTwo){
        year3() 
    }
});
$(document).ready(function() {
    let sum = $(window).scrollTop();
    let year2 = () =>{
        setTimeout(function() {
            document.getElementById("year4").innerHTML = "1+ Years"}, 1000);
    }
    let year3 = () =>{
        setTimeout(function() {
            document.getElementById("year4").innerHTML = "2+ Years"}, 2000);
    }
    let scrollOne = sum;
    let scrollTwo = sum;
    if (scrollOne){
         year2();
    } else {
         year3();
    }  if (scrollTwo){
        year3() 
    }
});
$(document).ready(function() {
    let sum = $(window).scrollTop();

    let year2 = () =>{
        setTimeout(function() {
            document.getElementById("year2").innerHTML = "1+ Years"}, 2000);
    }    
    let year3 = () =>{
        setTimeout(function() {
            document.getElementById("year2").innerHTML = "5+ Years"}, 2000);
    }
    let scrollOne = sum;
    let scrollTwo = sum;
    if (scrollOne){
         year2();
    } else {
         year3();
    }if (scrollTwo){
        year3()
    }
});
$(document).ready(function() {
    let sum = $(window).scrollTop();
    let year2 = () =>{
        setTimeout(function() {
            document.getElementById("year3").innerHTML = "5+ Years"}, 1000);
    }
    let year3 = () =>{
        setTimeout(function() {
            document.getElementById("year3").innerHTML = "10+ Years"}, 2000);
    }
    let year4 = () =>{
        setTimeout(function() {
            document.getElementById("year3").innerHTML = "15+ Years"}, 3000);
    }
    let scrollOne = sum;
    let scrollTwo = sum;
    let scrollThree = sum;
    if (scrollOne){
         year2();
    } else {
        year3();
    }

    if (scrollTwo){
        year3();
    } else {
        year4();
    }
    if (scrollThree){
        year4();
    }
});
$(document).ready(function() {
    let sum = $(window).scrollTop();
    let year2 = () =>{
        setTimeout(function() {
            document.getElementById("year5").innerHTML = "5+ Years"}, 1000);
    }
    let year3 = () =>{
        setTimeout(function() {
            document.getElementById("year5").innerHTML = "10+ Years"}, 2000);
    }
    let year4 = () =>{
        setTimeout(function() {
            document.getElementById("year5").innerHTML = "15+ Years"}, 3000);
    }
    let scrollOne = sum;
    let scrollTwo = sum;
    let scrollThree = sum;
    if (scrollOne){
         year2();
    } else {
        year3();
    }

    if (scrollTwo){
        year3();
    } else {
        year4();
    }
    if (scrollThree){
        year4();
    }
});
/*
console.log('working');


$(window).scroll(function() {
if ($(this).scrollTop() > 100) {
        $('.nav').addClass('nav-back-to-top');
}
else {
$('.nav').removeClass('nav-back-to-top');
}
});


console.log('working');
$(window).scroll(function() {
if ($(this).scrollTop() < 300) {
        $('.nav-back-to-top').addClass('nav-back-to-top-2');
}
else {
$('.nav-back-to-top').removeClass('nav-back-to-top-2');
}
});


$(document).ready(function (){
            $(".scroll").click(function (){
                $('html, body').animate({
                    scrollTop: $("#div-1").offset().top
                }, 1000);
            });
        });


console.log('working-last');
*/





function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}



console.log("I am working1");











function viva() {
  // For a single value you can pass in a Number rather than an Array
  window.navigator.vibrate(500);
}



function viv() {
  // For a single value you can pass in a Number rather than an Array
  window.navigator.vibrate(500);
}










