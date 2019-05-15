import pacientess from '../controllers/paciente';

export default (app) => {

  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the BookStore API!',
  }));

  app.post('/api/pacientes', pacientess.signUp); // API route for user to signup
  //app.post('/api/pacientes', pacientes.signUp);
  //app.get('/api/paciente', pacientes.list); // API route for user to signup
  //app.post('/api/users/:userId/books', Books.create); // API route for user to create a book
  //app.get('/api/books', Books.list); // API route for user to get all books in the database
  //app.put('/api/books/:bookId', Books.modify); // API route for user to edit a book
  //app.delete('/api/books/:bookId', Books.delete); // API route for user to delete a book
 
};


