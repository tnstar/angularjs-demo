'use strict';

angular.
    module('jobTypes').
    component('jobTypes', {
        templateUrl: 'components/job-types/job-types.template.html',
        controller: function JobController() {
            this.jobs=['a','b'];
        }
    });