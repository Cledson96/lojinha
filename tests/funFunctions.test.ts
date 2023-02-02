import app from "index";
import { describe } from "node:test";
import supertest from 'supertest';

const api = supertest(app);

describe('Post /fruits', () => {

    it('test post fruit correct', async () => {

        const result = await api.post('/fruits').send({ name: "Maça", price: 12.00 })
        expect(result.status).toEqual(201);
   
    })

    it('test post fruit replicated', async () => {

        const result = await api.post('/fruits').send({ name: "Maça", price: 12.00 })
        expect(result.status).toEqual(409);
   
    })

    it('test post fruit incorrect', async () => {

        const result = await api.post('/fruits').send({ fruit: "Maça", price: 12.00 })
        expect(result.status).toEqual(422);
   
    })


})

describe('get /fruits', () => {

    it('test get fruit correct', async () => {

        const result = await api.get('/fruits')
        expect(result.status).toEqual(200);
   
    })


})