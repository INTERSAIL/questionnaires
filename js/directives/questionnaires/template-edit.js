angular.module("Questionnaire")
    .directive("templateEdit", function(configuration, TemplateHelper) {
        return {
            restrict: 'E',
            templateUrl: configuration.root + '/templates/pages/questionnaires/template-edit.html',
            scope: {
                template: "=",
                parent: "=",
                editable: "=",
                errors: "="
            },
            controller: 'TemplateEditController',
            controllerAs: 'questionnairesCtrl',
            link: function(scope, element, attrs) {
                element.find("a.template-download").on('click', function () {
                    TemplateHelper.downloadTemplate(scope.template.id, {
                        successFunction: function(data) {
                            // creo un elemento <a> di cui simulo il click e il cui href è il contenuto del documento da scaricare
                            var linkForDownload = document.createElement('a');
                            linkForDownload.href = 'data:' + data.content_type + ';base64,' + data.data;
                            linkForDownload.download = data.name;
                            linkForDownload.style.display = 'none';
                            element.append(linkForDownload);
                            linkForDownload.click();
                            linkForDownload.remove();
                        },
                        errorFunction: function(data) {
                            scope.errors = data;
                        }
                    });
                });
            }
        };
    });