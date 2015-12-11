angular.module("Questionnaire")
    .directive("questionnairesInfo", function(configuration) {
        return {
            restrict: 'E',
            templateUrl: configuration.questionnaire_root + 'templates/pages/questionnaires/questionnaires-info.html',
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