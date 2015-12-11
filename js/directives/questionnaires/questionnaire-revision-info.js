angular.module("Questionnaire")
    .directive("questionnaireRevisionInfo", function(configuration) {
        return {
            restrict: 'E',
            templateUrl: configuration.questionnaire_root + 'templates/pages/questionnaires/questionnaire-revision-info.html',
            scope: {
                questionnaireRevision: "=",
                editable: "="
            },
            controller: 'QuestionnaireRevisionInfoController',
            controllerAs: 'questionnaireCtrl',
            require: "^questionnairesInfo",
            link: function(scope, element, attrs, parentController) {
                scope.selectQuestionnaire = function(questionnaireId) {
                    parentController.selectQuestionnaire(questionnaireId);
                };
                scope.isSelectedQuestionnaire = function(questionnaire) {
                    var selQuestionnaire = parentController.getSelectedQuestionnaire();
                    return selQuestionnaire && selQuestionnaire.id === questionnaire.id;
                }
            }
        };
    });