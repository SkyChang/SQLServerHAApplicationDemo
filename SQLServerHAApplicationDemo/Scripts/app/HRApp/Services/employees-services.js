﻿angular.module('hrapp.services.employeeServices', [
    'ngResource'
]).factory('employeeServices', function ($resource) {
    return $resource('/api/employees/:employeeId', { employeeId: '@id' }, {
        query: { method: 'GET', isArray: true },
        queryByID: { method: 'GET' },
        create: { method: 'POST' },
        update: { method: 'PUT' },
        del: { method: 'DELETE' }
    });
});
//# sourceMappingURL=employees-services.js.map
