let chai = require('chai');
let chaiHttp = require('chai-http');
const url = require('../src/index');
const expect = require('chai').expect;

chai.use(chaiHttp);

//////////////////////////////////INSERT
describe('Inserta una frase: ', () => {
    it('Deberia insertar una frase', (done) => {
        chai.request(url).post('/Frase').send({
            frases: "Frase con error"
        }).end(function (err, res) {
            expect(res).to.have.status(201);
            done();
        });
    });
});

describe('Inserta una frase: ', () => {
    it('Deberia insertar una frase', (done) => {
        chai.request(url).post('/Frase').send({
            frase: "Frase correcta"
        }).end(function (err, res) {
            expect(res).to.have.status(201);
            done();
        });
    });
});

//////////////////////////////////UPDATE
describe('Actualiza una frase: ', () => {
    it('Deberia Actualizar una frase', (done) => {
        chai.request(url).patch('/Frase').send({
            frase: "Frase con error"
        }).end(function (err, res) {
            expect(res).to.have.status(200);
            done();
        });
    });
});

describe('Actualiza una frase: ', () => {
    it('Deberia Actualizar una frase', (done) => {
        chai.request(url).patch('/Frase').send({
            id: 2,
            frase: "Frase actualizada"
        }).end(function (err, res) {
            expect(res).to.have.status(200);
            done();
        });
    });
});

//////////////////////////////////SELECT
describe('Selecciona una frase: ', () => {
    it('Deberia seleccionar una frase', (done) => {
        chai.request(url).get('/Frase').send({
            id: 2
        }).end(function (err, res) {
            expect(res).to.have.status(200);
            done();
        });
    });
});

describe('Selecciona una frase: ', () => {
    it('Deberia seleccionar una frase', (done) => {
        chai.request(url).get('/Frase').send({
        }).end(function (err, res) {
            expect(res).to.have.status(200);
            done();
        });
    });
});

//////////////////////////////////DELETE
describe('Elimina una frase: ', () => {
    it('Deberia eliminar una frase', (done) => {
        chai.request(url).get('/Frase').send({
            frase: hola
        }).end(function (err, res) {
            expect(res).to.have.status(200);
            done();
        });
    });
});

describe('Elimina una frase: ', () => {
    it('Deberia eliminar una frase', (done) => {
        chai.request(url).get('/Frase').send({
            id: 2
        }).end(function (err, res) {
            expect(res).to.have.status(200);
            done();
        });
    });
});