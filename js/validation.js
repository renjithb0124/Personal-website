/**
 * Form Validation for Contact Form
 * Uses Bootstrap 5 validation patterns
 */

(function () {
    'use strict'

    // Fetch the contact form
    const contactForm = document.getElementById('form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            // Check if form is valid
            if (!contactForm.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            // Custom email validation (regex for better coverage if needed)
            const emailInput = document.getElementById('email');
            if (emailInput && emailInput.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailInput.value)) {
                    emailInput.setCustomValidity('Invalid email format');
                } else {
                    emailInput.setCustomValidity('');
                }
            }

            contactForm.classList.add('was-validated');
        }, false);

        // Clear custom validity on input
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                input.setCustomValidity('');
                if (contactForm.classList.contains('was-validated')) {
                    // re-validate on the fly if already tried to submit
                }
            });
        });
    }
})();
