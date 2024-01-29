

let products = [
    {
        id:1,
        name: 'john',
        price: 1200,
        quantity:10
    },
    {
        id:2,
        name: 'Jane',
        price: 1400,
        quantity:5
    },
     {
        id:3,
        name: 'Julie',
        price: 1600,
        quantity:6
    },
    
];
let ids = [];
products.map(arr=>{
    ids.push(arr.id);
});

let productId=3;

let isIncluded=ids.includes(productId)
const index = products.findIndex(object => {
  return object.id === productId;
});

console.log(index);
if(isIncluded){
    console.log(productId);
    let filteredProduct=products.filter(product=>{
      return  product.id===productId
    });
    const result = Object.assign({}, ...filteredProduct);
    console.log(result.quantity);
    
    products[index].quantity++;
    
    
}

 console.log(products)