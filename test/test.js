var srequest = require('supertest');
var should = require('should');
var http = require('http');
var expect = require('chai').expect;

describe ("When User sees website", function () {

	var neaprequest = srequest('http://neapolitan-a-la-code.github.io/cocaineforeveryone/'); 

		it("website should be return 200 ok", function (done) {
			neaprequest.get('/')
			.expect(200, done);
		});
		it("title should be NeapMap", function (done) {
			neaprequest.get('/')
			.expect(/<title>NeapMap<\/title>/, done);
		});
		it("Retail button has right text", function (done) {
		neaprequest.get('/')
			.expect(retailButton.innerHTML).to.equal("Retail");
		});
		it("Wholesale button has right text", function (done) {
		neaprequest.get('/')
			.expect(wholesaleButton.innerHTML).to.equal("Wholesale");
		});
});