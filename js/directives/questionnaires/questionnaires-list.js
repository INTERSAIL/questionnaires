angular.module("Questionnaire")
    .directive("questionnairesList", function(configuration) {
        return {
            restrict: 'E',
            templateUrl: configuration.questionnaire_root + 'templates/pages/questionnaires/questionnaires-list.html',
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