$(document).ready(function(){
    setInterval(function(){
        $('.words-wrapper').css({"width":"113px"});
    },2000);
    setInterval(function(){
        $('.words-wrapper').css({"width":"0px"});
    },4000);

    var text = ['Love','Lead'];
    var counter = 0;
    var int = setInterval(change,4500);
    function change() {
        $('.words-wrapper').text(text[counter]);
        counter++;
        if(counter>=text.length) {
            counter = 0;
        }
    }
})
