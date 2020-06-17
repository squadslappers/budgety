const budgetController = (function(){
  // some code
})();





const userInterfaceController = (function(){

  let DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  }

  return {
    getInput: function(){
      return {
        type: document.querySelector(DOMstrings.inputType).value, // Will either be 'inc' or 'exp'
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      }
    },
    getDOMstrings: function(){
      return DOMstrings;
    }
  }

})();





const controller = (function(budgetCtrl, UICtrl){

  let DOM = UICtrl.getDOMstrings();

  const ctrlAddItem = function () {
    // 1. Get the field input data.
    var input = UICtrl.getInput();
    console.log(input)
    // 2. Add the item to the budget controller.
    // 3. Add the item to the UI.
    // 4. Calculate the budget.
    // 5. Display the budget.
  }
  document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

  document.addEventListener('keypress', function(event){

    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }


  })
})(budgetController, userInterfaceController);