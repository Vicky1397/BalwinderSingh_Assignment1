var booksArray=[
    {
    name:"Half Girlfriend",genre:"Love Story"
  },
  {
    name:"Superman",genre:"Action"
  },
  {
  name:"Sin City",genre:"Comic"
  }];
  

  
  
  
  const book = function(req, res){
      res.render('list-display', { books: booksArray });
    };
    
  
  
  
    
  
  
    module.exports = {
        book    
    };