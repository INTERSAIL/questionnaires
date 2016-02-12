angular.module('Questionnaire')
    .controller('QuestionsEditController', ['$scope', 'PositionHelper', function($scope, PositionHelper) {

        // aggiunge una nuova domanda
        $scope.addNewQuestion = function() {
            var newQuestion = {
                "id": 0,
                "answer_type": 0,
                "answer_mandatory": false,
                "answers_layout": 1,
                "description": null,
                "image": null,
                "answers": new Array()
            };
            $scope.parent.questions.push(newQuestion);
            PositionHelper.recalculatePositions($scope.parent.questions);
        };
    }]);