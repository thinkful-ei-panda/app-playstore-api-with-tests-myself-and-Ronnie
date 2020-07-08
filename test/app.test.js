const expect = require('chai').expect;
const supertest = require('supertest');

const app = require('../index.js');

describe('app GET / is working', ()=> {
  it('should work but with a link to app', () =>{
    return supertest(app)
      .get('/')
      .expect(200, 'this is working but idk what your looking for, maybe try http://localhost:8000/apps');     
  });
  
} );

