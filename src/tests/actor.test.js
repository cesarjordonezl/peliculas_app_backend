const request = require('supertest');
const app = require('../app');
const Genre = require('../models/Genre');
require('../models');

let id;

test('GET /actors', async () => {
    const res = await request(app).get('/actors');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
});

test('POST /actors', async () => {
    const artist = {
        name: 'Guns n Roses',
        country: 'USA',
        formationYear: 1980,
        image: 'https://gunsnroses.jpg'
    }
    const res = await request(app).post('/actors').send(actor);
    id = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.name).toBe(actor.name);
});

test('PUT /actors/:id', async () => {
    const artist = {
        name: 'Guns n Roses updated',
    }
    const res = await request(app).put('/actors/'+id).send(actor);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe(actor.name);
});

test('POST /actors/:id/genres', async () => {
    const genre = await Genre.create({ name: "Pop" });
    const res = await request(app)
        .post(`/actors/${id}/genres`)
        .send([genre.id]);
    await genre.destroy();
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
});

test('DELETE /actors/:id', async () => {
    const res = await request(app).delete('/actors/'+id);
    expect(res.status).toBe(204);
});