var snackbar = (function(){

    var obj = {};

    // Reference to the name of a function that will be executed by the button
    obj.setCallback = function(callbackFunction){
        obj.callback = callbackFunction;
    }

    obj.show = function(message, button){

        var check = document.querySelector('.snackbar.show');

        if (!check){

            var div = document.getElementsByClassName('snackbar');
            var text = document.querySelector('.snackbar p');

            // If you have a button set
            if (button){
                var buttonNew = document.createElement('button');

                // Button properties
                buttonNew.id = button.id;
                buttonNew.innerText = button.title;
                buttonNew.addEventListener('click', obj.callback);

                div[0].appendChild(buttonNew);
            }

            // Places a size class according to the size of the string
            if (message.length > 28){
                if (message.length <= 35){
                    div[0].className += " snackbar-md";
                }else{
                    div[0].className += " snackbar-lg";
                }
            }

            div[0].className += " show";
            text.innerHTML = message;
        }
    };

    obj.hide = function(time){

        var div = document.querySelector('.snackbar.show');

        if (div){
            var text = document.querySelector('.snackbar p');
            div.className += " hide";

            setTimeout(function(){
                div.className = "snackbar";
                text.innerHTML = "";
                div.innerHTML = "<p></p>";
            }, 300);
        }
    };

    obj.timer = function(message, miliseconds, button){

        var div = document.getElementsByClassName('snackbar');

        obj.show(message, button);

        setTimeout(function() {
            obj.hide(miliseconds);
        }, miliseconds);
    };

    return obj;

})();