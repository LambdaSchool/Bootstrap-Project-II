
// Enable tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

// Trigger modal on submit, prevent post
$('#contactForm').submit(function(e) {
  e.preventDefault(e);
  console.log('submitted');
  $('#contactSuccessModal').modal();
});