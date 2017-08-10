var result = 0;
$("div#number").on('click', function(){
  $('.number-viewer').children('p').text( $('.number-viewer').children('p').text() + $(this).children('p').text());
});

$("div#operator").on('click', function(){
  $('.number-viewer').children('p').text( $('.number-viewer').children('p').text() + $(this).children('p').text());
});
var tempRes;
$('div#equal').on('click', function(){
  numArr = [];
  numArr.push($('div.number-viewer').children('p').text());
  var operators = numArr[0].split(new RegExp(/\d+/gi));
  var numbers = numArr[0].split(new RegExp(/\W+/gi));
  var operators = operators.filter(function(a,b){
    return a != "";
  });
  for(var i = 0; i < numbers.length; i++){
    
    if(i < 1){
        tempRes = 0;
        console.log("Started loop");
        if(operators[i] == '*'){
          tempRes = Number(numbers[i]) * Number(numbers[i+1]);
        }else if(operators[i] == '/'){
          tempRes = Number(numbers[i]) / Number(numbers[i+1]);
        }else if(operators[i] == '+'){
          tempRes = Number(numbers[i]) + Number(numbers[i+1]);
        }else if(operators[i] == '-'){
          tempRes = Number(numbers[i]) - Number(numbers[i+1]);
        } 
    }else{

        if(operators[i] == '*'){
          tempRes *= Number(numbers[i+1]);
        }else if(operators[i] == '/'){
          tempRes = tempRes / Number(numbers[i + 1]);
        }else if(operators[i] == '+'){
          console.log("It´s adding again, and again");
          tempRes += Number(numbers[i+1]);
        }else if(operators[i] == '-'){
          tempRes -= Number(numbers[i+1]);
        } 
   
        if(operators[i] == null || numbers[i+1] == null){
          result = tempRes;
          console.log("Ended this shit", tempRes, result);
           $('div.number-viewer').children('p').text(result);
          console.log(operators, numbers);
          return result;
        }
    }
  }
});

$('div#powerOfTwo').on('click', function(){
  var powerNumber = Number($('div.number-viewer').children('p').text());
  powerNumber = Math.pow(powerNumber, 2);
  result = powerNumber;
  $('div.number-viewer').children('p').text(result.toString());
});

$('div#delete').on('click', function(){
  result = 0;
  $('div.number-viewer').children('p').text(result.toString());
});