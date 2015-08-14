angular.module("Questionnaire")
    .factory('QuestionnaireHelper', ['$http', function($http){
        return {
            list: function(handlers) {
                $http({ method: 'GET', url: 'http://wrkdev-mcrescini:8000/questionnaires/' })
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
                $http({ method: 'GET', url: 'http://wrkdev-mcrescini:8000/questionnaires/' + questionnaireId.toString() })
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
                    $http({ method: 'POST', url: 'http://wrkdev-mcrescini:8000/questionnaires/', headers: { 'Content-Type' : 'application/json; charset=UTF-8' }, data: questionnaire })
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
                    $http({ method: 'PUT', url: 'http://wrkdev-mcrescini:8000/questionnaires/' + questionnaire.id.toString(), headers: { 'Content-Type' : 'application/json; charset=UTF-8' }, data: questionnaire })
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
                $http({ method: 'DELETE', url: 'http://wrkdev-mcrescini:8000/questionnaires/' + questionnaire.id.toString() })
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