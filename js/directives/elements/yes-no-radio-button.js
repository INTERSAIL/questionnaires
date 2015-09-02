angular.module("Questionnaire")
    .directive("yesNoRadioButton", function(configuration) {
        return {
            restrict: 'E',
            templateUrl: configuration.root + '/templates/elements/yes-no-radio-button.html',
            scope: {
                field: "=",
                editable: "="
            }
        };
    });