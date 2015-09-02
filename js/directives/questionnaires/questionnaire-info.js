angular.module("Questionnaire")
    .directive("questionnaireInfo", function(configuration) {
        return {
            restrict: 'E',
            templateUrl: configuration.root + '/templates/pages/questionnaires/questionnaire-info.html',
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