angular.module("Questionnaire")
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/questionnaires', {
            templateUrl: 'templates/pages/questionnaires/index.html',
            controller: 'QuestionnairesController',
            controllerAs: 'questionnairesCtrl'
        })
        .when('/questionnaire_instances/:id', {
            templateUrl: 'templates/pages/questionnaire_instances/edit.html',
            controller: 'QuestionnaireInstancesController',
            controllerAs: 'questionnaireInstancesCtrl'
        })
        .otherwise({
            redirectTo: '/questionnaires'
        })
    }]);