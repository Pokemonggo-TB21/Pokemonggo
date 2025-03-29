document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const signUpBtn = document.getElementById('signUpBtn');
    const signInBtn = document.getElementById('signInBtn');
    const generateIdBtn = document.getElementById('generateId');
    const trainerIdInput = document.getElementById('trainerId');
    const togglePasswordBtns = document.querySelectorAll('.toggle-password');
    const passwordInfoBtn = document.querySelector('.password-info-btn');
    const passwordRequirementsPopup = document.querySelector('.password-requirements-popup');
    const closePopupBtn = document.querySelector('.close-popup');
    const passwordInput = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const passwordValidationElement = document.getElementById('passwordValidation');
    const loginPasswordInput = document.getElementById('loginPassword');
    const loginPasswordValidation = document.getElementById('loginPasswordValidation');
    const signInForm = document.querySelector('.sign-in-form form');
    const signUpForm = document.querySelector('.sign-up-form form');

    signUpBtn.addEventListener('click', () => {
        container.classList.add('right-panel-active');
    });

    signInBtn.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
    });

    // Password visibility toggle
    togglePasswordBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const input = btn.previousElementSibling;
            const icon = btn.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('bx-show');
                icon.classList.add('bx-hide');
            } else {
                input.type = 'password';
                icon.classList.remove('bx-hide');
                icon.classList.add('bx-show');
            }
        });
    });

    if (passwordInfoBtn && passwordRequirementsPopup) {
        passwordInfoBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            passwordRequirementsPopup.classList.toggle('active');
        });

        closePopupBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            passwordRequirementsPopup.classList.remove('active');
        });

        document.addEventListener('click', (e) => {
            if (!passwordRequirementsPopup.contains(e.target) && 
                !passwordInfoBtn.contains(e.target)) {
                passwordRequirementsPopup.classList.remove('active');
            }
        });

        passwordRequirementsPopup.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateTrainerId() {
        let id = '';
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                id += getRandomNumber(0, 9);
            }
            if (i < 2) id += ' ';
        }
        return id;
    }

    if (trainerIdInput) {
        trainerIdInput.value = generateTrainerId();
    }

    if (generateIdBtn) {
        generateIdBtn.addEventListener('click', () => {
            trainerIdInput.value = generateTrainerId();
            
            // Add rotation animation
            generateIdBtn.style.transform = 'rotate(180deg)';
            setTimeout(() => {
                generateIdBtn.style.transform = 'rotate(0)';
            }, 500);
        });
    }

    const validationRules = {
        length: { regex: /.{8,}/, message: 'Password must be at least 8 characters long' },
        uppercase: { regex: /[A-Z]/, message: 'Password must contain at least one uppercase letter' },
        lowercase: { regex: /[a-z]/, message: 'Password must contain at least one lowercase letter' },
        number: { regex: /[0-9]/, message: 'Password must contain at least one number' },
        special: { regex: /[!@#$%^&*(),.?":{}|<>]/, message: 'Password must contain at least one special character' }
    };

    if (loginPasswordInput) {
        loginPasswordInput.addEventListener('input', function() {
            if (this.value === '') {
                this.style.borderColor = '#fecb04';
                loginPasswordValidation.textContent = '';
                loginPasswordValidation.classList.remove('visible');
                return;
            }

            if (this.value.length < 8) {
                this.style.borderColor = '#ff4444';
                loginPasswordValidation.textContent = 'Password must be at least 8 characters long';
                loginPasswordValidation.classList.add('visible');
            } else {
                this.style.borderColor = '#00C851';
                loginPasswordValidation.textContent = '';
                loginPasswordValidation.classList.remove('visible');
            }
        });
    }

    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            let isValid = true;
            let message = '';

            if (this.value === '') {
                this.style.borderColor = '#fecb04';
                passwordValidationElement.textContent = '';
                passwordValidationElement.classList.remove('visible');
                return;
            }

            for (const [rule, { regex, message: ruleMessage }] of Object.entries(validationRules)) {
                if (!regex.test(this.value)) {
                    isValid = false;
                    message = ruleMessage;
                    this.style.borderColor = '#ff4444';
                    break;
                }
            }

            if (isValid) {
                this.style.borderColor = '#00C851';
            }

            passwordValidationElement.textContent = message;
            passwordValidationElement.classList.toggle('visible', !isValid);
        });
    }

    if (confirmPassword) {
        confirmPassword.addEventListener('input', function() {
            if (this.value === '') {
                this.style.borderColor = '#fecb04';
                return;
            }

            if (this.value !== passwordInput.value) {
                this.setCustomValidity('Passwords do not match');
                this.style.borderColor = '#ff4444';
            } else {
                this.setCustomValidity('');
                this.style.borderColor = '#00C851';
            }
        });
    }

    if (signInForm) {
        signInForm.addEventListener('submit', (e) => {
            e.preventDefault();
            window.location.href = 'https://pokemonggo-tb21.github.io/Pokemonggo/HOME%20PAGE/pokehomesignedin.html';
        });
    }

    if (signUpForm) {
        signUpForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (passwordInput.value !== confirmPassword.value) {
                alert('Passwords do not match!');
                return;
            }

            let isValid = true;
            for (const [rule, { regex }] of Object.entries(validationRules)) {
                if (!regex.test(passwordInput.value)) {
                    isValid = false;
                    break;
                }
            }

            if (!isValid) {
                alert('Please ensure your password meets all requirements!');
                return;
            }
            
            // If all validations pass, proceed to dashboard
            window.location.href = 'https://pokemonggo-tb21.github.io/Pokemonggo/HOME%20PAGE/pokehomesignedin.html';
        });
    }
});
