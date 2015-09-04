angular.module("Questionnaire")
    .directive("questionnairesList", function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/pages/questionnaires/questionnaires-list.html',
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