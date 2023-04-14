const users = [
  {
    id: 1,
    name: "Alice",
  },
  {
    id: 2,
    name: "Bob",
  },
  {
    id: 3,
    name: "Charlie",
  },
];

const orders = [
  {
    userId: 1,
    product: "apples",
  },
  {
    userId: 2,
    product: "oranges",
  },
  {
    userId: 3,
    product: "bananas",
  },
  {
    userId: 4,
    product: "mangoes",
  },
];

// const result = users.map((user) => {
//   const order = orders.find((order) => order.userId === user.id);

//   if (order) {
//     return {
//       ...user,
//       ...order,
//     };
//   }
// });
// console.log(result);

const result = users.map(user=>{
  const order = orders.find(order =>order.userId===user.id)
  if(order){
   return{
    ...order,
    ...user
   }
  }
})
console.log(result)
 
