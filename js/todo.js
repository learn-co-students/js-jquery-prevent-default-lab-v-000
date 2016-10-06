$(document).ready(function(){
  submitForm();
});

function submitForm() {
  $('form').on('submit', function(event) {
    var item = $('#item').val();
    var list = $('#list ol')[0];
    var newLI = document.createElement("li");
    // debugger;
    newLI.appendChild(document.createTextNode(item))
    list.appendChild(newLI)
    event.preventDefault();
    // or more simply:
    // $('ol').append( '<li>' + item + '</li>' );
  });
};
