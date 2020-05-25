(function() {
  $(document).ready(function() {
    'use strict';

    // inputmask for Phone Number
    $('#phone').inputmask({'mask': '(999) 999-99-99'});

    // inputmask for Credit Card Number
    $('#credit-card').inputmask({'mask': '9999 - 9999 - 9999 - 9999'});

    // inputmask for Expiration Date of Credit Card
    $('#ex-date').inputmask({'mask': '99 / 99'});

    // automatically change first letter from lowercase to uppercase
    $('#fname, #lname').on('keypress', function() {
      const valueF = $('#fname').val();
      const valueL = $('#lname').val();
      const txtF = valueF.charAt(0).toUpperCase() + valueF.slice(1);
      const txtL = valueL.charAt(0).toUpperCase() + valueL.slice(1);
      $('#fname').val(txtF);
      $('#lname').val(txtL);
    });

    // additional methods for jQuery Validation

    // Only letters + polish letters
    jQuery.validator.addMethod(
      'lettersonly', function(value, element) {
        return (
          // eslint-disable-next-line no-invalid-this
          this.optional(element) || /^[a-ząćęłńóśźż]+$/i.test(
            value
          )
        );
      },
      'Only letters'
    );

    // email validation
    jQuery.validator.addMethod(
      'customEmail',
      function(value, element) {
        return (
          // eslint-disable-next-line no-invalid-this
          this.optional(element) ||
          // eslint-disable-next-line max-len
          /^[_A-Za-z0-9-]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,4})$/i.test(
            value
          )
        );
      },
      'Please enter valid email address'
    );

    // phone validation
    jQuery.validator.addMethod(
      'customPhone',
      function(value, element) {
        return (
          // eslint-disable-next-line no-invalid-this
          this.optional(element) ||
          // eslint-disable-next-line max-len
          /^\(?[0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}$/i.test(
            value
          )
        );
      },
      'Please enter valid format (xxx) xxx-xx-xx'
    );

    // VISA card number validation
    jQuery.validator.addMethod(
      'customVisaNumber',
      function(value, element) {
        return (
          // eslint-disable-next-line no-invalid-this
          this.optional(element) ||
          // eslint-disable-next-line max-len
          // Visa card numbers start with a 4.
          /^4[0-9]{3}\s\-\s[0-9]{4}\s\-\s[0-9]{4}\s\-\s[0-9]{4}$/g.test(
            value
          )
        );
      },
      'Please enter valid format 4xxx - xxxx - xxxx - xxxx'
    );

    // expiration date validation
    jQuery.validator.addMethod(
      'customExpirationDate',
      function(value, element) {
        return (
          // eslint-disable-next-line no-invalid-this
          this.optional(element) ||
          // eslint-disable-next-line max-len
          /^(0[1-9]|1[0-2])\s\/\s([0-9]{2})$/i.test(
            value
          )
        );
      },
      'Please enter valid format MM / YY'
    );

    // FORM validation
    const mainForm = $('#check_out_form').validate({
      rules: {
        firstname: {
          required: true,
          lettersonly: true,
        },
        lastname: {
          required: true,
          lettersonly: true,
        },
        email: 'required customEmail',
        country: 'required',
        postal: {
          required: true,
          digits: true,
          rangelength: [5, 5],
        },
        phone: 'required customPhone',
        creditcard: 'required customVisaNumber',
        scode: {
          required: true,
          digits: true,
          rangelength: [3, 3],
        },
        exdate: 'required customExpirationDate',
      },
      errorElement: 'span',
      messages: {
        firstname: {
          required: 'Required field',
          lettersonly: 'Only letters',
        },
        lastname: {
          required: 'Required field',
          lettersonly: 'Only letters',
        },
        email: {
          required: 'Required field',
        },
        country: {
          required: 'Required field',
        },
        postal: {
          required: 'Required field',
          digits: 'Only 5 digits',
          rangelength: 'Please enter exactly 5 digits',
        },
        phone: {
          required: 'Required field',
        },
        creditcard: {
          required: 'Required field',
        },
        scode: {
          required: 'Required field',
          digits: 'Only 3 digits',
          rangelength: 'Please enter exactly 3 digits',
        },
        exdate: {
          required: 'Required field',
        },
      },
      highlight(element) {
        $(element)
          .parent()
          .removeClass('pass-message');
        $(element)
          .parent()
          .addClass('error-message');
        $(element)
          .parent()
          .find('span.error')
          .fadeIn(300);
      },
      unhighlight(element) {
        $(element)
          .parent()
          .removeClass('error-message');
        $(element)
          .parent()
          .addClass('pass-message');
      },
      submitHandler() {
        $('.message-status').addClass('sent');
      },
    });

    jQuery.validator.prototype.hideErrors = function() {
      this.addWrapper(this.toHide).fadeOut(300);
    };

    $('#check_out_form button#submit-form').on('click', function() {
      mainForm.form();
    });
  });
})(jQuery);
