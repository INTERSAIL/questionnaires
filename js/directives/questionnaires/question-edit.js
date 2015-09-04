angular.module("Questionnaire")
    .directive("questionEdit", function(FileHelper) {
        return {
            restrict: 'E',
            templateUrl: 'templates/pages/questionnaires/question-edit.html',
            scope: {
                answerTypes: "=",
                parent: "=",
                question: "=",
                editable: "=",
                questionLevel: "="
            },
            controller: 'QuestionEditController',
            controllerAs: 'questionnaireCtrl',
            replace: true,
            link: function(scope, element, args) {
                element.find("button.no-question-image-button").on('click', function() {
                    element.find("#inpImage").first().trigger('click');
                });
                element.find("button.question-image-button").on('click', function() {
                    element.find("#inpImage").first().trigger('click');
                });
                element.find("#inpImage").first().on('change', function() {
                    if (this.files.length == 0)
                        scope.question.image = null;
                    else {
                        var fr = new FileReader();
                        fr.onload = (function(file) {
                            return function(e) {
                                scope.$apply(function(){ // per aggiornare l'interfaccia è necessario chiamare il $apply
                                    scope.question.image = FileHelper.getData(e.target.result);
                                });
                            };
                        })(this.files[0]);
                        fr.readAsDataURL(this.files[0]);
                    }
                });

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