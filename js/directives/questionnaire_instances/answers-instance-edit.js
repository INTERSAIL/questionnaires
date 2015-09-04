angular.module("Questionnaire")
    .directive("answersInstanceEdit", function(RecursionHelper) {
        return {
            restrict: 'E',
            templateUrl: 'templates/pages/questionnaire_instances/answers-instance-edit.html',
            scope: {
                question: "=",
                editable: "=",
                questionLevel: "=",
                parentSelected: "="
            },
            controller: 'AnswersInstanceEditController',
            controllerAs: 'questionnaireCtrl',
            replace: true,
            compile: function(element) {
                // Use the compile function from the RecursionHelper,
                // And return the linking function(s) which it returns
                return RecursionHelper.compile(element);
            }
        };
    });