(function() {
  $(document).ready(function() {
    'use strict';

    $('#fname, #lname').on('keypress', function() {
      const valueF = $('#fname').val();
      const valueL = $('#lname').val();
      const txtF = valueF.charAt(0).toUpperCase() + valueF.slice(1);
      const txtL = valueL.charAt(0).toUpperCase() + valueL.slice(1);
      $('#fname').val(txtF);
      $('#lname').val(txtL);
    });

    // additional methods for jQuery Validation
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

    jQuery.validator.addMethod(
      'customVisaNumber',
      function(value, element) {
        return (
          // eslint-disable-next-line no-invalid-this
          this.optional(element) ||
          // eslint-disable-next-line max-len
          /^[0-9]{4}\s\-\s[0-9]{4}\s\-\s[0-9]{4}\s\-\s[0-9]{4}$/i.test(
            value
          )
        );
      },
      'Please enter valid format xxxx - xxxx - xxxx - xxxx'
    );

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
          required: 'Required filed',
          lettersonly: 'Only letters',
        },
        lastname: {
          required: 'Required filed',
          lettersonly: 'Only letters',
        },
        email: {
          required: 'Required filed',
        },
        country: {
          required: 'Required filed',
        },
        postal: {
          required: 'Required filed',
          digits: 'Only digits',
          rangelength: 'Please enter exactly 5 digits',
        },
        phone: {
          required: 'Required filed',
        },
        creditcard: {
          required: 'Required filed',
        },
        scode: {
          required: 'Required filed',
          digits: 'Only digits',
          rangelength: 'Please enter exactly 3 digits',
        },
        exdate: {
          required: 'Required filed',
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
