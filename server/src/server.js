const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

const products =[
  {
    id:1,
    name: "vit T-shirt",
    price: 200,
    description: "vit T-shirt med text",
    imageUrl: "https://www.buytshirtdesigns.net/wp-content/uploads/2020/01/3-15.jpg",
    urlSlug: "vit-tshirt-med-text"
  },
  {
   id:2,
    name: "red T-shirt",
    price: 300,
    description: "red T-shirt med text",
    imageUrl: "https://ae01.alicdn.com/kf/HTB1mGpGaE_rK1Rjy0Fcq6zEvVXaC/Valentines-T-Shirt-Women-All-You-Need-Is-Love-Tees-XOXO-T-Shirt-Unisex-Valentines-Day.jpg",
    urlSlug: "red-tshirt-med-text"
  },
  {
      id:3,
      name: "svart T-shirt",
      price: 199,
      description: "svart T-shirt med text",
      imageUrl: "https://cdn.shopify.com/s/files/1/1733/3727/products/il_fullxfull.1202213487_j8ek_1200x1200.jpg?v=1540157363",
      urlSlug: "svart-tshirt-med-text"
    },
  {
      id:4,
      name: "rosa T-shirt",
      price: 199,
      description: "rosa T-shirt med text",
      imageUrl: "https://www.nielsenanimal.com/wp-content/uploads/2018/09/womens-nike-jdi-merge-t-shirt-pink-t-shirts.jpg",
      urlSlug: "rosa-tshirt-med-text"
  },
  {
      id:5,
      name: "gul T-shirt",
      price: 199,
      description: "gul T-shirt med text",
      imageUrl: "https://ae01.alicdn.com/kf/HTB1L9Rda8jTBKNjSZFwq6AG4XXa5/GIRLS-CAN-DO-ANTHING-Letter-Print-Casual-T-shirt-For-Women-2019-Spring-Summer-Harajuku-Female.jpg_640x640.jpg",
      urlSlug: "gul-tshirt-med-text"
      },
      {
          id:6,
          name: "blå T-shirt",
          price: 199,
          description: "blå T-shirt med text",
          imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81dve0ZpthL._UL1500_.jpg",
          urlSlug: "blå-tshirt-med-text"
      }
  ]
const pages={
  home:{
    hero:{
      heading: "Freaky Fashion",
      description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
      imageUrl: "https://t1.daumcdn.net/cfile/tistory/2778CB45518750822F",
      buttonLabel: "Click here",
      buttonLink: "https://www.boohoo.com/"
    },
    mainMeny:[
      {
        navName: "Hem",
        navLink: "http://localhost:3001/#"
      },
      {
        navName: "Rea",
        navLink: "https://www.booztlet.com/se/sv?utm_source=bing&utm_medium=cpc&utm_campaign=se_msn_booztlet_generic_sale&utm_term=rea&utm_content=Rea%20-%20Exact"
      },
      {
        navName: "Kontakta oss",
        navLink: "http://localhost:3001/#"
      },
    ],
    spots:[
      {
        spotsLabel: "Skor",
        spotsimageUrl: "https://www.francegrossiste.com/images/grossiste_chaussure.jpeg",
        spotsLink: "https://www.boohoo.com/"
      },
      {
        spotsLabel: "väskor",
        spotsimageUrl: "https://cdn3.cdnme.se/936457/7-3/michael_kooorssss_52b8eb552a6b221a1ca88445.jpg",
        spotsLink: "https://www.boohoo.com/"
      },
      {
        spotsLabel: "bälte",
        spotsimageUrl: "https://i.pinimg.com/736x/d1/b7/92/d1b7921ab46861d7544a302e61610442.jpg",
        spotsLink: "https://www.boohoo.com/"
      }
    ],
    products: products.map(x => {
      return {
          id: x.id,
          name: x.name,
          imageUrl: x.imageUrl,
          price: x.price,
          urlSlug: x.urlSlug
      }
  }),
  }
}
app.use(cors());

// GET /api/products
app.get('/api/products', (req, res) => {
  res.json(products);
})

// GET /api/products/:urlSlug
app.get('/api/products/:urlSlug', (req, res) => {

  const {urlSlug} = req.params;
  const product = products.find(p => p.urlSlug == urlSlug);
 
  res.json(product);
})

// GET /api/products
app.get('/api/pages/:id', (req, res) => {

  const { id } = req.params;

  const page = pages[id];

  res.json(page);
}); 

// GET /api/search?q=t-shirt
// Ta fram endpoint /api/search?q=t-shirt
app.get('/api/search', (req, res) => {
    
  const { q } = req.query;
// to use Lower case (små bokstaver)
  const regExp = new RegExp(q, 'i');
// Can use this code instead of above (alternative)
//const program = products.filter(x=> x.name.toLocaleLowerCase().includes(q.toLocaleLowerCase()));
  
const filteredProducts = products.filter(x => x.name.match(regExp));

// To show the result like this:
//  { result: [product match searching],
//    count: 3 }
    const searchResult = {
      result: filteredProducts,
      count: filteredProducts.length
  };

  res.json(searchResult);
});


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});