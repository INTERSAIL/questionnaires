angular.module("Questionnaire")
    .directive("questionnairesIndex", function(configuration) {
        return {
            restrict: 'E',
            templateUrl: configuration.root + '/templates/pages/questionnaires/questionnaires-index.html',
            scope: {
                questionnaires: "=",
                questionnaire: "=",
                editable: "=",
                errors: "=",
                questionnaireValid: "="
            },
            controller: 'QuestionnairesIndexController',
            controllerAs: 'questionnairesCtrl'
        };
    });