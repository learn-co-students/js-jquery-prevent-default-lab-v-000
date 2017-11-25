$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here

function submitForm() {
  $('form').on('submit', function(event) {
    var itemNew = $('#item').val();
    var liNew = document.createElement('li');
    var node = document.createTextNode(itemNew);
    liNew.appendChild(node);
    var element = $('div#list ol');
    element.append(liNew);
    event.preventDefault();
  })
}
