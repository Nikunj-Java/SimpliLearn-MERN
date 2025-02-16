import request from 'supertest';
import { expect } from 'chai';
import dotenv from 'dotenv';
dotenv.config();



const baseUrl = process.env.API_BASE_URL;

describe('API Testing with Mocha (ES Modules)', function () {
     

    it('should create a new post',async function(){
        const res= await request(baseUrl)
        .post('/api/items')
        .send({'name':'Chemistry Books','Price':2050})
        .set('Content-Type','application/json')

        expect(res.status).to.equal(201);
         
    })

    
    //install dev dependecies like
    //npm install --save-dev mocha chai supertest
    //run: npm test
});
