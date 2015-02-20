$(document).ready(function() {
  $("form#new-list").submit(function(event) {
    event.preventDefault();

    var listName = $("input#list-name").val();
    var newList = { tasks: [] };
    newList.name = listName;

    $('ul#lists').append("<li><span class ='list-name'>" +
    newList.name + "</span></li>");

    $('input#new-list').val("");

    $(".list-name").last().click(function() {
      $("ul#tasks").empty();

      newList.tasks.forEach(function(task) {
        $("ul#tasks").append("<li>" + task + "</li>");
      });

      $("#show-list-name h2").text(newList.name);
      $("#show-list-name").show();


      // unbind all other submit events on form#new-tasks using jQuery off method
      $("form#new-tasks").off();
      $("form#new-tasks").submit(function(event) {
        event.preventDefault();

        var newTask = $("input#new-task").val();
        newList.tasks.push(newTask);

        $("ul#tasks").append("<li>" + newTask + "</li>");
      })

    });
  });
});
