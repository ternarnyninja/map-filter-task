// // Реализация native map

// Array.prototype.map = function(callback) {
//   let resultArr = new Array(this.length);
//   for(let i = 0;i < this.length;i++) {
//     resultArr[i] = callback(this[i], i, this);
//   }

//   return resultArr;
// }

// // Реализация native filter 

// Array.prototype.filter = function(callback, context) {
//   let resultArr = [];
//   for(let i = 0;i < this.length;i++) {
//     if (callback.call(context,this[i], i, this)) {
//         resultArr.push(this[i])
//     }
//   }

//   return resultArr;
// }

// // Задача с codewars Spread number

// Number.prototype[Symbol.iterator] = function() {
//   let i = 1
//   return {    
//     next: () => {
//       return {
//         done: (i <= this) ? false : true,
//         value: i++
//       }
//     }
//   }
// }

// // Задача с codewars с треда

// function firstNonRepeatingLetter(s) {
//     let str = s.toLowerCase();
//     for(let i = 0;i < str.length;i++) {
//       if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
//         return s[i];
//       }
//     }
//     return "";
// }

// // Похожая задача с codewars 

// function duplicateEncode(word){
//     word = word.toLowerCase();
//     let unique = "";
//     for(let i = 0;i < word.length;i++){
//       if(word.lastIndexOf(word[i]) === word.indexOf(word[i])){
//        unique += "(";
//      } else {
//        unique += ")";
//      }
//   }
//   return unique;
// }