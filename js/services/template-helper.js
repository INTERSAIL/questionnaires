angular.module("Questionnaire")
    .factory('TemplateHelper', ['$http', 'configuration', 'FileHelper', 'HttpHelper', function($http, configuration, FileHelper, HttpHelper){
        var buildTemplate = function(name, type, data) {
            return {
                "name": name,
                "content_type": type,
                "data": FileHelper.getData(data)
            };
        };
        return {
            loadTemplate: function(name, type, data, parent, handlers) {
                HttpHelper.http({ method: 'POST', url: configuration.questionnaire_templates_controller_url + 'save', data: buildTemplate(name, type, data) }, {
                    successFunction: function(data) {
                        if (!parent.templates)
                            parent.templates = [];
                        parent.templates.push(data);
                        if (handlers && handlers.hasOwnProperty("successFunction"))
                            handlers.successFunction(data);
                    },
                    errorFunction: function(data) {
                        if (handlers && handlers.hasOwnProperty("errorFunction"))
                            handlers.errorFunction(data);
                    }
                });
            },
            downloadTemplate: function(templateId, handlers) {
                HttpHelper.http({ method: 'GET', url: configuration.questionnaire_templates_controller_url + templateId.toString() }, handlers);
            }
        };
    }]);