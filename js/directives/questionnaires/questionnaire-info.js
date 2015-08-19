angular.module("Questionnaire")
    .directive("questionnaireInfo", function(configuration_root) {
        return {
            restrict: 'E',
            templateUrl: configuration_root + '/templates/pages/questionnaires/questionnaire-info.html',
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