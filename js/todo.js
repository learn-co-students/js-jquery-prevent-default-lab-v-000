$(document).ready(function(){
  submitForm();
});

function submitForm() {
  $('form').on('submit', addItemToList);
}

function addItemToList(e) {
  var item = $("#item").val();
  $('ol').append("<li>" + item + "</li>");
  e.preventDefault();
}