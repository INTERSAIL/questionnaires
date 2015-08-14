angular.module("Questionnaire")
    .config(['$routeProvider', 'configuration_root', function($routeProvider, configuration_root) {
        $routeProvider.when('/questionnaires', {
            templateUrl: configuration_root + '/templates/pages/questionnaires/index.html',
            //templateUrl: '/Test/templates/pages/questionnaires/questionnaires-list.html',
            controller: 'QuestionnairesController',
            controllerAs: 'questionnairesCtrl'
        })
        //.when('/questionnaires/:id', {
        //    templateUrl: '/Test/templates/pages/questionnaires/questionnaire-edit.js',
        //    controller: 'QuestionnairesController',
        //    controllerAs: 'questionnairesCtrl'
        //})
        .otherwise({
            redirectTo: '/questionnaires'
        })
    }]);