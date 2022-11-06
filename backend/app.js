const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const config = require('config');
const db = config.get('mongoURI');
const students = require('./routes/api/students');
const morgan = require('morgan');
const app = express();
const { listen } = require('express/lib/application');
const session = require('express-session');
const MongoDBSession = require('connect-mongodb-session')(session);
const bcrypt = require('bcrypt');
const AdminModel = require('./models/admin');
const { redirect } = require('express/lib/response');

// connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Middleware
app.use(express.json({ extended: false }));
app.use(express.static('public'));
app.use(morgan('dev'));

app.set('view engine', 'ejs');
const store = new MongoDBSession({
  uri: db,
  collection: 'Wictronix project',
});
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: 'key that will sign cookie',
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);
app.get('/registeradmin', (req, res) => {
  res.render('registeradmin');
});

app.post('/registeradmin', async (req, res) => {
  const { username, email, password } = req.body;
  let admin = await AdminModel.findOne({ email });
  if (admin) {
    return res.redirect('/registeradmin');
  }

  const salt = 12;
  const hashedPsw = await bcrypt.hash(password, 12);
  admin = new AdminModel({
    username: username,
    email: email,
    password: hashedPsw,
  });
  await admin.save();
  res.redirect('/loginadmin');
});

const isAuth = (req, res, next) => {
  if (req.session.isAuth) {
    next();
  } else {
    res.redirect('/loginadmin');
  }
};

app.get('/loginadmin', (req, res) => {
  res.render('loginadmin');
});
app.post('/loginadmin', async (req, res) => {
  const { email, password } = req.body;
  const admin = await AdminModel.findOne({ email });
  if (!admin) {
    return res.redirect('/registeradmin');
  }
  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
    return res.redirect('/loginadmin');
  }
  if (isMatch) {
    req.session.isAuth = true;
    return res.redirect('http://localhost:3000/');
  }
});
app.get('/dashboard', isAuth, (req, res) => {
  res.render('dashboard');
});

// use Routes
app.use('/api/students', students);

const port = process.env.PORT || 8000;
app.use((req, res) => {
  res.status(404).render('404', { title: 'error' });
});
app.listen(port, () => console.log(`Server Running on port: ${port}`));
