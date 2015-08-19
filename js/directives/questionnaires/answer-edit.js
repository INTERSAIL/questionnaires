angular.module("Questionnaire")
    .directive("answerEdit", function(configuration_root) {
        return {
            restrict: 'E',
            templateUrl: configuration_root + '/templates/pages/questionnaires/answer-edit.html',
            scope: {
                answerTypes: "=",
                question: "=",
                answer: "=",
                editable: "=",
                questionLevel: "="
            },
            controller: 'AnswerEditController',
            controllerAs: 'questionnaireCtrl',
            replace: true
        };
    });