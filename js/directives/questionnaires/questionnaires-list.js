angular.module("Questionnaire")
    .directive("questionnairesList", function(configuration_root) {
        return {
            restrict: 'E',
            templateUrl: configuration_root + '/templates/pages/questionnaires/questionnaires-list.html',
            scope: {
                questionnaires: "=",
                selectedQuestionnaire: "=",
                editable: "=",
                errors: "="
            },
            controller: 'QuestionnairesListController',
            controllerAs: 'questionnairesCtrl'
        };
    });