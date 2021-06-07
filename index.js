var bloqueHtml = document.getElementById("javascript-texto")

bloqueHtml.addEventListener("mouseover", function() {
  bloqueHtml.innerHTML = "Cracken no es crack"
})

bloqueHtml.addEventListener("mouseleave", function() {
  bloqueHtml.innerHTML = "Cracken es crack"
})