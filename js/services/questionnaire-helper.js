angular.module("Questionnaire")
    .factory('QuestionnaireHelper', ['$http', 'configuration', 'HttpHelper', function($http, configuration, HttpHelper){
        return {
            list: function(handlers) {
                HttpHelper.http({ method: 'GET', url: configuration.questionnaires_controller_url }, handlers);
            },
            read: function(questionnaireId, handlers) {
                HttpHelper.http({ method: 'GET', url: configuration.questionnaires_controller_url + questionnaireId.toString() }, handlers);
            },
            save: function(questionnaire, handlers) {
                if (questionnaire.id <= 0) {
                    // questionario nuovo: chiamo tramite POST
                    HttpHelper.http({ method: 'POST', url: configuration.questionnaires_controller_url, headers: { 'Content-Type' : 'application/json; charset=UTF-8' }, data: questionnaire }, handlers);
                }
                else {
                    // questionario già esistente: chiamo tramite PUT
                    HttpHelper.http({ method: 'PUT', url: configuration.questionnaires_controller_url + questionnaire.id.toString(), headers: { 'Content-Type' : 'application/json; charset=UTF-8' }, data: questionnaire }, handlers);
                }
            },
            delete: function(questionnaire, handlers) {
                HttpHelper.http({ method: 'DELETE', url: configuration.questionnaires_controller_url + questionnaire.id.toString() }, handlers);
            },
            cancel: function(questionnaireId, handlers) {
                HttpHelper.http({ method: 'POST', url: configuration.questionnaires_controller_url + questionnaireId.toString() + '/cancel' }, handlers);
            },
            validate: function(questionnaire, handlers) {
                HttpHelper.http({ method: 'PUT', url: configuration.questionnaires_controller_url + questionnaire.id.toString() + '/validate', headers: { 'Content-Type' : 'application/json; charset=UTF-8' }, data: questionnaire }, handlers);
            },
            revision: function(questionnaire, handlers) {
                HttpHelper.http({ method: 'PUT', url: configuration.questionnaires_controller_url + questionnaire.id.toString() + '/revision', headers: { 'Content-Type' : 'application/json; charset=UTF-8' }, data: questionnaire }, handlers);
            }
        };
    }]);