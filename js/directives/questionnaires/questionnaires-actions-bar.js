angular.module("Questionnaire")
    .directive("questionnairesActionsBar", function(configuration_root, YesNoCancelDialog) {
        return {
            restrict: 'E',
            templateUrl: configuration_root+ '/templates/pages/questionnaires/questionnaires-actions-bar.html',
            scope: {
                questionnaires: "=",
                questionnaire: "=",
                editable: "=",
                errors: "="
            },
            controller: 'QuestionnairesActionsBarController',
            controllerAs: 'questionnairesCtrl',
            link: function(scope, element, attrs) {
                scope.refresh();

                element.on('click', 'button.action-bar-button', function() {
                    var button = this;

                    var message = "";
                    var requiresUserChoice = false;
                    var functionToExecute = null;

                    // in base all'azione, valorizzo alcuni parametri
                    if (button.classList.contains('refresh-button'))
                        functionToExecute = function() { scope.refresh(); };
                    else if (button.classList.contains('add-button'))
                        functionToExecute = function() { scope.createNewQuestionnaire(); };
                    else if (button.classList.contains('edit-button'))
                        functionToExecute = function() { scope.editQuestionnaire(); };
                    else if (button.classList.contains('cancel-button')) {
                        message = "Sei sicuro di voler annullare le modifiche?";
                        requiresUserChoice = true;
                        functionToExecute = function () { scope.undoQuestionnaire(); };
                    }
                    else if (button.classList.contains('save-button'))
                        functionToExecute = function() { scope.saveQuestionnaire(); };
                    else if (button.classList.contains('delete-button')) {
                        message = "Sei sicuro di voler eliminare il questionario \"" + scope.questionnaire.title + "\"?";
                        requiresUserChoice = true;
                        functionToExecute = function () { scope.deleteQuestionnaire(); };
                    }

                    // creo l'oggetto necessario al YesNoCancelDialog
                    var yncHandlers = {
                        // la yesFunction esegue l'azione relativa al pulsante premuto
                        "yesFunction" : function() {
                            scope.$apply(function() { // per aggiornare l'interfaccia è necessario chiamare il $apply
                                functionToExecute();
                            });
                        },
                        "noFunction": function() {},
                        "cancelFunction": function() {}
                    };
                    // se richiede una decisione dell'utente, mostro il dialog, altrimenti chiamo subito la yesFunction
                    if (requiresUserChoice)
                        YesNoCancelDialog.openDialog(message, yncHandlers);
                    else yncHandlers.yesFunction();
                });
            }
        };
    });