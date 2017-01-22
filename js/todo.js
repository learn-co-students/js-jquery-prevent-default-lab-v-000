$(document).ready(function(){
  // call functions here
  addItem();
});

// define functions here

function submit(){
  $('input').on('submit', addItem)
}


function addItem(){
    var listItem = $('input#item').val();
    $('#list ol').append(listItem)
    event.preventDefault();
  }
