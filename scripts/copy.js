const span = document.querySelector("#copy");

span.onclick = function() {
  document.execCommand("copy");
}

span.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("gabin.daupley@hetic.net/plain", span.textContent);
  }
});