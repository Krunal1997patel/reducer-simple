// // Immutability - JS Types
// // Primitive Type - numbers, booleans, strings, null

// const num = 5;

// let num2 = num;

// num2 = 10;

// console.log(num, num2); // ==> ??\


// // Reference Types - Objects, arrays, functions, (?symbol)

// const myObj = { name: 'Dustin', age: 32 }

// const newObj = myObj;

// // newObj.name = "Dusty";

// // Old way - Object.assign
// const thirdObj = Object.assign({}, myObj, { 
//   name: "Dusty", 
//   favoritMovie: 'Star Wars' 
// });

// // New way ... spread
// const fourth = { 
//   // name: 'Dustin', 
//   // age: 32, 
//   ...myObj,
//   name: 'Dust Buster', 
//   favoritMovie: 'Avengers' 
// };

// console.log(myObj, newObj, thirdObj, fourth); // ==> ??

// const arr = [1,2,3,4,5];

// // const newArr = arr;

// // newArr.push(6);

// // old - .concat()
// const newArr = arr.concat();

// newArr.push(6);

// // new ... spread

// const coolArr = [...arr, 6];

// addItem = item => {
//   setItems([...items, item]);
// }

// console.log(arr, newArr, coolArr);


// Reducer
// 1. Pure function (no side effects)
// 2. take in 2 objects, "reduces" them down to a single object, then returns that new object (state!)
// 3. Helps us manage state in a predictable manner

// Actions
// objects with a required "type" property, and a optional "payload" (data, or whatever) property
// Describe to the reducer what event just occured, and how the reducer should update the state based on that event

let currentState = { make: "Chevy", model: "Corvette", year: 2020 };
const firstAction = { type: 'CHANGE_YEAR', payload: 2021 };


// in react, you don't write this yourself
const dispatch = action => {
  if (typeof action !== 'object') throw new Error()
  if (action.type === undefined) throw new Error()
  currentState = reducer(currentState, action);
}

// WE write reducers
const reducer = (state, action) => {
  // switch
  switch(action.type) {
    case "CHANGE_YEAR":
      return {
        ...state, 
        year: action.payload 
      }
    case "CHANGE_MODEL":
      return {
        ...state,
        model: action.payload
      }
    default:
      return state;
  }

  // if (action.type === "CHANGE_YEAR") {
  //   return {...state, year: action.payload }
  // } else if (action.type === "CHANGE_MODEL") {
  //   return {...state, model: action.payload}
  // } else if (action.type === "ADD_NEW_CAR") {
  //   return {...action.payload}
  // }  
}

// how I always start reducers:
// const reducer = (state, action) => {
//   switch(action.type) {
//     default:
//       return state
//   }
// }

// WE dispatch actions when some event occurs
dispatch(firstAction);
console.log(currentState);

dispatch({ type: 'CHANGE_MODEL', payload: 'Camaro' });
console.log(currentState);







