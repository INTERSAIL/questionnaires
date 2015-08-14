angular.module("Questionnaire")
    .directive("questionnaireEdit", function(configuration_root) {
        return {
            restrict: 'E',
            templateUrl: configuration_root + '/templates/pages/questionnaires/questionnaire-edit.html',
            scope: {
                questionnaire: "=",
                editable: "=",
                errors: "="
            },
            controller: 'QuestionnaireEditController',
            controllerAs: 'questionnaireCtrl'
        };
    });