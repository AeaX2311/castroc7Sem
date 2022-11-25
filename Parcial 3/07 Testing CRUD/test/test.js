let chai = require('chai');
let chaiHttp = require('chai-http');
const url = require('../app');
const expect = require('chai').expect;

chai.use(chaiHttp);

describe('Inserta una persona: ', () => {
    it('Deberia insertar una persona', (done) => {
        chai.request(url).post('/Persona').send({
   
        }).end(function (err, res) {
            expect(res).to.have.status(302);
          //  expect(res.body).to.be.a('json');
            done();
        });
    });
});

describe('Inserta una persona: ', () => {
    it('Deberia insertar una persona', (done) => {
        chai.request(url).post('/Persona').send({
            nombre: "Enrique",
            apellido: "Pena",
            correoElectronico: "enrique@pena.com"
        }).end(function (err, res) {
            console.log(res);
            expect(res).to.have.status(302);
           // expect(res.text).to.be.a('string');
            done();
        });
    });
});
