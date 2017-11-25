$(document).ready(function(){
  // call functions here

  submitForm();
});

// define functions here
// function catchItem () {
//   $('form').on('submit', function(event){
//     var item = $('#item').val();
//     event.preventDefault();
//     return item;
//   });
// }
// var items = [];
//
// function listItems(items) {
//   $('#list ol li').each(function(index, li) {
//     $(this).text(items[index]);
//   });
// }

function submitForm () {
  $('form').on('submit', function(event){
    var item = $('#item').val();
    $('ol').append(`<li>${item}</li>`)
    // items.push(item);
    // $("#list ol li:last").text(item);
    // var node = document.createElement("li");
    // document.getElementById("myList").appendChild(node);
    event.preventDefault();
    // listItems(items);
  });
}

// function myFunction() {
//     var node = document.createElement("LI");
//     var textnode = document.createTextNode("Water");
//     node.appendChild(textnode);
//     document.getElementById("myList").appendChild(node);
// }

  // $('#list ol li').each(function(index, li) {
  //   var item = catchItem();
  //   $(this).text(item);
  // });
// }
