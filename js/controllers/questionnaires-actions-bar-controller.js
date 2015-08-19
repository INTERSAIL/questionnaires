angular.module('Questionnaire')
    .controller('QuestionnairesActionsBarController', ['$scope', 'QuestionnaireHelper', function($scope, QuestionnaireHelper) {

        // effettua una chiamata per farsi restituire la lista dei questionari
        $scope.refresh = function() {
            QuestionnaireHelper.list({
                successFunction: function(data) {
                    $scope.questionnaires = data;
                    $scope.errors = null;
                    if ($scope.questionnaire && $scope.questionnaire.id)
                        $scope.selectQuestionnaire($scope.questionnaire.id);
                    else $scope.questionnaire = null;
                },
                errorFunction: function(data) {
                    $scope.questionnaires = null;
                    $scope.questionnaire = null;
                    $scope.errors = data;
                }
            });
        };

        // effettua una chiamata per caricare un questionario specifico dato il suo ID
        $scope.selectQuestionnaire = function(questionnaireId) {
            QuestionnaireHelper.read(questionnaireId, {
                successFunction: function(data) {
                    $scope.questionnaire = data;
                    $scope.errors = null;
                },
                errorFunction: function(data) {
                    $scope.questionnaire = null;
                    $scope.errors = data;
                }
            });
        };

        // crea un nuovo questionario
        $scope.createNewQuestionnaire = function() {
            var newQuestionnaire = {
                "id": 0,
                "title": null,
                "status": 10,
                "revision": 1,
                "questions": new Array()
            };
            $scope.questionnaire = newQuestionnaire;
            $scope.editable = true;
        };

        // permette di modificare un questionario
        $scope.editQuestionnaire = function() {
            $scope.questionnaire.status = 10; // lo rimetto in bozza
            $scope.editable = true;
        };

        // salva un questionario
        $scope.saveQuestionnaire = function() {
            QuestionnaireHelper.save($scope.questionnaire, {
                successFunction: function(data) {
                    $scope.questionnaire = data;
                    $scope.editable = false;
                    $scope.errors = null;
                    $scope.refresh();
                },
                errorFunction: function(data) {
                    $scope.errors = data;
                }
            });
        };

        // annulla le modifiche fatte ad un questionario
        $scope.undoQuestionnaire = function() {
            $scope.editable = false;
            $scope.refresh();
        };

        // elimina un questionario
        $scope.deleteQuestionnaire = function() {
            QuestionnaireHelper.delete($scope.questionnaire, {
                successFunction: function(data) {
                    $scope.questionnaire = null;
                    $scope.errors = null;
                    $scope.refresh();
                },
                errorFunction: function(data) {
                    $scope.errors = data;
                }
            });
        };

        // mette in stato valid un questionario
        $scope.validateQuestionnaire = function() {
            QuestionnaireHelper.validate($scope.questionnaire, {
                successFunction: function(data) {
                    $scope.questionnaire = data;
                    $scope.editable = false;
                    $scope.errors = null;
                    $scope.refresh();
                },
                errorFunction: function(data) {
                    $scope.errors = data;
                }
            });
        };

        // crea una revisione di un questionario
        $scope.revisionQuestionnaire = function() {
            QuestionnaireHelper.revision($scope.questionnaire, {
                successFunction: function(data) {
                    $scope.questionnaire = data;
                    $scope.editable = false;
                    $scope.errors = null;
                    $scope.refresh();
                },
                errorFunction: function(data) {
                    $scope.errors = data;
                }
            });
        };

    }]);