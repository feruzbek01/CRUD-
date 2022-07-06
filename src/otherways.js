const array = [
  { id: 1, name: "Muhammadamin" },
  { id: 2, name: "Ali" },
  { id: 3, name: "John" },
  { id: 4, name: "Hithere" },
];

// let hi = array.map(value => {
//   if (value.id == 1) {
//       value.name = "hi";
//     return value
//   } else {
//     return value
//   }
// } )

// console.log(hi);



// const Edited = { id: 2, name: "Asror" };

// const ShowEdited = array.map((user) => {
//   if (user.id === Edited.id) {
//     return Edited;
//   } else {
//     return user;
//   }
// });

// console.log(ShowEdited);


let s = array.find(value => value.id === 3)

console.log(s);