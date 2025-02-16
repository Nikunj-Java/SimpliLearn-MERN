import request from 'supertest';
import {expect} from 'chai';
import dotenv from 'dotenv';

dotenv.config();

const baseUrl = process.env.API_BASE_URL;
let createdItemId;

describe('CRUD API Testing with Mocha & MongoDB', function () {
    
    // Create a new item
    it('should create a new item', async function () {
        const res = await request(baseUrl)
            .post('/items')
            .send({ name: 'Test Item', price: 100 })
            .set('Content-Type', 'application/json');

        expect(res.status).to.equal(201);
        expect(res.body).to.have.property('_id');
        expect(res.body).to.include({ name: 'Test Item', price: 100 });

        createdItemId = res.body._id; // Store ID for later tests
    });

    // Get all items
    it('should retrieve all items', async function () {
        const res = await request(baseUrl).get('/items');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
    });

    // Get a single item by ID
    it('should retrieve a single item', async function () {
        const res = await request(baseUrl).get(`/items/${createdItemId}`);
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('_id', createdItemId);
    });

    // Update an item
    it('should update an item', async function () {
        const res = await request(baseUrl)
            .put(`/items/${createdItemId}`)
            .send({ name: 'Updated Item', price: 150 })
            .set('Content-Type', 'application/json');

        expect(res.status).to.equal(200);
        expect(res.body).to.include({ name: 'Updated Item', price: 150 });
    });

    // Delete an item
    it('should delete an item', async function () {
        const res = await request(baseUrl).delete(`/items/${createdItemId}`);
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Item deleted successfully');
    });
});
