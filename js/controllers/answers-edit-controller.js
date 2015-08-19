angular.module('Questionnaire')
    .controller('AnswersEditController', ['$scope', 'PositionHelper', function($scope, PositionHelper) {

        // aggiunge una nuova risposta ad una domanda
        $scope.addNewAnswer = function() {
            var newAnswer = {
                "id": 0,
                "description": null,
                "questions": new Array()
            };
            $scope.question.answers.push(newAnswer);
            PositionHelper.recalculatePositions($scope.question.answers);
        };

    }]);