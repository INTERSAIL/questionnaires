angular.module('Questionnaire')
    .controller('QuestionEditController', ['$http', '$scope', 'PositionHelper', function($http, $scope, PositionHelper) {

        // rimuove una domanda
        $scope.removeQuestion = function() {
            var questionIndex = $scope.parent.questions.indexOf($scope.question);
            if (questionIndex >= 0) {
                $scope.parent.questions.splice(questionIndex, 1);
                PositionHelper.recalculatePositions($scope.parent.questions);
            }
        };

        // sposta una domanda di una posizione prima
        $scope.moveUpQuestion = function() {
            var questionIndex = $scope.parent.questions.indexOf($scope.question);
            if (questionIndex >= 0) {
                var tmp = $scope.parent.questions[questionIndex];
                $scope.parent.questions[questionIndex] = $scope.parent.questions[questionIndex-1];
                $scope.parent.questions[questionIndex-1] = tmp;
                PositionHelper.recalculatePositions($scope.parent.questions);
            }
        };

        // sposta una domanda di una posizione dopo
        $scope.moveDownQuestion = function() {
            var questionIndex = $scope.parent.questions.indexOf($scope.question);
            if (questionIndex >= 0) {
                var tmp = $scope.parent.questions[questionIndex];
                $scope.parent.questions[questionIndex] = $scope.parent.questions[questionIndex+1];
                $scope.parent.questions[questionIndex+1] = tmp;
                PositionHelper.recalculatePositions($scope.parent.questions);
            }
        };

        // rimuove l'immagine di una domanda
        $scope.removeQuestionImage = function() {
            $scope.question.image = null;
        };

        // ritorna true se l'answer_type della domanda è uguale all'answer_type_id
        $scope.isAnswerTypeEqualTo = function(question_answer_type, answer_type_id) {
            return question_answer_type === answer_type_id;
        };

    }]);