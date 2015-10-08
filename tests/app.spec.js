/**
 * Created by deepaksisodiya on 08/10/15.
 */


describe('Unit Test : myController', function() {

    beforeEach(module('myApp'));

    var ctrl, scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('myController', {
            $scope : scope
        });
    }));

    it('name should equal to Deepak Sisodiya', function() {
        scope.name.should.be.equal('Deepak Sisodiya');
    });

});