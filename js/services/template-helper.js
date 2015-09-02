angular.module("Questionnaire")
    .factory('TemplateHelper', ['$http', 'configuration', 'FileHelper', function($http, configuration, FileHelper){
        var buildTemplate = function(name, type, data) {
            return {
                "name": name,
                "content_type": type,
                "data": FileHelper.getData(data)
            };
        };
        return {
            loadTemplate: function(name, type, data, parent, handlers) {
                $http({ method: 'POST', url: configuration.questionnaire_templates_controller_url + 'save', data: buildTemplate(name, type, data) })
                    .success(function(data, status, headers, config) {
                        if (!parent.templates)
                            parent.templates = [];
                        parent.templates.push(data);
                        if (handlers && handlers.hasOwnProperty("successFunction"))
                            handlers.successFunction(data);
                    })
                    .error(function(data, status, headers, config) {
                        if (handlers && handlers.hasOwnProperty("errorFunction"))
                            handlers.errorFunction(data);
                    });
            },
            downloadTemplate: function(templateId, handlers) {
                $http({ method: 'GET', url: configuration.questionnaire_templates_controller_url + templateId.toString() })
                    .success(function(data, status, headers, config) {
                        if (handlers && handlers.hasOwnProperty("successFunction"))
                            handlers.successFunction(data);
                    })
                    .error(function(data, status, headers, config) {
                        if (handlers && handlers.hasOwnProperty("errorFunction"))
                            handlers.errorFunction(data);
                    });
            }
        };
    }]);