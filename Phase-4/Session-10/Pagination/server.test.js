const request=require('supertest');
const app=require('./server');

//install supertest and jest
// npm install --save-dev jest supertest
test('GET /api/product?page=3&limit=3',async()=>{
    const resp=await request(app).get('/api/product?page=3&limit=3');
    expect(resp.statusCode).toBe(200);
})