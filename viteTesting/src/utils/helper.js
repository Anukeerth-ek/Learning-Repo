// export const subtract = (num1, num2) => {
//      if (typeof num1 !== "number" || typeof num2 !== "number") {
//           return 0;
//      }
//      return num1 - num2;
// };

// export function reverseString(sentence) {
//      if (typeof sentence !== "string") return "none";
//      return sentence.split("").reverse().join("");
// }

// export const USER_POST_API_URL = "https://api.com/user/posts"

// export const COMPANIES = ["GOOGLE", "META", "MICROSOFT", "APPLE"];

// export const postDetails = {
//     category: 'Technology',
//     views: 24000
// };

// export const fetchUserDetails = async() => {
//     const data = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()).then(data => data)
//     return data
// }

export const isAuthenticate = (status = false) => {
     if (status === true) {
          return "Hello world!";
     }

     throw new Error("There is some issue");
};
