angular.module("Questionnaire")
    .directive("questionnaireEdit", function(configuration_root) {
        return {
            restrict: 'E',
            templateUrl: configuration_root + '/templates/pages/questionnaires/questionnaire-edit.html',
            scope: {
                questionnaire: "=",
                editable: "=",
                errors: "=",
                questionnaireValid: "="
            },
            controller: 'QuestionnaireEditController',
            controllerAs: 'questionnaireCtrl',
            link: function(scope, element, attrs) {
                scope.$watch('frmQuestionnaire.$valid', function(validity) {
                    scope.questionnaireValid = validity;
                });
            }
        };
    });