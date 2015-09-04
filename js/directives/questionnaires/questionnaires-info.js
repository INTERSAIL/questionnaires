angular.module("Questionnaire")
    .directive("questionnairesInfo", function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/pages/questionnaires/questionnaires-info.html',
            scope: {
                questionnaires: "=",
                selectedQuestionnaire: "=",
                editable: "=",
                errors: "="
            },
            controller: 'QuestionnairesInfoController',
            controllerAs: 'questionnaireCtrl'
        };
    });