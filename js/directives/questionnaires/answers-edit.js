angular.module("Questionnaire")
    .directive("answersEdit", function(configuration, RecursionHelper) {
        return {
            restrict: 'E',
            templateUrl: configuration.root + '/templates/pages/questionnaires/answers-edit.html',
            scope: {
                answerTypes: "=",
                question: "=",
                editable: "=",
                questionLevel: "="
            },
            controller: 'AnswersEditController',
            controllerAs: 'questionnaireCtrl',
            replace: true,
            compile: function(element) {
                // Use the compile function from the RecursionHelper,
                // And return the linking function(s) which it returns
                return RecursionHelper.compile(element);
            }
        };
    });