angular.module("Questionnaire")
    .factory('QuestionnaireInstanceHelper', ['$http', 'configuration', function($http, configuration){
        return {
            read: function(questionnaireInstanceId, handlers) {
                $http({ method: 'GET', url: configuration.questionnaire_instances_controller_url + questionnaireInstanceId.toString() })
                    .success(function(data, status, headers, config) {
                        if (handlers && handlers.hasOwnProperty('successFunction'))
                            handlers.successFunction(data);
                    })
                    .error(function(data, status, headers, config) {
                        if (handlers && handlers.hasOwnProperty('errorFunction'))
                            handlers.errorFunction(data);
                    });
            },
            save: function(questionnaireInstance, handlers) {
                if (questionnaireInstance.id <= 0) {
                    // questionario nuovo: chiamo tramite POST
                    $http({ method: 'POST', url: configuration.questionnaire_instances_controller_url, headers: { 'Content-Type' : 'application/json; charset=UTF-8' }, data: questionnaireInstance })
                        .success(function(data, status, headers, config) {
                            if (handlers && handlers.hasOwnProperty('successFunction'))
                                handlers.successFunction(data);
                        })
                        .error(function(data, status, headers, config) {
                            if (handlers && handlers.hasOwnProperty('errorFunction'))
                                handlers.errorFunction(data);
                        });
                }
                else {
                    // questionario già esistente: chiamo tramite PUT
                    $http({ method: 'PUT', url: configuration.questionnaire_instances_controller_url + questionnaireInstance.id.toString(), headers: { 'Content-Type' : 'application/json; charset=UTF-8' }, data: questionnaireInstance })
                        .success(function(data, status, headers, config) {
                            if (handlers && handlers.hasOwnProperty('successFunction'))
                                handlers.successFunction(data);
                        })
                        .error(function(data, status, headers, config) {
                            if (handlers && handlers.hasOwnProperty('errorFunction'))
                                handlers.errorFunction(data);
                        });
                }
            },
            cancel: function(questionnaireInstanceId, handlers) {
                $http({ method: 'POST', url: configuration.questionnaire_instances_controller_url + questionnaireInstanceId.toString() + '/cancel' })
                    .success(function(data, status, headers, config) {
                        if (handlers && handlers.hasOwnProperty('successFunction'))
                            handlers.successFunction(data);
                    })
                    .error(function(data, status, headers, config) {
                        if (handlers && handlers.hasOwnProperty('errorFunction'))
                            handlers.errorFunction(data);
                    });
            }
        };
    }]);