// //const $ = require("jQuery");
// let q = getQuery("q");
// //$("#results").append(q);

// function getQuery(name) {
//   let pairs = window.location.search.substring(1).split("&"); // q=%3Cscript%3Ealert%28%22XSS%22%29%3C%2Fscript%3E
//   let pair;
//   for (let index = 0; index < pairs.length; index++) {
//     pair = pairs[index].split("=");

//     if (decodeURIComponent(pair[0]) === name) {
//       return decodeURIComponent(pair[1]);
//     }
//   }

//   return false;
// }
// module.exports = { getQuery };
