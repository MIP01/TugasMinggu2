const formLogin = document.getElementById("form-login");
const feedbackMessage = document.getElementById("feedback");

// mendengarkan event submit pada form
formLogin.addEventListener("submit", function(event){
  event.preventDefault();
  const data = new FormData(event.target);
  feedbackMessage.innerHTML = `Login dengan username <code>${data.get("username")}</code> dikirim!`;
});

// mendengarkan event reset pada form
formLogin.addEventListener("reset", function(){
  feedbackMessage.textContent = "Form dibersihkan!";
});