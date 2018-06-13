var app = require('./app');
var request = require('supertest');
var chai = require('chai').expect;

describe('contracts', function () {

    it('should get all contracts, Rodney', function (done) {
        request(app)
            .get('/contracts')
            .set('Accept', 'application/json')
            .end(function (err, res) {
                console.log((res.body)[0].FirstName);
                chai(res.body).to.be.an('array');
                chai(res.status).equals(200);
                done();
            });
    });

});