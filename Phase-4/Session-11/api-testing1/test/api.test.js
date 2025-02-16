import request from 'supertest';
import { expect } from 'chai';

const baseUrl = 'https://jsonplaceholder.typicode.com';  

describe('API Testing with Mocha (ES Modules)', function () {
    it('should return a list of users', async function () {
        const res = await request(baseUrl).get('/users');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
    });

    it('should create a new post',async function(){
        const res= await request(baseUrl)
        .post('/users')
        .send({'id': 20,'name': 'Nikunj Soni','username': 'nik_unj','email': 'nikunj@testmail.com'})
        .set('Content-Type','application/json')

        expect(res.status).to.equal(201);
        expect(res.body).to.include({'name': 'Nikunj Soni','username': 'nik_unj','email': 'nikunj@testmail.com'})
    })

    
    //install dev dependecies like
    //npm install --save-dev mocha chai supertest
    //run: npm test
});
