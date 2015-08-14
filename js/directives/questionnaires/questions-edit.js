angular.module("Questionnaire")
    .directive("questionsEdit", function(configuration_root, RecursionHelper) {
        return {
            restrict: 'E',
            templateUrl: configuration_root + '/templates/pages/questionnaires/questions-edit.html',
            scope: {
                answerTypes: "=",
                parent: "=",
                editable: "="
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