angular.module("Questionnaire")
    .directive("questionEdit", function(configuration_root, FileHelper) {
        return {
            restrict: 'E',
            templateUrl: configuration_root + '/templates/pages/questionnaires/question-edit.html',
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
            }
        };
    });