//Валидация ФИО
var userNameInput =  document.getElementById("name");

userNameInput.addEventListener('invalid', function (evt) {
  if (userNameInput.validity.patternMismatch) {
    userNameInput.setCustomValidity('ФИО должно быть на русском языке ');
  } 
   else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле для заполнения');
  } else {
    userNameInput.setCustomValidity('');
  }
});
//Валидация телефона
var userPhoneInput =  document.getElementById("phone");

userPhoneInput.addEventListener('invalid', function (evt) {
  if (userPhoneInput.validity.patternMismatch) {
    userPhoneInput.setCustomValidity('Телефон должен  содержать только цифры, пробелы или знаки “+” и “-” ');
  } 
   else if (userPhoneInput.validity.valueMissing) {
    userPhoneInput.setCustomValidity('Обязательное поле для заполнения');
  } else {
    userPhoneInput.setCustomValidity('');
  }
});
//Валидация Email
var userEmailInput =  document.getElementById("email");

userEmailInput.addEventListener('invalid', function (evt) {
  if (userEmailInput.validity.patternMismatch) {
	userEmailInput.setCustomValidity('Поле должно соответствовать формату email - пример: vitalik2000@list.ru ');
  } 
   else if (userEmailInput.validity.valueMissing) {
    userEmailInput.setCustomValidity('Обязательное поле для заполнения');
  } else {
    userEmailInput.setCustomValidity('');
  }
});

var form = document.querySelector('.form');
  form.addEventListener('submit', function (evt) {
    window.upload(new FormData(form), function (response) {
    });
    evt.preventDefault();
  });