$(document).ready(function(){
  // call functions here
  addItem();
});

// define functions here



function addItem(){
  $('form').on('submit', function(event){
    var listItem = $('input').val();
    $('#list ol').append('<li>' + listItem + '</li>')
    event.preventDefault();
  })
}

