$('#myForm').submit(function(event){
  event.preventDefault();

  $(this).children('input:text').each(function(index, elem) {
    var value = $(elem).val();
    $('#list').append('<li>' + value + '</li>' + " " + '<a href=""> X </a>');
    $(elem).val('');

  });

  $(document).on('click', 'a', function (event) {
    event.preventDefault();
    $(this).parent().remove();
});

});
