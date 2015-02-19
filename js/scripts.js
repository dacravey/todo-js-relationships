$(document).ready(function() {
  $("form#new-list").submit(function(event) {
    event.preventDefault();

    var listName = $("input#list-name").val();
    var newList = { tasks: [] };
    newList.name = listName;

    $('ul#lists').append("<li><span class ='list-name'>" +
    newList.name + "</span></li>");

    $('input#new-list').val("");
  });

});
