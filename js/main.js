document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener('click', () => {

        document.querySelector('.active').classList.remove("active")
        link.classList.add("active")

    });


});
let aboutOffset = $("#about").offset().top
let navbarHeight = $("nav").outerHeight()
//a8ir lon l nav lma ascroll
$(window).scroll(function () {


    if ($(window).scrollTop() > (aboutOffset - (navbarHeight / 2))) {
        $("nav").css("backgroundColor", "#020202")
        $(".backToTop").fadeIn(500).css("display", "flex")

    } else {
        $("nav").css("backgroundColor", "transparent")
        $(".backToTop").fadeOut(500)
    }


})


$(window).on("scroll", function () {
    let position = $(this).scrollTop(); // Current scroll position

    $('section').each(function () {  // Target sections by their 'section' tag
        let target = $(this).offset().top; // Top offset of the section
        let height = $(this).outerHeight(); // Height of the section
        let id = $(this).attr('id'); // The ID of the section
        //bat2kd an l number l na fi akbr aw eq ll target w f nafs l w2t ykon
        //  as8r mn l target section kolo l hwa l height bat3o
        // Check if the current scroll position is within the section's range
        if (position >= target && position < target + height) {
            // Add 'active' to the corresponding navbar link
            $('#topNav ul li a').removeClass('active');
            $('#topNav ul li a[href="#' + id + '"]').addClass('active');


        }
    });
});


//kol mdos 33la navlink yscroll smoothly
$("nav #navbarSupportedContent a[href^='#']").on("click", function () {
    let theAttributehref = $(this).attr("href")
    let offsetOfSpecificSection = $(theAttributehref).offset().top

    $("html, body").animate({ scrollTop: offsetOfSpecificSection }, 2000);


})

//back to top 34n tscroll smothly

$(".backToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 2000);
})

//bn5fy  l loading spinner
$(document).ready(function () {
    $(".loading").fadeOut(1000, function () {
        $("body").css("overflow", "visible");
    });
});
let colorBoxWidth = $('.coloringBox').outerWidth()
//bantl3 w nd5al l color picker
$(".colorBoxIcon").on('click', function () {

    if ($(".coloringBox").css("left") ==  "-" + colorBoxWidth + "px") {
        $('.coloringBox').animate({ left:  0}, 500)

    }
    else {
        $('.coloringBox').animate({ left: -colorBoxWidth }, 500)

    }
})


$('.coloringBox span').on('click', function (e) {

    let clickedSpanColor = $(this).css('background-color')
    $(':root').css("--mainColor", clickedSpanColor)

})

const option = {
    strings: [" Developer", " Designer"], // Words to animate
    typeSpeed: 100,       // Speed of typing each letter (in ms)
    backSpeed: 100,        // Speed of erasing each letter (in ms)
    loop: true,           // Repeat the animation infinitely


};

const typed = new Typed(".typedAnimation span", option);




let counterOffset = $("#counterID").offset().top
$(window).scroll(function () {
    if ($(window).scrollTop() > (counterOffset )) {
//plugin ll counter  
let demo = new CountUp('myTargetElement', 0, 200, 0, 2);
let demo2 = new CountUp('myTargetElement2', 0, 345, 0, 2);
let demo3 = new CountUp('myTargetElement3', 0, 1800, 0, 2);
let demo4 = new CountUp('myTargetElement4', 0, 1200, 0, 2);

if (!demo.error) {
    demo.start();
    demo2.start();
    demo3.start();
    demo4.start();
} else {
    console.error(demo.error);
}
    }
    

})
