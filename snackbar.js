var snackbar = (function(){

    var obj = {};

    obj.show = function(message){
        var div = document.getElementsByClassName('snackbar');
        div[0].className = "snackbar";
        div[0].className += " show";
        div[0].innerHTML = message;
    };

    obj.hide = function(){
        var div = document.getElementsByClassName('snackbar');
        div[0].className = "snackbar hide";
        div[0].innerHTML = "";
    };

    obj.timer = function(message, miliseconds){

        obj.show(message);

        setTimeout(function() {
            obj.hide();
        }, miliseconds);
    };

    return obj;

})();