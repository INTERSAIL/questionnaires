angular.module("Questionnaire")
    .directive("questionsEdit", function(configuration, RecursionHelper) {
        return {
            restrict: 'E',
            templateUrl: configuration.questionnaire_root + 'templates/pages/questionnaires/questions-edit.html',
            scope: {
                answerTypes: "=",
                answersLayouts: "=",
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