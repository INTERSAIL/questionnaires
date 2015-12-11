angular.module("Questionnaire")
    .config(['$routeProvider', 'configuration', function($routeProvider, configuration) {
        $routeProvider.when('/questionnaires', {
            templateUrl: configuration.questionnaire_root + 'templates/pages/questionnaires/index.html',
            controller: 'QuestionnairesController',
            controllerAs: 'questionnairesCtrl'
        })
        .when('/questionnaire_instances/:id', {
            templateUrl: configuration.questionnaire_root + 'templates/pages/questionnaire_instances/edit.html',
            controller: 'QuestionnaireInstancesController',
            controllerAs: 'questionnaireInstancesCtrl'
        })
        .otherwise({
            redirectTo: '/questionnaires'
        })
    }]);