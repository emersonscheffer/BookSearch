const express = require('express');
const router = express.Router();
const Axios = require('axios');
const ENV = require('dotenv');
ENV.config();

const Search = require('../../models/Search');

var allSearchData = []
const key = process.env.API_KEY

router.post('/', (req, res) => {

    const searchData = {
        search: req.body.search
    }

    allSearchData = []


    Axios.get('https://www.googleapis.com/books/v1/volumes?q='+ searchData.search +'&key='+ key)
        .then(res => {
            for(let i = 0; i < res.data.items.length; i++) {

                if(res.data.items[i].volumeInfo.imageLinks === undefined){
                    
                    var imageAdd = "missimag.png";
                  } else {
                    var imageAdd = res.data.items[i].volumeInfo.imageLinks.thumbnail
                  }
                  
                  
                  allSearchData.push(
                    {
                        
                            _id: i + 1, 
                            title: res.data.items[i].volumeInfo.title,
                            authors: res.data.items[i].volumeInfo.authors,
                            description: res.data.items[i].volumeInfo.description,
                            imageThumb: imageAdd,
                            linkToBook: res.data.items[i].volumeInfo.previewLink
                        
                    }
                  )
                  
            }

            
        })

        

})


router.get('/', (req, res) => {
   res.json(allSearchData);
});


module.exports = router;