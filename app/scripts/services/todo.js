'use strict';

angular.module('todoAngularAppApp')
  .factory('TodoService', function ($resource,fbURL) {
		var defaultParams, actions;
		defaultParams = {};
		actions = {};
		return $resource(fbURL, defaultParams, actions);
  });
