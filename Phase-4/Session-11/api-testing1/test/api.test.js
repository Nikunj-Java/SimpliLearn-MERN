import request from 'supertest';
import { expect } from 'chai';

const baseUrl = 'https://jsonplaceholder.typicode.com'; // Sample API

describe('API Testing with Mocha (ES Modules)', function () {
    it('should return a list of users', async function () {
        const res = await request(baseUrl).get('/users');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
    });

    
    //install dev dependecies like
    //npm install --save-dev mocha chai supertest
    //run: npm test
});
