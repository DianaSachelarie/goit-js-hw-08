import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-from-state";
const form = document.querySelector(".feedback-form");

form.addEventListener("submit", formSubmit);

const formObj = {};

initForm();

function formSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  formData.forEach((value, name) => console.log(value, name));

  event.target.reset();
  localStorage.removeItem("feedback-form-state");

  console.log(formObj);
}

form.addEventListener("input", throttle(onInputForm, 500));

function onInputForm(event) {
  formObj[event.target.name] = event.target.value;

  const stringifiedData = JSON.stringify(formObj);
  localStorage.setItem("feedback-form-state", stringifiedData);
}

function initForm() {
  let savedForm = localStorage.getItem("feedback-form-state");
  if (savedForm) {
    savedForm = JSON.parse(savedForm);
    Object.entries(savedForm).forEach(([name, value]) => {
      formObj[name] = value;
      form.elements[name].value = value;
    });
  }
}
