### Hoppier 

## 1. Question

Use the following fake snacker list:

https://s3.amazonaws.com/misc-file-snack/MOCK_SNACKER_DATA.json

Find all emails of snackers with a `fave_snack` of a product we stock:

Our product list can be found here (assume all products here are in stock):
https://ca.desknibbles.com/products.json?limit=250

- a) List the real stocked snacks you found under the snacker's `fave_snack`?
- b) What're the emails of the snackers who listed those as a `fave_snack`?
- c) If all those snackers we're to pay for their `fave_snack` what's the total price?

## 2. Answer a)

Found real stocked snacks:

```
id: 4353756626966 |  price: 39.97 | vendor:  Walkers Shortbread Ltd
id: 4353756004374 |  price: 38.17 | vendor:  Campbell's
id: 4353771962390 |  price: 37.48 | vendor:  Jelly Belly Company
id: 4353780416534 |  price: 22.70 | vendor:  Kellogg NA Co.
id: 4353778581526 |  price: 35.70 | vendor:  Office Snax
id: 4353780645910 |  price: 36.99 | vendor:  B&G Foods, Inc.
id: 4353767243798 |  price: 41.13 | vendor:  Kellogg NA Co.
id: 4353781202966 |  price: 25.20 | vendor:  WhiteWave Foods Company
id: 4353775763478 |  price: 59.61 | vendor:  Kellogg NA Co.
id: 4353780875286 |  price: 137.82 | vendor:  Keurig Green Mountain, Inc
```


## 3. Answer b) 

Snakers with found real stocked snacks:

```
42 | raubrun15@latimes.com | Rhona, Aubrun | Kessler, Walker and Reinger
43 | bleyre16@artisteer.com | Benoit, Leyre | Dach, Hand and Douglas
413 | meustanchbg@opensource.org | Mommy, Eustanch | Hand and Sons
47 | hlangtry1a@columbia.edu | Hurlee, Langtry | Beer and Sons
81 | larnason28@adobe.com | Lloyd, Arnason | Bernhard, Kris and Jerde
119 | mdumphy3a@tuttocitta.it | Morganica, Dumphy | McLaughlin, Hills and Kertzmann
176 | hhruska4v@last.fm | Huntley, Hruska | Gusikowski, Windler and Rice
330 | bterren95@fda.gov | Barron, Terren | Rice, Tremblay and Senger
196 | aklaggeman5f@mtv.com | Alvira, Klaggeman | Okuneva, Lindgren and Graham
239 | abroadnicke6m@blogs.com | Alvan, Broadnicke | White, Cremin and Williamson
399 | bhalladb2@lycos.com | Beaufort, Hallad | Fahey, Senger and White
279 | rduinbleton7q@google.com.br | Ruddy, Duinbleton | Keebler, Considine and Gusikowski
287 | ojales7y@wunderground.com | Odelinda, Jales | Green, Yundt and Fritsch
418 | bdiaperbl@ehow.com | Bernardine, Diaper | Schowalter, Crooks and Green
298 | bmossbee89@exblog.jp | Brittani, Mossbee | Brown, Streich and Mante
472 | mandersend3@cafepress.com | Matilda, Andersen | Brown, Waelchi and Yost
```

## 4. Answer c)

Total price:

```
42, raubrun15@latimes.com  | prod: 4353756626966, 39.97
43, bleyre16@artisteer.com  | prod: 4353756004374, 38.17
47, hlangtry1a@columbia.edu  | prod: 4353771962390, 37.48
81, larnason28@adobe.com  | prod: 4353780416534, 22.70
119, mdumphy3a@tuttocitta.it  | prod: 4353778581526, 35.70
176, hhruska4v@last.fm  | prod: 4353780645910, 36.99
196, aklaggeman5f@mtv.com  | prod: 4353767243798, 41.13
239, abroadnicke6m@blogs.com  | prod: 4353781202966, 25.20
279, rduinbleton7q@google.com.br  | prod: 4353775763478, 59.61
287, ojales7y@wunderground.com  | prod: 4353780875286, 137.82
298, bmossbee89@exblog.jp  | prod: 4353780875286, 137.82
330, bterren95@fda.gov  | prod: 4353780645910, 36.99
399, bhalladb2@lycos.com  | prod: 4353781202966, 25.20
413, meustanchbg@opensource.org  | prod: 4353756004374, 38.17
418, bdiaperbl@ehow.com  | prod: 4353780875286, 137.82
472, mandersend3@cafepress.com  | prod: 4353780875286, 137.82
Total: 988.59
```


## 5. How to solve the question

### **5.1 Get all categories**
Since we have the products API, we can iterate all products and list their categories:

``` javascript
const getAllSnackProducts = async ( ) => {
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
  return ret;
}
```

The print is:

``` javascript
[
  'Desktop Organizers & Holders',
  'Desk Organizers & Holders',
  'Writing Accessories',
  'Highlighters',
  'Pens & Pencils',
  'Markers & Dry Erase',
  'Envelopes',
  'Printer Paper',
  'Copy & Multi-use Paper',
  'Computer & Fax Paper',
  'Notebooks Pads & Filler Paper',
  'Foods & Beverages'
]
```

Obviously, the snack category falls in `Food & Beverages`

### **5.2 Get all snack products** : 

Same with 5.1, add a filter to results. And there are 802 snacks.

### **5.3 Match snackers' favorite snacks to products**

- Since the snacker's `fave_snack` is in the form of `Steuber, Berge and Block` , so we split the string by regex `/(, )|( and )/` and remove empty.
- Iterate each `fave_snack` and match in stocked products in 5.2 .
- When matching, match `title` and `vender` and store the result in a hash.
  ```
    { 
      snack_key_word : { 
        found: true/false, 
        persons: [], 
        product: info 
      }
    }
    ``` 
- Optimization: If found cache them so that we can use the result again.


``` javascript
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
```
### **5.4 Give Matched Stocked Info (Question a)**

We already do the match in 5.3, so just print them all.

``` javascript
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
```


### **5.5 Give Matched User Info (Question b)**

We already do the match in 5.3, so just print them all.

``` javascript
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
```

### **5.6 Give Total price (Question c)**

We already do the match in 5.5, so just sum them all.

``` javascript
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
```

### **5.7 Combine them**

It can be done within one promise chain. But put them in different chain makes it easier to give answers and explanations. 

``` javascript
getAllSnackProducts()
// _getAllSnackProductsFromJSON()
  .then( _buildSnackMatchCache )
  .then( _stockedSnacks )
  .then( _snackerEmail )
  .then( _calculatePrice )
  .catch( err => {
    console.error(err);
  }
)
```

## 6. How to run

Menu:
```
|- index.js (main program)
|- MOCK_SNACKER_DATA.json (Snacker info)
|- snacks.json (cache, so that when debugging, do not need to fetch from internet anymore)
|- package.json ( npm package )

```

```
npm install
npm start
```
