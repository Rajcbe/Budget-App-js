var budgetController = (function () {

})();
var UIController = (function () {
    var DOMStrings={
        input:'.add__type',
        description:'.add__description',
        value:'.add__value',
        buttons:'.add__btn'
    };
return{
    getInput:function () {
        return {
            type:document.querySelector(DOMStrings.input).value,
            description:document.querySelector(DOMStrings.description).value,
            value:document.querySelector(DOMStrings.value).value
    };
    },
    getDOMstrings:function () {
        return DOMStrings;
    },

};

})();
var Controller = (function (budgetCtrl,uiCtrl) {
    var DOM=uiCtrl.getDOMstrings();
    var addItem=function(){
        var input=uiCtrl.getInput();
        console.log(input);
    }
    document.querySelector(DOM.buttons).addEventListener('click',addItem);
    document.addEventListener('keypress',function (event) {
        if(event.keyCode ===13 || event.which === 13){
            addItem();
        }
    })
})(budgetController,UIController);