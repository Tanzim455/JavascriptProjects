let posts= [
    { 
       id:1,
       title:"First Post",
       description:"Description of the Post",
       category:{
        name:'Sports'
       }
    },
    { 
        id:2,
        title:"Second Post",
        description:"Description of the Post",
        category:{
         name:'Fashion'
        }
     },
     { 
        id:3,
        title:"Third Post",
        description:"Description of the Post",
        category:{
         name:'Sports'
        }
     },
     { 
        id:4,
        title:"Fourth Post",
        description:"Description of the Post",
        category:{
         name:'Politics'
        }
     },
     { 
      id:5,
      title:"Fifth Post",
      description:"Description of the Post",
      category:{
       name:'Politics'
      }
   },
   { 
      id:6,
      title:"Sixth Post",
      description:"Description of the Post",
      category:{
       name:'Politics'
      }
   },
    
    
];
let categories=[
    {id:1,name:"Sports"},
    {id:2,name:"Politics"},
    {id:3,name:"Fashion"}
]
// categories.forEach(cat=>{
//     cat.posts.forEach(cat=>{
//         console.log(cat.title);
//     })
// })

 let categoryname = document.querySelector('.categoryheading');
 let para = document.querySelector('.para');


//  posts.forEach(post=>{
//     const clone = container.cloneNode(true);
//     clone.querySelector('.categoryheading').textContent =post.title;
//     clone.querySelector('.para').textContent =post.description;
//     container.parentNode.appendChild(clone);
//  });
//  container.style.display = 'none';
 const sb = document.querySelector('#framework')
 console.log(sb);
 categories.forEach(cat => {
   sb.innerHTML += `<option value="${cat.name}">${cat.name}</option>`;
});
var container=document.querySelector('.container')
posts.forEach(post => {
   const classes = ["p-6", "bg-white","border","border-gray-200","rounded-lg","shadow",
   "dark:bg-gray-800","dark:border-gray-700","space-y-4","flex" ,"flex-col","space-y-4","mt-2"
 ];
   
     const createDiv = document.createElement('div');
     createDiv.innerHTML += `<div>${post.title}</div>`;
     createDiv.innerHTML += `<div>${post.description}</div>`;
     container.appendChild(createDiv);
   //   const classes = ["p-6", "bg-white","border","border-gray-200","rounded-lg","shadow",
   //   "dark:bg-gray-800","dark:border-gray-700"
   // ];
      createDiv.classList.add(...classes)
      
      
   //   clone.appendChild(createDiv); // append the new paragraph to the clone
   //   container.parentNode.appendChild(clone);
 });
function change() {
   
   
   const newvalue = sb.value;
   if (newvalue) {
       
       container.innerHTML = ''; // Clear the container
      //  container.classList.add('p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700')
      
      
       console.log(container);
       const filteredPosts = posts.filter(p => p.category.name === newvalue);
       filteredPosts.forEach(post => {
         const classes = ["p-6", "bg-white","border","border-gray-200","rounded-lg","shadow",
         "dark:bg-gray-800","dark:border-gray-700","space-y-4","flex" ,"flex-col","space-y-4","mt-2"
       ];
         
           const createDiv = document.createElement('div');
           createDiv.innerHTML += `<div class="text-blue-600 text-3xl">${post.title}</div>`;
           createDiv.innerHTML += `<div>${post.description}</div>`;
           container.appendChild(createDiv);
         //   const classes = ["p-6", "bg-white","border","border-gray-200","rounded-lg","shadow",
         //   "dark:bg-gray-800","dark:border-gray-700"
         // ];
            createDiv.classList.add(...classes)
            
            
         //   clone.appendChild(createDiv); // append the new paragraph to the clone
         //   container.parentNode.appendChild(clone);
       });
   }

   
  
   
}








 
// const filteredCategories=categories.filter(cat=>{
//    return cat.name==='Fashion';
// })
// console.log(filteredCategories);
// filteredCategories.forEach((cat) => {
//     // Clone the container inside the loop
//     const clone = container.cloneNode(true);

//     // Update the content of the cloned elements
//     clone.querySelector('.categoryheading').textContent = cat.name;
//     clone.querySelector('.para').textContent = cat.price;

//     // Append the cloned container to the parent node
//     container.parentNode.appendChild(clone);
// });

// // Hide the original container
// container.style.display = 'none';
