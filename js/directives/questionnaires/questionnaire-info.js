angular.module("Questionnaire")
    .directive("questionnaireInfo", function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/pages/questionnaires/questionnaire-info.html',
            scope: {
                questionnaire: "=",
                editable: "="
            },
            controller: 'QuestionnaireInfoController',
            controllerAs: 'questionnaireCtrl',
            require: "^questionnairesInfo",
            link: function(scope, element, attrs, parentController) {

            }
        };
    });