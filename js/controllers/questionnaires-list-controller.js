angular.module('Questionnaire')
    .controller('QuestionnairesListController', ['$http', '$scope', 'QuestionnaireHelper', function($http, $scope, QuestionnaireHelper) {

        // effettua una chiamata per caricare un questionario specifico dato il suo ID
        $scope.selectQuestionnaire = function(questionnaireId) {
            QuestionnaireHelper.read(questionnaireId, {
                successFunction: function(data) {
                    $scope.selectedQuestionnaire = data;
                    $scope.errors = null;
                },
                errorFunction: function(data) {
                    $scope.selectedQuestionnaire = null;
                    $scope.errors = data;
                }
            });
        };

        // ritorna true se il questionario passato è quello selezionato
        $scope.isSelectedQuestionnaire = function(questionnaire) {
            return $scope.selectedQuestionnaire && questionnaire.id === $scope.selectedQuestionnaire.id;
        };

    }]);