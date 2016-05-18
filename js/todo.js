$(document).ready(function(){
  submitForm();
});

function submitForm() {
  $('form').on('submit', function(){
    var item = $('#item').val();
    $("div#list ol").append("<li>" + item + "</li>");
    event.preventDefault();
  });
}
