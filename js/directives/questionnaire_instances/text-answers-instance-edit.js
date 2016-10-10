angular.module("Questionnaire")
    .directive("textAnswersInstanceEdit", function(configuration, RecursionHelper) {
        return {
            restrict: 'E',
            templateUrl: configuration.questionnaire_root + 'templates/pages/questionnaire_instances/text-answers-instance-edit.html',
            scope: {
                question: "=",
                editable: "=",
                questionLevel: "=",
                showAnswer: "="
            },
            controller: 'TextAnswersInstanceEditController',
            controllerAs: 'questionnaireCtrl',
            replace: true
        };
    });