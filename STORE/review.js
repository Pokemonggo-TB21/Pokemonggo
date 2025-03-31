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
  });

  function showPaymentSuccess() {
    var toastEl = document.getElementById('paymentToast');
    var toast = new bootstrap.Toast(toastEl);
    toast.show();
  }
