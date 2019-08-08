app.service('brandService', function ($http) {
    this.findAll = function () {
        return $http.get('../brand/findAll');
    }
    this.save = function (entity) {
        return $http.post('../brand/save', entity);
    }
    this.findPage = function (page, size) {
        return $http.get('../brand/findPage/'+page+"/"+size);
    }
    this.findOne = function (id) {
        return $http.get('../brand/findOne/'+id);
    }
    this.delete = function (selectIds) {
        return $http.get('../brand/delete/'+selectIds);
    }
})