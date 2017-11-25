$(document).ready(function(){
  // call functions here
  submitForm();
});

function submitForm() {
  $('form').on('submit', listProduce);
}

function listProduce(event){
    var item = $('#item').val();
    $("ol").append('<li>'+ item + '</li>');
    event.preventDefault();
    //trying to get form field to clear but doesnt work
     // item.value = " ";
  }