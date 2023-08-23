const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); 

  const formData = new FormData(event.currentTarget);
  const formDataObject = {};

  formData.forEach((value, name) => {
    formDataObject[name] = value;
  });

  if (formDataObject.email === "" || formDataObject.password === "") {
    alert("All fields must be filled out");
    return;
  }

  console.log(formDataObject);
  form.reset();
}
