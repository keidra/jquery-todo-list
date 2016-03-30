$('#myForm').submit(function(event){
  var input_value = $('input:text').val();
  if ($('input:text').val() !== '') {  
    $('ol').append('<li>' + input_value + '<a href= "">x</a></li>');
  };

  $('input:text').val('');
  return false

});

  $(document).on('click', 'a', function (event) {
    event.preventDefault();
    $(this).parent().remove();
});
  
 $(document).on('click', function(event) {
    $( "#list" ).sortable({
      placeholder: "#list"
    });
    $( "#list" ).disableSelection();
  });



