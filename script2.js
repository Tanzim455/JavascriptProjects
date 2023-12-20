

let incomeExpense={
  income:{
      
  },
  expense:{
    
  }
}

//Filtering out keys income or expense




// console.log(incomeExpense);
//convert the Object to string
 //let string=JSON.stringify(incomeExpense)
//{"income":{"investment":35000}} 
// console.log(typeof(string));//string
// console.log(string);
//{"income":{"investment":35000},"expense":{"utility":5000}} 

   //localStorage.setItem("incomeExpense",string);

  //Get data from LocalStorage 
 let item=JSON.parse(localStorage.getItem("item"));



const allkeys=Object.keys(incomeExpense);

console.log(allkeys);
let select=document.querySelector('.select')

function change(){
  console.log("Changed");
}
const amount = document.querySelector('.amount');
const type = document.querySelector('.type');
let form = document.querySelector('.form');

 // use a different name for the variable

console.log(allkeys);
console.log(amount.value);
allkeys.forEach(function(key) {
  var option = new Option(key, key); // create a new option element
  select.options.add(option); // append the option element to the select element
   option.classList.add('newclassList') // remove this line or use it for styling or filtering
   console.log(select.value);
});
//Income expense filter via select 

let category = document.querySelector('.select');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(amount.value);
  console.log(category.value); // use the value property of the category variable
  console.log(type.value);
    item[category.value][type.value] = parseInt(amount.value)
    console.log(item);
  //  // use the value property of the category variable
      let string=JSON.stringify(item)
      console.log(string);
      localStorage.setItem("item",string)
});

let filter=document.querySelector('.incomeexpensefilter');

allkeys.forEach(function(key) {
  var option = new Option(key, key); // create a new option element
  filter.options.add(option); // append the option element to the select element
   
});
filter.addEventListener('change', function() {
  let incomeOrExpense=this.value
  console.log(incomeOrExpense);
  
  let filteroutIncomeExpense=Object.fromEntries(Object.entries(item).filter(([key]) => 
key.includes(incomeOrExpense)))[incomeOrExpense];


for (const key in filteroutIncomeExpense) {
   let button = document.createElement('button');
   let buttonTwo = document.createElement('button');
   let p1=document.createElement('p')
   let p2=document.createElement('p')
  
  button.innerText ='Edit';
  buttonTwo.innerText ='Delete';
  p1.textContent=`${key}`
  p2.textContent=`${filteroutIncomeExpense[key]}`;
  console.log(`${key}: ${filteroutIncomeExpense[key]}`);
  
  document.body.appendChild(p1);
  document.body.appendChild(p2);
  document.body.appendChild(button);
 
  document.body.appendChild(buttonTwo);
  buttonTwo.addEventListener('click',(e)=>{
    e.preventDefault();
    
    console.log(incomeOrExpense);

     console.log(p1.textContent);

       delete item[incomeOrExpense][p1.textContent]

       let string=JSON.stringify(item)
      //  console.log(string);
      // console.log(string);
        localStorage.setItem("item",string);
  })


  
 
  

}
});

// console.log(classList);

//How to calculate income,expense and profit 

// console.log(item);
  let incomeArr=Object.values(item["income"]);
 console.log(incomeArr);
const sumIncome= incomeArr.reduce((acc, values) => acc + values,0);
 console.log(sumIncome);

 const expenseArr=Object.values(item["expense"]);

 const sumExpense= expenseArr.reduce((acc, values) => acc + values,0);

console.log(sumExpense);

const profitorLoss=sumIncome-sumExpense;

if(profitorLoss>0){
  console.log(`You have a profit of ${profitorLoss}`);
}

if(profitorLoss<0){
  console.log(`You have a loss of ${Math.abs(profitorLoss)}`);
}

if(profitorLoss===0){
  console.log(`You have no profit or loss`);
}
//Delete 
// console.log(item);

//  delete item["income"]["Investments"]



// console.log(item);

 
// const lis=document.querySelectorAll('li');

// lis.forEach(li=>{
//   li.addEventListener('click',(e)=>{
//     e.stopPropagation();
//     console.log(e.target);
//   })
// })
