angular.module('Questionnaire')
    .controller('QuestionnaireRevisionInfoController', ['$scope', function($scope) {

        $scope.getStatusIcon = function() {
            switch ($scope.questionnaireRevision.status)
            {
                case 10:
                    return 'draft-icon';
                    break;
                case 20:
                    return 'valid-icon';
                    break;
                case 30:
                    return 'revision-icon';
                    break;
                default:
                    return 'generic-document-icon';
            }
        };

    }]);