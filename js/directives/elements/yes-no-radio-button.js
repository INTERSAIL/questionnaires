angular.module("Questionnaire")
    .directive("yesNoRadioButton", function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/elements/yes-no-radio-button.html',
            scope: {
                field: "=",
                editable: "="
            }
        };
    });