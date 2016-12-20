/*************************************
Configuración del router de la app
*************************************/

(function (){
	'use strict';

	function config ($routeProvider, $locationProvider)
	{
		// Configuramos las rutas
		$routeProvider
			.when('/', {
				controller: 'mainController',
				controllerAs: 'vm',
				templateUrl: 'views/home.html'
			})
			.when('/page1', {
				controller: 'mainController',
				controllerAs: 'vm',
				templateUrl: 'views/page1.html'
			})
			.when('/page2', {
				controller: 'mainController',
				controllerAs: 'vm',
				templateUrl: 'views/page2.html'
			})
			// En caso de no existir la ruta redireccionamos aqui
			.otherwise({
				redirectTo: '/'
		    });

		// Quitamos el hashtag de las url
		if(window.history && window.history.pushState) {
	       $locationProvider.html5Mode(true);
	   }
	}

	angular
		.module('app')
			.config([
				'$routeProvider',
				'$locationProvider',
				config
			]);
})();