$(document).ready(function(){
  // call functions here
});

function submitForm(){
  $("form").on("submit", function(){
    var item = $('#item').val();
    $('ol').append("<li>" + item + "</li");
    event.preventDefault();
 });
}

// function add(){
//   var item = $('#item').val();
//     $('ol').append("<li>" + item + "</li");
//     event.preventDefault();
//  });
// }