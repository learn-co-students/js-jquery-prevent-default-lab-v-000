$(document).ready(function(){
  submitForm()
  // call functions here
});

// define functions here
function submitForm() {
  $('form').on('submit', adds)
  

}
function adds(e) {

  
    var name = $('#item').val()
    $('#list ol').append("<li>"+ name +"</li>")
    event.preventDefault()
    
    

}