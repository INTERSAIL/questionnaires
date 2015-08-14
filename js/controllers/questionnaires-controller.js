angular.module('Questionnaire')
    .controller('QuestionnairesController', ['$http', '$scope', function($http, $scope) {

        $scope.questionnaires = null;
        $scope.selectedQuestionnaire = null;
        $scope.isEdit = false;
        $scope.errors = null;
    }]);