const form = document.getElementById("signup-form");
const email = document.getElementById("email");
const errorMsg = document.getElementById("error-msg"); 
const dismissBtn = document.querySelector(".dismiss-btn");
const successMessage = document.querySelector(".success-message");
const mainContent = document.querySelector(".main");
form.addEventListener("submit", (e)=>{
  e.preventDefault();
   const emailValue = email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
        errorMsg.textContent = "Valid email required";
        email.classList.add("error");
    }
    else {
        errorMsg.textContent = "";
        email.classList.remove("error");
    

    successMessage.classList.add("hidden");
    mainContent.classList.add("hidden");
    }
})
dismissBtn.addEventListener("click", ()=>{
  successMessage.classList.remove("hidden");
  mainContent.classList.remove("hidden");
  email.value = "";
})