angular.module("Questionnaire")
    .constant('configuration', {
        questionnaires_controller_url: 'http://wrkdev-mcrescini:8000/zml_questionnaires/',
        questionnaire_templates_controller_url: 'http://wrkdev-mcrescini:8000/questionnaire_templates/',
        questionnaire_instances_controller_url: 'http://wrkdev-mcrescini:8000/zml_questionnaire_instances/'
    });