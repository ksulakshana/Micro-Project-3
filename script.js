var number_btns = document.getElementsByClassName("number_btns");
var entereddigit = document.getElementById("entereddigit");
var hiddenvalue = document.getElementById("hiddenvalue");

var equals = document.getElementById("equals-btn");
var add = document.getElementById("add-btn");
var subtract = document.getElementById("subtract-btn");
var multiply = document.getElementById("multiply-btn");
var divide = document.getElementById("divide-btn");
var decimal = document.getElementById("decimal-btn");

var delete_last_char = document.getElementById("del-btn");
var reset_btn = document.getElementById("reset-btn");

var evaldata = 0;
var result = 0;

for (let i = 0; i < number_btns.length; i++) {
    var btn_value;
    var symbol;
    let pattern = /[0-9]/g;
    let notpattern = /[^0-9]/g;

    number_btns[i].addEventListener("click", function() {
        btn_value = number_btns[i].value;
        var hidval = document.getElementById("hiddenvalue").innerHTML;

        if(evaldata == '0' ){

            if(btn_value.match(pattern)){
                evaldata = btn_value;
            }
            
        }
        else if(evaldata != '0' && hidval != 0){

                if(btn_value.match(pattern)){
                    evaldata = btn_value;
                }
                else{
                    if(btn_value == 'add'){
                        symbol = '+';
                        evaldata += symbol;
                    }else if(btn_value == 'subtract'){
                        symbol = '-';
                        evaldata += symbol;
                    }else if(btn_value == 'multiply'){
                        symbol = '*';
                        evaldata += symbol;
                    }else if(btn_value == 'divide'){
                        symbol = '/';
                        evaldata += symbol;
                    }else if(btn_value == 'decimal'){
                        symbol = '.';
                        evaldata += symbol;
                    }
                }
                document.getElementById("hiddenvalue").innerHTML = 0;

            }
        else{
            
             if(btn_value == 'add'){
                symbol = '+';
                evaldata += symbol;
            }else if(btn_value == 'subtract'){
                symbol = '-';
                evaldata += symbol;
            }else if(btn_value == 'multiply'){
                symbol = '*';
                evaldata += symbol;
            }else if(btn_value == 'divide'){
                symbol = '/';
                evaldata += symbol;
            }else if(btn_value == 'decimal'){
                symbol = '.';
                evaldata += symbol;
            }else{
                evaldata += btn_value;
            }
        }

        document.getElementById("entereddigit").innerHTML = evaldata;
            
    });
}

equals.addEventListener("click", function() {

    var final_result = eval(evaldata);
    evaldata = final_result;
    var dec_place = 0;
    if(Number.isInteger(evaldata)){
        document.getElementById("entereddigit").innerHTML = final_result;
        document.getElementById("hiddenvalue").innerHTML = final_result;
    }
    else{
        dec_place = final_result.toString().split(".")[1].length;
        if(dec_place > 5){
            document.getElementById("entereddigit").innerHTML = final_result.toFixed(5);
            document.getElementById("hiddenvalue").innerHTML = final_result.toFixed(5);
        }else{
         document.getElementById("entereddigit").innerHTML = final_result.toFixed(dec_place);
         document.getElementById("hiddenvalue").innerHTML = final_result.toFixed(dec_place);
        }
    }
});

delete_last_char.addEventListener("click",function(){
    evaldata = document.getElementById("entereddigit").innerHTML ;
    evaldata = evaldata.slice(0, -1); 
    if(evaldata.length == 0){
        document.getElementById("entereddigit").innerHTML = 0;
    }else{
        document.getElementById("entereddigit").innerHTML = evaldata;
    }
});

reset_btn.addEventListener("click",function(){
    evaldata = "0";
    document.getElementById("entereddigit").innerHTML = evaldata; 
});