const request = require('supertest');
const app = require('../app');

let id;

test('GET /movies', async () => {
    const res = await request(app).get('/movies');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
});

test('POST /movies', async () => {
    const album = {
        name: "Apetite for destruction",
        releaseYear: 1985,
        image: 'https://image.jpg',
    }
    const res = await request(app).post('/movies').send(movie);
    id = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.name).toBe(movie.name);
    expect(res.body.id).toBeDefined();
});

test('PUT /movies/:id', async () => {
    const movie = {
        name: "Apetite for destruction",
    }
    const res = await request(app).put(`/albums/${id}`).send(movie);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe(movie.name);
});

test('DELETE /movies/:id', async () => {
    const res = await request(app).delete(`/movies/${id}`);
    expect(res.status).toBe(204);
});