angular.module("Questionnaire")
    .directive("questionsInstanceEdit", function(RecursionHelper) {
        return {
            restrict: 'E',
            templateUrl: 'templates/pages/questionnaire_instances/questions-instance-edit.html',
            scope: {
                parent: "=",
                editable: "=",
                questionLevel: "=",
                parentSelected: "="
            },
            controller: 'QuestionsInstanceEditController',
            controllerAs: 'questionnaireCtrl',
            //replace: true,
            compile: function(element) {
                // Use the compile function from the RecursionHelper,
                // And return the linking function(s) which it returns
                return RecursionHelper.compile(element);
            }
        };
    });