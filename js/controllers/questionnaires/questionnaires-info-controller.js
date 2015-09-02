angular.module('Questionnaire')
    .controller('QuestionnairesInfoController', ['$scope', 'QuestionnaireHelper', function($scope, QuestionnaireHelper) {

        // effettua una chiamata per caricare un questionario specifico dato il suo ID
        this.selectQuestionnaire = function(questionnaireId) {
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
        this.getSelectedQuestionnaire = function() {
            return $scope.selectedQuestionnaire;
        };

    }]);