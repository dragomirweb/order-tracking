'use strict';

function MainCtrl($scope, dataService) {

  dataService.getTodos(function (response) {
    var todos = response.data.todos;
    $scope.todos = todos;
  });

  $scope.addTodo = function () {
    $scope.todos.unshift({
      name: "Nume Prenume",
      dateCreated: new Date,
      order: $scope.todos.length + 1,
      tel: '0745 000 000',
      completed: false
    });
  };

}

module.exports = MainCtrl;