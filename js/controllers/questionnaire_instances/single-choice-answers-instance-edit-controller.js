angular.module('Questionnaire')
    .controller('SingleChoiceAnswersInstanceEditController', ['$scope', function($scope){

        // ritorna true se l'answers_layout della domanda è uguale a 1 (cioè verticale; includo anche il caso undefined)
        $scope.isVerticalLayout = function(question_answers_layout) {
            return question_answers_layout === 1 || question_answers_layout === 0;
        };

        // ritorna true se l'answers_layout della domanda è uguale a 2 (cioè orizzontale)
        $scope.isHorizontalLayout = function(question_answers_layout) {
            return question_answers_layout === 2;
        };

    }]);