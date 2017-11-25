$(document).ready(function(){

  onSubmit();
  // call functions here
});

function submitForm() {
  $( 'form' ).on( 'submit', addItem );
  event.preventDefault();
}
// define functions here

function addItem() {
  var item = $( '#item' ).val();
  $( '#list ol' ).append( "<li>" + item + "</li>");
}
