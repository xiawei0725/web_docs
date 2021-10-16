$(".warpper .page-toc ul ul li a").on("click", function () {
  $(".warpper .page-toc ul ul li a").removeClass("my-active");
  $(this).addClass("my-active");
});
$(".logo").on("mouseenter", function () {
  $(".nav").height("450px");
});
$(".nav").on("mouseleave", function () {
  $(".nav").height("80px");
});
$(".logo").on("click", function () {
  $(".nav").css("display", "none");
  $(".warpper").css("padding", "0px");
});
