
const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('common'));

const appStore = require('./app-store.js');

app.get('/' , (req, res)=>{
  res.status(200).send('this is working but idk what your looking for, maybe try http://localhost:8000/apps');
});


app.get('/apps', (req, res) => {
      
  const {sort, genre} = req.query;


  
  if (sort) {
    if(!['Rating', 'app'].includes(sort)){
      return res.send('Sort is invalid').status(400);
    }}
        
  if (genre) {
    if(!['Action','Puzzle', 'Strategy', 'Casual', 'Arcade', 'Card'].includes(genre)) {
      return res.send('Genre is invalid').status(400);
    }}
            
  let results = appStore;
    
    
  // let results = appStore.filter(app => 
  //     app.Genres.toLowerCase().includes(genre.toLowerCase()));

  if (sort) { results.sort((a, b) => { return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0; }); }
    
  if(genre) { results = results.filter(app => app.Genres.toLowerCase().includes(genre.toLowerCase()));}



  res.json(results).status(200).send();
});

module.exports = app;

// app.listen(8000, () => console.log('server is running on port 8000'));
