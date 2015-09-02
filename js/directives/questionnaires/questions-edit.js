angular.module("Questionnaire")
    .directive("questionsEdit", function(configuration, RecursionHelper) {
        return {
            restrict: 'E',
            templateUrl: configuration.root + '/templates/pages/questionnaires/questions-edit.html',
            scope: {
                answerTypes: "=",
                parent: "=",
                editable: "=",
                questionLevel: "="
            },
            controller: 'QuestionsEditController',
            controllerAs: 'questionnaireCtrl',
            replace: true,
            compile: function(element) {
                // Use the compile function from the RecursionHelper,
                // And return the linking function(s) which it returns
                return RecursionHelper.compile(element);
            }
        };
    });