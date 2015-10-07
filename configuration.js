angular.module("Questionnaire")
    .constant('configuration', {
        //root: '/questionnaires',
        //root: 'file:///Users/mcrescini/Progetti/AngularJS/questionnaires',
        questionnaires_controller_url: 'http://ced-sisi:8080/questionnaires/',
        questionnaire_templates_controller_url: 'http://ced-sisi:8080/questionnaire_templates/',
        questionnaire_instances_controller_url: 'http://ced-sisi:8080/questionnaire_instances/'
    });