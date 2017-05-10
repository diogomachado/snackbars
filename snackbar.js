var snackbar = (function(){

    var obj = {};

    obj.show = function(message, button){

        var div = document.getElementsByClassName('snackbar');
        var text = document.querySelector('.snackbar p');

        if (button){
            var buttonNew = document.createElement('button');
            buttonNew.id = button.id;
            buttonNew.innerText = button.title;
            div[0].appendChild(buttonNew);
        }

        div[0].className = "snackbar";
        div[0].className += " show";
        text.innerHTML = message;
    };

    obj.hide = function(){
        var div = document.getElementsByClassName('snackbar');
        var text = document.querySelector('.snackbar p');
        div[0].className = "snackbar hide";
        text.innerHTML = "";
    };

    obj.timer = function(message, miliseconds, button){

        var button = {};
        button.title = "Voltar";
        button.id = "btn_voltar";

        obj.show(message, button);

        setTimeout(function() {
            obj.hide();
        }, miliseconds);
    };

    return obj;

})();