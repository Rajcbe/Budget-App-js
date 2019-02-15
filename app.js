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

    var setupEventListener=function () {
        var DOM=uiCtrl.getDOMstrings();
            document.querySelector(DOM.buttons).addEventListener('click',addItem);
            document.addEventListener('keypress',function (event) {
            if(event.keyCode ===13 || event.which === 13){
                addItem();
            }
        });
    };

    var addItem=function(){
        var input=uiCtrl.getInput();
        console.log(input);
    };
    return{
        init:function () {
            setupEventListener();
        }
    };

})(budgetController,UIController);
Controller.init();