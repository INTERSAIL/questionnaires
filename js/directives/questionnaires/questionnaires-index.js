angular.module("Questionnaire")
    .directive("questionnairesIndex", function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/pages/questionnaires/questionnaires-index.html',
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