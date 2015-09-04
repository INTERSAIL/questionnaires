angular.module("Questionnaire")
    .directive("questionnaireInstanceEdit", function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/pages/questionnaire_instances/questionnaire-instance-edit.html',
            scope: {
                questionnaireInstance: "=",
                editable: "=",
                errors: "=",
                questionnaireInstanceValid: "="
            },
            controller: 'QuestionnaireInstanceEditController',
            controllerAs: 'questionnaireCtrl',
            link: function(scope, element, attrs) {
                scope.editable = true;

                scope.$watch('frmQuestionnaire.$valid', function(validity) {
                    scope.questionnaireInstanceValid = validity;
                });
            }
        };
    });