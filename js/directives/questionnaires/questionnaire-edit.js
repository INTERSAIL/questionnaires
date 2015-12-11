angular.module("Questionnaire")
    .directive("questionnaireEdit", function(configuration) {
        return {
            restrict: 'E',
            templateUrl: configuration.questionnaire_root + 'templates/pages/questionnaires/questionnaire-edit.html',
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