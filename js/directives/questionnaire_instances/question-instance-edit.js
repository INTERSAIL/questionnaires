angular.module("Questionnaire")
    .directive("questionInstanceEdit", function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/pages/questionnaire_instances/question-instance-edit.html',
            scope: {
                parent: "=",
                question: "=",
                editable: "=",
                questionLevel: "=",
                parentSelected: "="
            },
            controller: 'QuestionInstanceEditController',
            controllerAs: 'questionnaireCtrl',
            replace: true,
            link: function(scope, element, args) {
                // quando entro/esco dalle sottodomande, valorizzo la property isMouseOver per selezionare il div
                element.on('mouseover', 'div.question-instance', function() {
                    scope.setMouseOver();
                });
                element.on('mouseout', 'div.question-instance', function() {
                    scope.setMouseOver();
                });

                scope.setMouseOver = function() {
                    // prendo tutti gli elementi sottostanti che hanno classe "question-instance". Se almeno uno di essi ha classe "even-level-selected" o "odd-level-selected" allora metto isMouseOver = false, altrimenti isMouseOver = true
                    var atLeastOneSelectedChild = false;
                    angular.forEach(element.find('div.question-instance.even-level-selected'), function(value, key) {
                        atLeastOneSelectedChild = true;
                    });
                    if (!atLeastOneSelectedChild) {
                        angular.forEach(element.find('div.question-instance.odd-level-selected'), function (value, key) {
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