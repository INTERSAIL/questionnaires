angular.module("Questionnaire")
    .directive("multipleChoiceAnswersInstanceEdit", function(RecursionHelper) {
        return {
            restrict: 'E',
            templateUrl: 'templates/pages/questionnaire_instances/multiple-choice-answers-instance-edit.html',
            scope: {
                question: "=",
                editable: "=",
                questionLevel: "="
            },
            controller: 'MultipleChoiceAnswersInstanceEditController',
            controllerAs: 'questionnaireCtrl',
            replace: true,
            compile: function(element) {
                // Use the compile function from the RecursionHelper,
                // And return the linking function(s) which it returns
                return RecursionHelper.compile(element);
            }
        };
    });