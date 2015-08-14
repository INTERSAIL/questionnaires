angular.module("Questionnaire")
    .directive("yesNoRadioButton", function(configuration_root) {
        return {
            restrict: 'E',
            templateUrl: configuration_root + '/templates/elements/yes-no-radio-button.html',
            scope: {
                field: "=",
                editable: "="
            }
        };
    });