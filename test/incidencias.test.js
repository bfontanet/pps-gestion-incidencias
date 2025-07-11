const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();

chai.use(chaiHttp);

describe('API de incidencias (mínimo funcional)', () => {

  it('GET /api/incidencias debe devolver un array', (done) => {
    chai.request(server)
      .get('/api/incidenciasAPI')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('array');
        done();
      });
  });

  it('GET a ruta inexistente debe devolver 404', (done) => {
    chai.request(server)
      .get('/no-existe')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });

});
