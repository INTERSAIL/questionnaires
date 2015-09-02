angular.module("Questionnaire")
    .factory('QuestionnaireHelper', ['$http', 'configuration', function($http, configuration){
        return {
            list: function(handlers) {
                $http({ method: 'GET', url: configuration.questionnaires_controller_url })
                    .success(function(data, status, headers, config) {
                        if (handlers && handlers.hasOwnProperty('successFunction'))
                            handlers.successFunction(data);
                    })
                    .error(function(data, status, headers, config) {
                        if (handlers && handlers.hasOwnProperty('errorFunction'))
                            handlers.errorFunction(data);
                    });
            },
            read: function(questionnaireId, handlers) {
                $http({ method: 'GET', url: configuration.questionnaires_controller_url + questionnaireId.toString() })
                    .success(function(data, status, headers, config) {
                        if (handlers && handlers.hasOwnProperty('successFunction'))
                            handlers.successFunction(data);
                    })
                    .error(function(data, status, headers, config) {
                        if (handlers && handlers.hasOwnProperty('errorFunction'))
                            handlers.errorFunction(data);
                    });
            },
            save: function(questionnaire, handlers) {
                if (questionnaire.id <= 0) {
                    // questionario nuovo: chiamo tramite POST
                    $http({ method: 'POST', url: configuration.questionnaires_controller_url, headers: { 'Content-Type' : 'application/json; charset=UTF-8' }, data: questionnaire })
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
                    $http({ method: 'PUT', url: configuration.questionnaires_controller_url + questionnaire.id.toString(), headers: { 'Content-Type' : 'application/json; charset=UTF-8' }, data: questionnaire })
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
            delete: function(questionnaire, handlers) {
                $http({ method: 'DELETE', url: configuration.questionnaires_controller_url + questionnaire.id.toString() })
                    .success(function(data, status, headers, config) {
                        if (handlers && handlers.hasOwnProperty('successFunction'))
                            handlers.successFunction(data);
                    })
                    .error(function(data, status, headers, config) {
                        if (handlers && handlers.hasOwnProperty('errorFunction'))
                            handlers.errorFunction(data);
                    });
            },
            cancel: function(questionnaireId, handlers) {
                $http({ method: 'POST', url: configuration.questionnaires_controller_url + questionnaireId.toString() + '/cancel' })
                    .success(function(data, status, headers, config) {
                        if (handlers && handlers.hasOwnProperty('successFunction'))
                            handlers.successFunction(data);
                    })
                    .error(function(data, status, headers, config) {
                        if (handlers && handlers.hasOwnProperty('errorFunction'))
                            handlers.errorFunction(data);
                    });
            },
            validate: function(questionnaire, handlers) {
                $http({ method: 'PUT', url: configuration.questionnaires_controller_url + questionnaire.id.toString() + '/validate', headers: { 'Content-Type' : 'application/json; charset=UTF-8' }, data: questionnaire })
                    .success(function(data, status, headers, config) {
                        if (handlers && handlers.hasOwnProperty('successFunction'))
                            handlers.successFunction(data);
                    })
                    .error(function(data, status, headers, config) {
                        if (handlers && handlers.hasOwnProperty('errorFunction'))
                            handlers.errorFunction(data);
                    });
            },
            revision: function(questionnaire, handlers) {
                $http({ method: 'PUT', url: configuration.questionnaires_controller_url + questionnaire.id.toString() + '/revision', headers: { 'Content-Type' : 'application/json; charset=UTF-8' }, data: questionnaire })
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