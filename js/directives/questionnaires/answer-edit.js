angular.module("Questionnaire")
    .directive("answerEdit", function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/pages/questionnaires/answer-edit.html',
            scope: {
                answerTypes: "=",
                question: "=",
                answer: "=",
                editable: "=",
                questionLevel: "="
            },
            controller: 'AnswerEditController',
            controllerAs: 'questionnaireCtrl',
            replace: true,
            link: function(scope, element, args) {
                // quando entro/esco dalle sottorisposte o le sottodomande, valorizzo la property isMouseOver per selezionare il div
                element.on('mouseover', 'div.question', function() {
                    scope.setMouseOver();
                });
                element.on('mouseout', 'div.question', function() {
                    scope.setMouseOver();
                });
                element.on('mouseover', 'div.answer', function() {
                    scope.setMouseOver();
                });
                element.on('mouseout', 'div.answer', function() {
                    scope.setMouseOver();
                });

                scope.setMouseOver = function() {
                    // prendo tutti gli elementi sottostanti che hanno classe "question" e "answer". Se almeno uno di essi ha classe "even-level-selected" o "odd-level-selected" allora metto isMouseOver = false, altrimenti isMouseOver = true
                    var atLeastOneSelectedChild = false;
                    angular.forEach(element.find('div.question.even-level-selected'), function(value, key) {
                        atLeastOneSelectedChild = true;
                    });
                    if (!atLeastOneSelectedChild) {
                        angular.forEach(element.find('div.question.odd-level-selected'), function (value, key) {
                            atLeastOneSelectedChild = true;
                        });
                    }
                    if (!atLeastOneSelectedChild) {
                        angular.forEach(element.find('div.answer.even-level-selected'), function (value, key) {
                            atLeastOneSelectedChild = true;
                        });
                    }
                    if (!atLeastOneSelectedChild) {
                        angular.forEach(element.find('div.answer.odd-level-selected'), function (value, key) {
                            atLeastOneSelectedChild = true;
                        });
                    }
                    scope.$apply(function() {
                        scope.isMouseOver = !atLeastOneSelectedChild;
                    });
                }
            }
        };
    });