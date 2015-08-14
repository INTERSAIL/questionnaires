angular.module('Questionnaire')
    .controller('AnswerEditController', ['$http', '$scope', 'PositionHelper', function($http, $scope, PositionHelper) {

        // rimuove una risposta da una domanda
        $scope.removeAnswer = function() {
            var answerIndex = $scope.question.answers.indexOf($scope.answer);
            if (answerIndex >= 0) {
                $scope.question.answers.splice(answerIndex, 1);
                PositionHelper.recalculatePositions($scope.question.answers);
            }
        };

        // sposta una risposta di una posizione prima
        $scope.moveUpAnswer = function() {
            var answerIndex = $scope.question.answers.indexOf($scope.answer);
            if (answerIndex >= 0) {
                var tmp = $scope.question.answers[answerIndex];
                $scope.question.answers[answerIndex] = $scope.question.answers[answerIndex-1];
                $scope.question.answers[answerIndex-1] = tmp;
                PositionHelper.recalculatePositions($scope.question.answers);
            }
        };

        // sposta una risposta di una posizione dopo
        $scope.moveDownAnswer = function() {
            var answerIndex = $scope.question.answers.indexOf($scope.answer);
            if (answerIndex >= 0) {
                var tmp = $scope.question.answers[answerIndex];
                $scope.question.answers[answerIndex] = $scope.question.answers[answerIndex+1];
                $scope.question.answers[answerIndex+1] = tmp;
                PositionHelper.recalculatePositions($scope.question.answers);
            }
        };

    }]);