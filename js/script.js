$(function() {
  $(".typed").typed({
    strings: ["corgi enthusiast", "artist", "full stack developer"],
    typeSpeed: 2,
    startDelay: 500,
    backDelay: 1800,
    callback: function() {
      setTimeout(function() {
        $('.hidden').css("opacity", 1);
      }, 1000);
    }
  })
});