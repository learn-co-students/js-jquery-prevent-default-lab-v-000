$(document).ready(function(){
  // call functions here
  addItem();
});
function submitForm(){
 $('form').on('submit', function(event){
    var item = $('#item').val();
   $("#list ol").append('<li>'+item+'</li><br />');
    event.preventDefault();
   });

}