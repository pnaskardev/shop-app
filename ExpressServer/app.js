const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv=require('dotenv');
const session=require('express-session');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();
dotenv.config();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use
(
  session({secret:'my secret', resave:false, saveUninitialized:false})
);
app.use((req, res, next) => {
  User.findById('5bab316ce0a7c75f783cb8a8')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    // `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-ntrwp.mongodb.net/shop?retryWrites=true`
    process.env.DB_URI
  )
  .then(result => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'Max',
          email: 'max@test.com',
          cart: {
            items: []
          }
        });
        user.save();
      }
    });
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
