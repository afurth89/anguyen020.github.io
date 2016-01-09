var btn = document.getElementsByClassName("btn-e")[0];
btn.addEventListener("click", function() {
  if (!btn.classList.contains("active")) {
    btn.classList.add("active");
    setTimeout(function() { btn.classList.remove("active") }, 1000);
  }
});