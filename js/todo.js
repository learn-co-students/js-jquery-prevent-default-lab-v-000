$(document).ready(function(){
  // call functions here
  submit();
});

// define functions here

function submit(){
$( 'form' ).submit(function( event ) {
   var item = $("#item").val();
   $('ol').append('<li>' + item + '</li>');
  event.preventDefault();
});
}