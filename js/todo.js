$(document).ready(function(e){
  // call functions here
      listItems();
});

// define functions here

function listItems(){
$('form').on('submit', function(event){
    value = $('#item').val();
    $('ol').text(value);
   
}

})
   