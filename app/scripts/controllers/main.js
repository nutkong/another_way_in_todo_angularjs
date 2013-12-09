'use strict';

angular.module('todoAngularAppApp')
  .controller('TodoCtrl', function ($scope,TodoService) {
    $scope.items = [];

    $scope.init = function() {
        var items, params;
        params = {};
        items = TodoService.query(params, $scope.loadItems); 
    };

    $scope.loadItems = function(items) {
        items.forEach(function(json) {
            $scope.addItem(json.title, json.done);
        });
    };

    $scope.getItemLength = function() {
        return $scope.items.length;
    };
    
    $scope.getItem = function(order) {
        var index = order - 1;
        return $scope.items[index];
    };

    $scope.addItem = function(description, done) {
        var newItem;
        if(done == undefined)
            done = false;
        newItem = new Item(description, done);
        $scope.items.push(newItem);
    }

    $scope.formSubmitted = function() {
        $scope.addItem($scope.newDescription);
        $scope.newDescription = '';
    }
  });
