const close = document.getElementById("close");
const message = document.getElementById('message');

close.addEventListener("click" , () => {
  message.style.display = "none";
})
  setTimeout (() => {
    message.style.display = "none"
  }, 5000)
