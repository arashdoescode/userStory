angular.module('reverseDirective', [])

.filter('reverse', function() {

	return function(items) {
		return items.slice().reverse();
	}

});