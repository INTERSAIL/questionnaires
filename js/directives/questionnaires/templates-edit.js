angular.module("Questionnaire")
    .directive("templatesEdit", function(configuration_root, TemplateHelper) {
        return {
            restrict: 'E',
            templateUrl: configuration_root + '/templates/pages/questionnaires/templates-edit.html',
            scope: {
                parent: "=",
                editable: "=",
                errors: "="
            },
            controller: 'TemplatesEditController',
            controllerAs: 'questionnairesCtrl',
            link: function(scope, element, attrs) {
                element.find("button.add-button").on('click', function() {
                    element.find("#inpTemplate").first().trigger('click');
                });

                element.find("#inpTemplate").first().on('change', function() {
                    if (this.files.length > 0) {
                        var inputFileElement = this;
                        angular.forEach(inputFileElement.files, function(value, key) {
                            var fr = new FileReader();
                            fr.onload = (function(file) {
                                return function(e) {
                                    TemplateHelper.loadTemplate(value.name, value.type, e.target.result, scope.parent, {
                                        successFunction: function(data) {
                                            inputFileElement.value = ''; // devo resettare il valore altrimenti non scatena più il change nel caso di riselezione dello stesso file
                                        },
                                        errorFunction: function(data) {
                                            inputFileElement.value = ''; // devo resettare il valore altrimenti non scatena più il change nel caso di riselezione dello stesso file
                                            scope.errors = data;
                                        }
                                    });
                                };
                            })(value);
                            fr.readAsDataURL(value);
                        });
                    }
                });
            }
        };
    });