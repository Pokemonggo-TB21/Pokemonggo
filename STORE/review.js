// Add any necessary JavaScript functionality here
// For example, promo code validation or payment processing
document.querySelector('.payment-button').addEventListener('click', function() {
    // Handle payment processing
    alert('Redirecting to payment gateway...');
});

// Add any necessary JavaScript functionality
document.querySelector('.btn-primary').addEventListener('click', function() {
    // Handle payment processing
    alert('Redirecting to secure payment...');
});

document.addEventListener('DOMContentLoaded', function() {
    // Payment method selection
    document.querySelectorAll('.payment-option').forEach(option => {
        option.addEventListener('click', function(e) {
            document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('active'));
            this.classList.add('active');
            this.querySelector('input[type="radio"]').checked = true;
        });
    });

    // Initialize first option
    document.querySelector('.payment-option')?.classList.add('active');
    document.querySelector('.payment-option input[type="radio"]')?.checked = true;

    // Remove existing payment button handlers
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.onclick = null;
    });
});

// Global function for success modal
function showPaymentSuccess() {
    const paymentModal = bootstrap.Modal.getInstance(document.getElementById('paymentModal'));
    const successModal = new bootstrap.Modal(document.getElementById('successModal'));
    
    paymentModal.hide();
    successModal.show();
}

