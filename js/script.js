$(function() {
  $(".name").typed({
    strings: ["Ashley Nguyen"],
    typeSpeed: 25,
    cursorChar: "",
    callback: function() {
      $(".sub").typed({
        strings: ["corgi enthusiast", "artist", "full stack developer"],
        typeSpeed: 25,
        backDelay: 1300,
        callback: function() {
          setTimeout(function() {
            $('.hidden').css("opacity", 1);
          }, 1000);
        }
      })
    }
  })
});