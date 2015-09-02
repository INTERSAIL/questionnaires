angular.module('Questionnaire')
    .controller('QuestionnaireEditController', ['$http', '$scope', function($http, $scope) {

        $scope.answerTypes = null;

        // effettua una chiamata per farsi restituire la lista dei valori del campo "answerType" delle domande
        $http({ method: 'GET', url: 'data/answer_types.json' })
            .success(function(data, status, headers, config) {
                $scope.answerTypes = data;
                $scope.errors = null;
            })
            .error(function(data, status, headers, config) {
                $scope.errors = data;
            });

        $scope.setValidity = function(value) {
            $scope.questionnaireValid = value;
        };

    }]);