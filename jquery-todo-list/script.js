$('#myForm').submit(function(event){
  if ($('input:text').val() !== '') {
    var input_value = $('input:text').val();
    $('ol').append('<li>' + input_value + '<a href= "">x</a></li>');
  };

  $('input:text').val('');
  return false

});

  $(document).on('click', 'a', function (event) {
    event.preventDefault();
    $(this).parent().remove();
});
  


