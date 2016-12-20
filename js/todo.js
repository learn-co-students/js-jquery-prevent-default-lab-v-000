$(document).ready(function(){

console.log("foo");
  submitForm();
});
function submitForm(){

  $('form').on('submit', function(event){
    event.preventDefault();
    var list = $('#list ol');
    var value = $("#item").val();
    list.append("<li>"+value+"</li>");

  })
}
// define functions here
