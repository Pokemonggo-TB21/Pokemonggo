document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
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
    const passwordValidationElement = document.getElementById('passwordValidation');

    // Panel switching
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

    // Password requirements popup
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

        // Close popup when clicking outside
        document.addEventListener('click', (e) => {
            if (!passwordRequirementsPopup.contains(e.target) && 
                !passwordInfoBtn.contains(e.target)) {
                passwordRequirementsPopup.classList.remove('active');
            }
        });

        // Prevent popup from closing when clicking inside it
        passwordRequirementsPopup.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // Generate a random number between min and max (inclusive)
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Generate a trainer ID in the format #### #### ####
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

    // Set initial trainer ID
    trainerIdInput.value = generateTrainerId();

    // Generate new ID on button click
    generateIdBtn.addEventListener('click', () => {
        trainerIdInput.value = generateTrainerId();
        
        // Add rotation animation
        generateIdBtn.style.transform = 'rotate(180deg)';
        setTimeout(() => {
            generateIdBtn.style.transform = 'rotate(0)';
        }, 500);
    });

    // Form submission handling
    const signInForm = document.querySelector('.sign-in-form form');
    const signUpForm = document.querySelector('.sign-up-form form');

    signInForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const remember = document.getElementById('remember').checked;

        // Add your sign-in logic here
        console.log('Sign in attempt:', { email, password, remember });
    });

    // Password validation
    const passwordValidators = {
        length: (password) => password.length >= 8,
        uppercase: (password) => /[A-Z]/.test(password),
        lowercase: (password) => /[a-z]/.test(password),
        number: (password) => /[0-9]/.test(password),
        special: (password) => /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };

    const validationMessages = {
        length: 'Password must be at least 8 characters long',
        uppercase: 'Password must contain at least one uppercase letter',
        lowercase: 'Password must contain at least one lowercase letter',
        number: 'Password must contain at least one number',
        special: 'Password must contain at least one special character'
    };

    passwordInput.addEventListener('input', (e) => {
        const password = e.target.value;
        let isValid = true;
        let message = '';

        // Check each requirement
        for (const [requirement, validator] of Object.entries(passwordValidators)) {
            if (!validator(password)) {
                isValid = false;
                message = validationMessages[requirement];
                break;
            }
        }

        // Update validation message
        if (password.length > 0) {
            passwordValidationElement.textContent = message;
            passwordValidationElement.classList.toggle('visible', !isValid);
        } else {
            passwordValidationElement.textContent = '';
            passwordValidationElement.classList.remove('visible');
        }
    });

    // Form submission
    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const trainerId = trainerIdInput.value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const ign = document.getElementById('ign').value;

        // Add your sign-up logic here
        console.log('Sign up attempt:', { trainerId, email, password, ign });
    });
});
