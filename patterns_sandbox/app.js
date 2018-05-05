// function () {
//   // private

//   return {
//     // public

//   }
// }();

// STANDARD MODULE PATTERN
// const UICtrl = (function() {
//   let text = 'Hello World';

//   const changeText = function () {
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }

//   return{
//     callChangeText : function () {
//       changeText();
//       console.log(text);
//     }

//   }

// })();

// UICtrl.callChangeText();

// REVEALING MODULE PATTERN

const ItemCtrl = (function () {
  let _data = [];

  function add(item) {
    _data.push(item);
    console.log('Item added');
  }

  function get(id) {
    return _data.find(item => {
      return item.id === id;
    })
  }

  return {
    add: add,
    get: get
  }


})();

ItemCtrl.add({id: 1, name: 'John'});
ItemCtrl.add({id: 2, name: 'Mark'});