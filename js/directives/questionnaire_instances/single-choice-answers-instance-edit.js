angular.module("Questionnaire")
    .directive("singleChoiceAnswersInstanceEdit", function(RecursionHelper) {
        return {
            restrict: 'E',
            templateUrl: 'templates/pages/questionnaire_instances/single-choice-answers-instance-edit.html',
            scope: {
                question: "=",
                editable: "=",
                questionLevel: "=",
                showAnswer: "="
            },
            controller: 'SingleChoiceAnswersInstanceEditController',
            controllerAs: 'questionnaireCtrl',
            replace: true,
            compile: function(element) {
                // Use the compile function from the RecursionHelper,
                // And return the linking function(s) which it returns
                return RecursionHelper.compile(element);
            }
        };
    });