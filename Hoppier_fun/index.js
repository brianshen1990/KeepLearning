
const MockSnacker = require('./MOCK_SNACKER_DATA.json');
const { default: Axios } = require('axios');
const fs = require('fs');

const Split_Line = new Array(15).fill("-").join("");

// https://ca.desknibbles.com/products.json?limit=250&page=10
const _getAllSnackProducts = async ( ) => {
  
  console.log( `${Split_Line} Begin fetching snack products from remote ${Split_Line}` );
  let ret = [];
  let page = 1;
  const CacheType = {};

  while ( true ) {
    const res = await Axios.get(`https://ca.desknibbles.com/products.json?limit=250&page=${page}`);
    if ( res.data.products.length > 0 ) {
      ret = ret.concat( res.data.products.filter( item => 
          item.product_type === "Foods & Beverages" ) );
      res.data.products.map( item => CacheType[item.product_type] = true )
      page++;
    } else {
      break;
    }
  }
  console.log( "Debug --- Product Types: ",  Object.keys(CacheType) );
  console.log( "All snacks length: ", ret.length );
  console.log( `${Split_Line} Finish fetching snack products from remote ${Split_Line}` );
  return ret;
}

// get snacks info and write to file;
// getAllSnackProducts().then( products => {
//   console.log("got products done", products.length);
//   return fs.promises.writeFile("./snacks.json", JSON.stringify(products) );
// }).then( res => {
//   console.log("written to file done");
// }).catch( err => {
//   console.error( err );
// });

// read from JSON file to debug
const _getAllSnackProductsFromJSON = async ( ) => {
  const snack = require("./snacks.json");
  return snack;
}


const _buildSnackMatchCache = (products) => {
  console.log( `${Split_Line} Begin building snack matching cache ${Split_Line}` );

  const SnackToPersonProduct = {};
  // { snack_1 : { found: false, persons: [], product: info }

  for ( let i = 0 ; i < MockSnacker.length ; i++ ) {
    const person = MockSnacker[i];
    const snackNames = person.fave_snack.split(/(, )|( and )/).map(item => item ? item.trim() : item ).filter( item => item && item !== "," && item !== "and" );

    // already calculated
    for ( let s = 0 ; s < snackNames.length ; s++ ) {
      const snackName = snackNames[s];
      if ( snackName in SnackToPersonProduct ) {
        if ( SnackToPersonProduct[snackName].found ) {
          SnackToPersonProduct[snackName].persons.push( person );
        }
        continue;
      }

      // beg calculate
      SnackToPersonProduct[snackName] = { found: false, persons: [] }
      for ( let j = 0 ; j < products.length ; j++ ) {
        const product = products[j];
        const reg = new RegExp( `${snackName}` );
        if ( reg.test(product.vendor) || reg.test(product.title) ) {
          // found!
          // console.log( "found",  snackName );
          SnackToPersonProduct[snackName] = { found: true, persons: [ person ], product  }
          break;
        }
      }
    }
  };
  console.log( `${Split_Line} Finish building snack matching cache ${Split_Line}` );
  return SnackToPersonProduct;
}

const _stockedSnacks = (snackMapping) => {

  console.log( `${Split_Line} Begin giving snacks information ${Split_Line}` );
  const snackCache = {};
  Object.keys( snackMapping ).map( key => {
    const { found, product } = snackMapping[key];
    if ( found && !(product.id in snackCache) ) {
      console.log( `id: ${product.id} |  price: ${product.variants[0].price} | vendor:  ${product.vendor}` );
      // console.log( "title:", product.title);
      snackCache[ product.id ] = product; 
    }
  })
  console.log( `${Split_Line} Finish giving snacks information ${Split_Line}` );
  return snackMapping;
};

const _snackerEmail = (snackMapping) => {

  console.log( `${Split_Line} Begin giving snacker's email information ${Split_Line}` );
  const personCache = {};
  Object.keys( snackMapping ).map( key => {
    const { found, product, persons } = snackMapping[key];
    if ( found ) {
      persons.map( p => {
        if ( !(p.id in personCache) ) {
          console.log( `${p.id} | ${p.email} | ${p.first_name}, ${p.last_name} | ${p.fave_snack}` );
          personCache[ p.id ] = {
            person: p,
            products:  {}
          }
          personCache[ p.id ].products[ product.id ] = product; // unique
        } else {
          personCache[ p.id ].products[ product.id ] = product;
        }
      });
    }
  })
  console.log( `${Split_Line} Finish giving snacker's email information ${Split_Line}` );
  return personCache;
}

const _calculatePrice = (personProduct) => {
  
  console.log( `${Split_Line} Begin giving total price information ${Split_Line}` );
  let res = 0;
  Object.keys(personProduct).map( pid => {
    const { products, person } = personProduct[pid];
    let str = "", mon = 0;
    Object.keys(products).map( pid => {
      const product = products[pid];
      str += ` | prod: ${ product.id }, ${product.variants[0].price}`;
      mon += parseFloat(product.variants[0].price);
    })
    res += mon;
    console.log( `${person.id}, ${person.email} ${str}` );
  }) 
  console.log( `Total: ${res.toFixed(2)}` );
  console.log( `${Split_Line} Finish giving total price information ${Split_Line}` );
}

_getAllSnackProducts()
// _getAllSnackProductsFromJSON()
  .then( _buildSnackMatchCache )
  .then( _stockedSnacks )
  .then( _snackerEmail )
  .then( _calculatePrice )
  .catch( err => {
    console.error(err);
  }
)

