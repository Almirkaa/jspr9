'use strict';
let form = document.forms.form;
let nameInput = form.elements.name;
let yearInput = form.elements.year;
let flag = true;
form.addEventListener('submit', function age(event) {

    event.preventDefault();

    let name = nameInput.value;

    let year = yearInput.value;
    nameError.innerHTML = '';
    let ageUser = 2024 - parseInt(year);

    if (name === '') {
        nameError.innerHTML = 'Заполните поле';
        flag = false;
    } else if (name.length < 2) {
        nameError.innerHTML = 'Имя должно быть не менее 2 символов';
        flag = false;
    }
   
    if (nameError.innerHTML != '') {
        nameInput.classList.add('error');
    }else{
        nameInput.classList.remove('error');
    }
   
   
    if (year === '') {
        yearError.innerHTML = 'Заполните поле';
        flag = false;
    } else if (year.length != 4) {
        yearError.innerHTML = 'Год должен состоять ровно из 4 цифр';
        flag = false;
    } else if (ageUser < 18) {
        alert('Ошибка!');
        flag = false;
    }


    if (yearError.innerHTML != '') {
        yearInput.classList.add('error');
    }else{
        yearInput.classList.remove('error');
        // yearInput.classList.remove('error');
    }


    

    if (flag === true) {
        alert('Успешная регистрация');
        nameInput.classList.add('good');
        yearInput.classList.add('good');
    }
    // form.submit(); 

}
);


