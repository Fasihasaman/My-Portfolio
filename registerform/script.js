let currentCaptcha = '';

function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    currentCaptcha = captcha;
    document.querySelector('#captcha-text').innerText = captcha;
    document.querySelector('#captcha-match-msg').innerText = '';
}

document.addEventListener('DOMContentLoaded', () => {
    generateCaptcha();

    const passwordInput = document.querySelector('#password');
    const confirmPasswordInput = document.querySelector('#confirm-password');
    const captchaInput = document.querySelector('#captcha');
    const registerBtn = document.querySelector('#register');
    const captchaMsg = document.querySelector('#captcha-match-msg');

    const formInputs = document.querySelectorAll('#user-name, #user-email, #password, #confirm-password, #captcha');

    const hideIcon = document.querySelector('#hide');
    const viewIcon = document.querySelector('#view');
    const hideIcon2 = document.querySelector('#hide2');
    const viewIcon2 = document.querySelector('#view2');
    hideIcon.style.display = 'inline';
    viewIcon.style.display = 'none';
    hideIcon2.style.display = 'inline';
    viewIcon2.style.display = 'none';

    // Password toggle
    hideIcon.addEventListener('click', () => {
        passwordInput.type = 'text';
        hideIcon.style.display = 'none';
        viewIcon.style.display = 'inline';
    });

    viewIcon.addEventListener('click', () => {
        passwordInput.type = 'password';
        hideIcon.style.display = 'inline';
        viewIcon.style.display = 'none';
    });

    // Confirm password toggle
    hideIcon2.addEventListener('click', () => {
        confirmPasswordInput.type = 'text';
        hideIcon2.style.display = 'none';
        viewIcon2.style.display = 'inline';
    });

    viewIcon2.addEventListener('click', () => {
        confirmPasswordInput.type = 'password';
        hideIcon2.style.display = 'inline';
        viewIcon2.style.display = 'none';
    });

    // Captcha refresh
    document.querySelector('#refresh-captcha').addEventListener('click', generateCaptcha);

    // Validate form
    function validateForm() {
        const allFilled = [...formInputs].every(input => input.value.trim() !== '');
        const captchaMatch = captchaInput.value === currentCaptcha;
        const passwordMatch = passwordInput.value === confirmPasswordInput.value;

        // Captcha message
        if (captchaInput.value.trim() !== '') {
            captchaMsg.innerText = captchaMatch ? 'Captcha Matched ' : 'Captcha Not Matched ';
            captchaMsg.style.color = captchaMatch ? 'green' : 'red';
        } else {
            captchaMsg.innerText = '';
        }

        registerBtn.disabled = !(allFilled && captchaMatch && passwordMatch);
    }

    formInputs.forEach(input => input.addEventListener('input', validateForm));

    // Submit
    registerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Registration successful!');
        document.querySelector('#register-form').reset();
        generateCaptcha();
        captchaMsg.innerText = '';
        passwordInput.type = 'password';
        confirmPasswordInput.type = 'password';
        viewIcon.style.display = 'none';
        hideIcon.style.display = 'inline';
        viewIcon2.style.display = 'none';
        hideIcon2.style.display = 'inline';
        registerBtn.disabled = true;
    });
});