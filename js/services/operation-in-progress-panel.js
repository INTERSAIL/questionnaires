angular.module("Questionnaire")
    .factory('OperationInProgressPanel', [function() {

        return {
            showGrayedLayout: function () {
                $("body").append('<div id="operazioneInCorso" style="position:absolute;height:100%;width:100%;background-color:gray;opacity:.7;z-index:99;color:#4305fa;font-size:50px;text-align:center;vertical-align:middle;"><div style="height:40%;"></div><div>OPERAZIONE IN CORSO....<br>ATTENDERE</div></div>');
            },
            hideGrayedLayout: function () {
                $("body #operazioneInCorso").remove();
            }
        };
    }]);