// Select the <a> elements inside <li> elements


// Add click event listener to each <a> element
const allAs = document.querySelectorAll('a');
const alltabs=document.querySelectorAll('.tabbed-content')

console.log(alltabs);
// Add click event listener to each <li> element
allAs.forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault(); // Prevent the default behavior of the link
   
    alltabs.forEach(a=>{
        a.classList.add('hidden')
    })
    const target = document.querySelector(e.target.getAttribute('href'));
    console.log(target);
      target.classList.remove('hidden')
                
            });
            
  
});
let item=JSON.parse(localStorage.getItem("item"));


 let incomevalues=Object.values(item["income"]);

 let incomesum = incomevalues.reduce((total, income) => total + income, 0); 
 let totalincome=document.querySelector('.totalincome');

 totalincome.textContent=`${incomesum}`;

let expensevalues=Object.values(item["expense"]);

let expensesum=expensevalues.reduce((total, income) => total + income, 0);

let totalexpense=document.querySelector('.totalexpense');

totalexpense.textContent=`${expensesum}`;
let profitorloss=document.querySelector('.profitorloss');
let profitLoss=incomesum-expensesum;
switch (true) {
    case profitLoss > 0:
        profitorloss.textContent = `Profit +${profitLoss}`;
        break;
    case profitLoss < 0:
        profitorloss.textContent = `Loss +${profitLoss}`;
        break;
    case profitLoss === 0:
        profitorloss.textContent = `Breakeven +${profitLoss}`;
        break;
    default:
        // Handle any other cases
        break;
}
