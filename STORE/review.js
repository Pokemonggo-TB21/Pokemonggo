document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.payment-option').forEach(function(option) {
      option.addEventListener('click', function(e) {
        document.querySelectorAll('.payment-option').forEach(function(o) {
          o.classList.remove('active');
        });
        this.classList.add('active');
        var radio = this.querySelector('input[type="radio"]');
        if (radio) {
          radio.checked = true;
        }
      });
    });
    
    var firstOption = document.querySelector('.payment-option');
    if (firstOption) {
      firstOption.classList.add('active');
      var firstRadio = firstOption.querySelector('input[type="radio"]');
      if (firstRadio) {
        firstRadio.checked = true;
      }
    }

    // Promo code handling
    const promoGroup = document.querySelector('.promo-code-group');
    const promoInput = document.getElementById('promoCodeInput');
    const applyBtn = document.getElementById('applyPromoBtn');
    const totalPrice = document.querySelector('.price-change');

    applyBtn.addEventListener('click', function() {
        if (promoInput.value.trim() !== '') {
            // Add the applied class to show the success state
            promoGroup.classList.add('applied');
            
            // Disable the input and button
            promoInput.disabled = true;
            applyBtn.disabled = true;
            
            // Change button text
            applyBtn.textContent = 'Applied';
            
            // Add a small delay before removing the effect (optional)
            setTimeout(() => {
                promoGroup.classList.remove('applied');
                promoInput.disabled = false;
                applyBtn.disabled = false;
                applyBtn.textContent = 'Apply';
                promoInput.value = '';
            }, 3000); // Reset after 3 seconds
        }
    });

    // Payment confirmation handling
    const confirmPaymentBtn = document.querySelector('#paymentModal .btn-primary');
    const paymentModal = document.getElementById('paymentModal');
    const successOverlay = document.querySelector('.success-overlay');
    const successMessage = document.querySelector('.payment-success');

    confirmPaymentBtn.addEventListener('click', function() {
        // Close the payment modal
        const modal = bootstrap.Modal.getInstance(paymentModal);
        modal.hide();

        // Show success message
        setTimeout(() => {
            successOverlay.classList.add('show');
            successMessage.classList.add('show');
        }, 300);
    });
});

function showPaymentSuccess() {
    var toastEl = document.getElementById('paymentToast');
    var toast = new bootstrap.Toast(toastEl);
    toast.show();
}

function closeSuccessMessage() {
    const successOverlay = document.querySelector('.success-overlay');
    const successMessage = document.querySelector('.payment-success');
    
    successOverlay.classList.remove('show');
    successMessage.classList.remove('show');
    
    // Redirect to store page after a short delay
    setTimeout(() => {
        window.location.href = 'store.html';
    }, 300);
}
