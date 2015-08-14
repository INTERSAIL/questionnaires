angular.module("Questionnaire")
    .directive("questionnairesIndex", function(configuration_root) {
        return {
            restrict: 'E',
            templateUrl: configuration_root + '/templates/pages/questionnaires/questionnaires-index.html',
            scope: {
                questionnaires: "=",
                questionnaire: "=",
                editable: "=",
                errors: "="
            },
            controller: 'QuestionnairesIndexController',
            controllerAs: 'questionnairesCtrl'
        };
    });