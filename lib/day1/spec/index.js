const mocha = require('mocha')
const chai = require('chai')
const code = require('../code/index.js')
const assert = chai.assert
const testCase1 = require('./test1.json')

describe('Sequences of repeating numbers', function() {

    it('Should return 3', function(done) {
        const result = code.run(1122)
        assert(result === 3, 'Single sequence of repeating, result: ' + result)
        done();
    })

    it('Should return 4', function(done) {
        const result = code.run(1111)
        assert(result === 4, 'Single sequence of repeating, result: ' + result)
        done();
    })

    it('Should return 0', function(done) {
        const result = code.run(1234)
        assert(result === 0, 'Single sequence of repeating, result: ' + result)
        done();
    })

    it('Should return 9', function(done) {
        const result = code.run(91212129)
        assert(result === 9, 'Single sequence of repeating, result: ' + result)
        done();
    })

    it('Should return 1228', function(done) {
        const result = code.run(testCase1.val)
        assert(result === 1228, 'Single sequence of repeating, result: ' + result)
        done();
    })

})

