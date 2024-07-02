var show_eye_icon = document.querySelector('#login i.show_eye_icon');
var hidden_eye_icon = document.querySelector('#login i.hidden_eye_icon');
var input_password = document.querySelector('#login .password input');

show_eye_icon.addEventListener('click', () => {
    show_eye_icon.classList.add('hidden');
    hidden_eye_icon.classList.remove('hidden');
    input_password.type = 'text';
})

hidden_eye_icon.addEventListener('click', () => {
    hidden_eye_icon.classList.add('hidden');
    show_eye_icon.classList.remove('hidden');
    input_password.type = 'password';
})