
var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); 
}
$(".TRAVEL").on("mousemove",function(){
  $(".TRAVEL").css("background-color","rgba(0,0,0,0.5)");
  $(".TRAVEL").css("color","white");
  $(".TRAVEL").css("text-shadow","2px 0 #DA0463");
});
$(".TRAVEL").on("mouseleave",function(){
  $(".TRAVEL").css("background-color","rgba(255,255,255,0.6)");
  $(".TRAVEL").css("color","black");
  $(".TRAVEL").css("text-shadow","0px 0px");
});
$(".FOOD").on("mousemove",function(){
  $(".FOOD").css("background-color","rgba(0,0,0,0.5)");
  $(".FOOD").css("color","white");
  $(".FOOD").css("text-shadow","2px 0 #DA0463");
});
$(".FOOD").on("mouseleave",function(){
  $(".FOOD").css("background-color","rgba(255,255,255,0.6)");
  $(".FOOD").css("color","black");
  $(".FOOD").css("text-shadow","0px 0px");
});
$(".INDIA").on("mousemove",function(){
  $(".INDIA").css("background-color","rgba(0,0,0,0.5)");
  $(".INDIA").css("color","white");
  $(".INDIA").css("text-shadow","2px 0 #DA0463");
});
$(".INDIA").on("mouseleave",function(){
  $(".INDIA").css("background-color","rgba(255,255,255,0.6)");
  $(".INDIA").css("color","black");
  $(".INDIA").css("text-shadow","0px 0px");
});

