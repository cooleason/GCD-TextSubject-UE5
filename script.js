console.log('Hello, world!'); //random comment

let Time = new Date().getHours();
//console.log(Time); 

let year = new Date().getFullYear();
//console.log(year);

let pause = 0;
//console.log(real);
//console.log(unreal);

function showModal(){
    $(".modal").toggleClass("show")
}

$(".buttom").click(showModal)
$(".modal").click(showModal)

function hideText(){
    $(this).css("opacity", "0.5")
}

function showText(){
    $(this).css("opacity", "1")
}

$(".modal").hover(hideText, showText)

function moveModal(){
    $(".modal").css("top", $(window).scrollTop() + 250)
}

$(window ).scroll(moveModal) 