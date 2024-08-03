// const express = require('express');
// const router = express.Router();
// const booksController = require('../controllers/booksController');
// const authenticateAuthorize = require('../custom-middlewares/authMiddleware');

// // Authenticate middleware
// const authenticate = authenticateAuthorize.authenticate;

// // Authorize middleware;
// const authorize = authenticateAuthorize.authorize;

// //Render a new book Form and send the form to the client (browser)so that the user can send the data
// router.get('/newBookForm', authenticate, authorize, booksController.addBook);

// // CREATE is new book via a POST 
// // note that the authenticate and authorize middleware are passed as arguments
// // the node frameworks allows you to pass as many middleware as you want
// router.post('/', authenticate, authorize, booksController.createBook);

// // READ is done via GET
// // note that the authenticate and authorize middleware are passed as arguments
// // the node frameworks allows you to pass as many middleware as you want
// router.get('/', authenticate, authorize, booksController.getBooks);

// // READ: GET a specific book by ID
// // note that the authenticate and authorize middleware are passed as arguments
// // the node frameworks allows you to pass as many middleware as you want
// router.get('/:id', authenticate, authorize, booksController.getBookById);

// // UPDATE is done via PUT (update) an existing book by ID
// //Update book Form
// router.get('/edit/:id', authenticate, authorize, booksController.updateBookForm);
// // UPDATE i update
// // note that the authenticate and authorize middleware are passed as arguments
// // the node frameworks allows you to pass as many middleware as you want
// // The action attribute in your <form> tag specifies the URL to which the form data should be submitted when the user submits the form. 
// //In your case, the form action is set to / books / update /<%= book._id %>.
// //This will dynamically insert the _id of the book you are updating, 
// //effectively sending a POST request to a URL like / books / update / 12345(where 12345 would be the _id of the book).

// router.post('/update/:id', authenticate, authorize, booksController.updateBookById);

// // DELETE is done via DELETE Command a book by ID
// // note that the authenticate and authorize middleware are passed as arguments
// // the node frameworks allows you to pass as many middleware as you want
// // The action attribute in your <form> tag specifies the URL to which the form data should be submitted when the user submits the form. 
// // In your case, the form action is set to / books / update /<%= book._id %>.
// // effectively sending a POST request to a URL like / books / update / 12345(where 12345 would be the _id of the book).
// router.post('/delete/:id', authenticate, authorize, booksController.deleteBook);

// module.exports = router;


const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');
const { authenticate, authorize } = require('../custom-middlewares/authMiddleware');

// Render a new book form and send the form to the client (browser) so that the user can send the data
router.get('/newBookForm', authenticate, booksController.addBook);

// CREATE a new book via POST
router.post('/', 
    authenticate,
    booksController.createBook);

// READ all books
router.get('/', authenticate, booksController.getBooks);

// READ a specific book by ID
router.get('/:id', authenticate, booksController.getBookById);

// Render update book form
router.get('/edit/:id', authenticate, booksController.updateBookForm);

// UPDATE a book by ID
router.post('/update/:id', authenticate, booksController.updateBookById);

// DELETE a book by ID
router.post('/delete/:id', authenticate, booksController.deleteBook);

module.exports = router;
