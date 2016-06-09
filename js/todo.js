$(document).ready(function(){
  // call functions here
  submitForm()
});

// define functions here
//class .
//id    #
function submitForm(){
  // :submit to select button and do stuff it being clicked
  $('form').on('submit', function(event){
    var item = $('#item').val();
    //using the ordered list append the information from the textbox to the list
    //$('#list ol').append("<li>" + $('#item').val() + "</li>");
    add(item);
    //all this without refreshing the webpage.
    event.preventDefault();
    //default functionality of submit button is the refresh the webpage.
  });
}

function add(item){
  $('#list ol').append("<li>" + item + "</li>");
}
