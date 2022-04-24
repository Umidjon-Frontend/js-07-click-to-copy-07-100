const btn = document.querySelector(".btn");
const textInput = document.querySelector(".input");

btn.addEventListener("click", copyInput);

function copyInput() {
  textInput.select();
  textInput.setSelectionRange(0, 999999);
  document.execCommand("copy");
  btn.textContent = "Copied!!!"
  setTimeout(()=>{
    btn.textContent = "Copy"
  },3000)
}
