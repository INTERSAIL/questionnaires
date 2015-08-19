angular.module('Questionnaire')
    .controller('QuestionnairesController', ['$scope', function($scope) {

        $scope.questionnaires = null;
        $scope.selectedQuestionnaire = null;
        $scope.selectedQuestionnaireValid = false;
        $scope.isEdit = false;
        $scope.errors = null;

    }]);