angular.module("Questionnaire")
    .factory('YesNoCancelDialog', [function() {

        var showGrayedLayout = function() {
            $("body").append('<div id="operazioneInCorso" style="position:absolute;top:0px;bottom:0px;left:0px;right:0px;background-color:gray;opacity:.7;z-index:99;"></div>');
        };
        var hideGrayedLayout = function() {
            $("body #operazioneInCorso").remove();
        };

        return {
            openDialog: function(message, handlers) {
                showGrayedLayout();
                var dialog = $('<div style="z-index:100;">' + message + '</div>').dialog({
                    dialogClass: 'no-close', // questa classe viene usata nel CSS per nascondere il pulsante di chiusura in alto a destra
                    buttons: {
                        "Si": function() {
                            dialog.dialog('close');
                            hideGrayedLayout();
                            if (handlers && handlers.hasOwnProperty("yesFunction"))
                                handlers.yesFunction();
                        },
                        "No": function() {
                            dialog.dialog('close');
                            hideGrayedLayout();
                            if (handlers && handlers.hasOwnProperty("noFunction"))
                                handlers.noFunction();
                        },
                        "Annulla": function() {
                            dialog.dialog('close');
                            hideGrayedLayout();
                            if (handlers && handlers.hasOwnProperty("cancelFunction"))
                                handlers.cancelFunction();
                        }
                    }
                });
            }
        };
    }]);