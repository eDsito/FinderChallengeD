var finderChanApp=angular.module('finderChanApp', ['ngRoute']);

finderChanApp.config(function ($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'templates/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/Drama', {
				templateUrl : 'templates/drama.html',
				controller  : 'dramaController'
			})
			// route for the about page
			.when('/Comedia', {
				templateUrl : 'templates/comedia.html',
				controller  : 'comediaController'
			})
			// route for the about page
			.when('/Terror', {
				templateUrl : 'templates/terror.html',
				controller  : 'terrorController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'templates/contact.html',
				controller  : 'contactController'
			});
	});
finderChanApp.controller('mainController',function ($scope,$http) {
	/*$scope.filteredTodos = []
	,$scope.currentPage = 1
	,$scope.numPerPage = 5
	,$scope.maxSize = 5;*/
	/**************anterior*************************/
	$scope.importar=function(){
		$http.get('https://bitbucket.org/unt_taller_es/finderchallenge/raw/f15b72bdf763ae5d11b03a81781469812cc3500d/public/books-schema.json').then(function(datos){
			$scope.lista=datos;
			console.log(datos);

		})
	}
	$scope.importar();
	$scope.goButton = false;
	$scope.filtrar = function(q) {
        $scope.filtro = q;
    }
	
});

	/**************anterior*************************
	$scope.makeImportar = function(){
		$scope.lista = [];
		$http.get('https://bitbucket.org/unt_taller_es/finderchallenge/raw/f15b72bdf763ae5d11b03a81781469812cc3500d/public/books-schema.json').then(function(datos){
			for (i=1;i<=1000;i++)
			$scope.lista=datos;
			console.log(datos);
		});
		
		
    		
	}		
	$scope.makeImportar(); 
	$scope.numPages = function () {
    	return Math.ceil($scope.lista.length / $scope.numPerPage);
  	};
  
  $scope.$watch('currentPage + numPerPage', function() {
    var begin = (($scope.currentPage - 1) * $scope.numPerPage), end = begin + $scope.numPerPage;    
    $scope.filteredTodos = $scope.lista.slice(begin, end);
  });
/******************fin controller************/
// 		});

	


/* List view*/


finderChanApp.controller('contactController',function ($scope) {
		$scope.message = 'Edward Castillo Rodriguez - 943293096';
		console.log('cargue contact')
});

finderChanApp.controller('dramaController',function ($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
		console.log('cargue dramaController')
});
finderChanApp.controller('comediaController',function ($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
		console.log('cargue comediaController')
});

finderChanApp.controller('terrorController',function ($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
		console.log('cargue TerrorController')
});