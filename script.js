
let incomeExpense = { 

    income: { 

        "rent": 50, 

        "investment": 50, 

        "shopprofit": 200 

 

    }, 

    expense: { 

        "utility": 25, 

        "electricbill": 50, 

        "waterbill": 100 

    } 

} 

 

console.log(incomeExpense) 

 

//Get keys of Objects 

let allkeys = Object.keys(incomeExpense) 

 

console.log(allkeys) 

let inputkey = "income" 

//Check whether the input key is included in the allkeys array 

console.log(allkeys.includes(inputkey)) 

 

if (allkeys.includes(inputkey)) { 

 

    //get key value pair of this nested object 

 

    const nestedObj = incomeExpense[inputkey] 

    console.log("Nested Object is"); 

    console.log(nestedObj) 

    //Get all keys of nested Object 

    let nestedObjectKey = Object.keys(nestedObj) 

    console.log("Keys of nested object are") 

    console.log(nestedObjectKey) 

    //Loop through the object 

    //View all key value of nested object 

 

    let inputViewAll = "ViewAll"; 

    let inputSortByKey = "sortbyNestedKey" 

    let option = inputSortByKey; 

    let preferredNestedkey = "rent" 

    for (const key in nestedObj) { 

        if (option === inputViewAll) { 

            console.log(`${key}: ${nestedObj[key]}`); 

        } 

        if (option === inputSortByKey && nestedObjectKey.includes(preferredNestedkey)) { 

            if (key === preferredNestedkey) { 

                console.log(`${key}: ${nestedObj[key]}`); 

            } 

        } 

    } 

} 

 

//Get total income 

//Get income object 

const incomeObj = incomeExpense["income"] 

console.log(incomeObj) 

//Get all values of the object 

let incomevalues = Object.values(incomeObj) 

//Check if the part is updated 

//let incomesum = 0; 

// incomevalues.forEach((income) => { 

//     incomesum += income; 

// }); 

let incomesum = incomevalues.reduce((total, income) => total + income, 0); 

 

console.log(incomesum) 

const expenseObj = incomeExpense["expense"] 

 

// //Get all values of the object 

let expensevalues = Object.values(expenseObj) 

// //Check if the part is updated 

// let expensesum = 0; 

// expensevalues.forEach((expense) => expensesum += expense); 

//Reduce is better in place of forEach 

let expensesum = expensevalues.reduce((total, income) => total + income, 0); 

console.log(expensesum); 

let loss = expensesum - incomesum 

let profit = incomesum - expensesum 

//if expense sum is greater than income sum you make a profit 

if (expensesum > incomesum) { 

    console.log(`You are on loss of ${loss}`); 

} 

if (expensesum < incomesum) { 

    console.log(`You are on profit of ${profit}`); 

} 

 

 

//Get total expense 

 

if (!allkeys.includes(inputkey)) { 

    console.log("Key not found") 

} 

 