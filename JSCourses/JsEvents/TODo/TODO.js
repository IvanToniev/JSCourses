function TodoCtrl($scope) {
    $scope.todos = [
        { text: 'Form input for new item', done: true },
        { text: 'Button for adding the new item', done: true },
        { text: 'Button for deleting some item' },
        { text: 'Show and hide button' }
    ];

    $scope.add = function () {
        $scope.todos.push({ text: $scope.todoText });
        $scope.todoText = '';
    };

    $scope.getRemaining = function () {
        return $scope.todos.filter(function (todo) { return !todo.done });
    };
}