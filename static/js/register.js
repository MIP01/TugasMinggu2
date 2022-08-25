const formLogin = document.getElementById("form-register");
const feedbackMessage = document.getElementById("feedback");

// mendengarkan event submit pada form
formLogin.addEventListener("submit", function(event){
  event.preventDefault();
  const data = new FormData(event.target);
  feedbackMessage.innerHTML = `akun dengan username <code>${data.get("username")}</code> telah dibuat!`;
});