angular.module('Questionnaire')
    .controller('TemplateEditController', ['$scope', 'TemplateHelper', 'FileHelper', function($scope, TemplateHelper, FileHelper) {

        $scope.removeTemplate = function() {
            var templateIndex = $scope.parent.templates.indexOf($scope.template);
            if (templateIndex >= 0) {
                $scope.parent.templates.splice(templateIndex, 1);
            }
        };

        $scope.getTemplateIcon = function() {
            switch ($scope.template.content_type)
            {
                case 'application/msword':
                    return 'doc-icon';
                    break;
                case 'application/vnd.oasis.opendocument.text':
                    return 'odt-icon';
                    break;
                case 'application/pdf':
                    return 'pdf-icon';
                    break;
                default:
                    return 'generic-document-icon';
            }
        };

    }]);