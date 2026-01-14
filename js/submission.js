/**
 * Form Submission Handling for Contact Form
 * Handles the submission via Fetch and updates UI feedback
 */

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('form');
    const submitBtn = contactForm ? contactForm.querySelector('button[type="submit"]') : null;

    if (contactForm && submitBtn) {
        contactForm.addEventListener('submit', function (event) {
            // Only proceed if the form passes validation
            if (!contactForm.checkValidity()) {
                return;
            }

            // Prevent default form submission to handle via Fetch
            event.preventDefault();

            // Store original button content
            const originalBtnContent = submitBtn.innerHTML;

            // Show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Sending...';

            // Prepare form data
            const formData = new FormData(contactForm);

            // Note: Replace with actual endpoint if needed (e.g., Web3Forms)
            // For now, we simulate a successful submission if no action is provided
            const action = contactForm.getAttribute('action') || 'https://api.web3forms.com/submit';

            fetch(action, {
                method: 'POST',
                body: formData
            })
                .then(async (response) => {
                    if (response.ok) {
                        // Success state: Green button with tick
                        submitBtn.classList.remove('btn-dark');
                        submitBtn.classList.add('btn-success');
                        submitBtn.innerHTML = '<i class="fas fa-check me-2"></i>Message Sent!';

                        // Reset form
                        contactForm.reset();
                        contactForm.classList.remove('was-validated');

                        // Reset button after 5 seconds
                        setTimeout(() => {
                            submitBtn.classList.remove('btn-success');
                            submitBtn.classList.add('btn-dark');
                            submitBtn.innerHTML = originalBtnContent;
                            submitBtn.disabled = false;
                        }, 5000);
                    } else {
                        const result = await response.json();
                        throw new Error(result.message || 'Submission failed');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = 'Error! Try Again';
                    submitBtn.classList.remove('btn-dark');
                    submitBtn.classList.add('btn-danger');

                    setTimeout(() => {
                        submitBtn.classList.remove('btn-danger');
                        submitBtn.classList.add('btn-dark');
                        submitBtn.innerHTML = originalBtnContent;
                    }, 3000);
                });
        });
    }
});
