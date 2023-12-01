const request = require('supertest');
const app = require('../app');

let id;

test('GET /directors', async () => {
    const res = await request(app).get('/directors');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
});

test('POST /directors', async() => {
    const song = {
        name: "Sweet child o mine",
    }
    const res = await request(app).post('/directors').send(director);
    id = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.name).toBe(director.name);
    expect(res.body.id).toBeDefined();
})

test('PUT /directors/:id', async () => {
    const song = {
        name: "Sweet child o mine updated",
    }
    const res = await request(app).put(`/directors/${id}`).send(director);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe(director.name);
});

test('DELETE /directors/:id', async () => {
    const res = await request(app).delete(`/directors/${id}`)
    expect(res.status).toBe(204);
});