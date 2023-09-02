const formElem = document.querySelector(".login-form");

formElem.addEventListener("submit", (event) => {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  console.log(email, password);
  if (email.value.trim() === "" || password.value.trim() === "") {
    return alert("fields must be filled");
  }
  const userData = { email: email.value, password: password.value };
  console.log(userData);
  event.currentTarget.reset();
});
