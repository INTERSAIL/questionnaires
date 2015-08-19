angular.module("Questionnaire")
    .directive("questionnairesInfo", function(configuration_root) {
        return {
            restrict: 'E',
            templateUrl: configuration_root + '/templates/pages/questionnaires/questionnaires-info.html',
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