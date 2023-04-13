const reverseSeq = n => {
    array = [];
        for(let i = n; i > 0; i--) {
            array.push(i);
        }
        return array;
    }

    

    function calculate(num1, operation, num2) {
        if(operation != "+" || operation != "-" || operation != "*" || operation != "/") {
        if(operation == "+") {
            return num1 + num2;
        } 
        if(operation == "-") {
            return num1 - num2;
        } 
        if(operation == "*") {
            return num1 * num2;
        } 
        if(operation == "/") {
            if(num2 == 0) {
                return null;
            }
            return num1 / num2;
        } 
        return null;
    }
       }

      

       function factorial(n){
        array = [];
        for(let i = 1; i <= n; i++) {
            array.push(i);
        }
        
        return array;
      }

      

      function drawStairs(n) {
        
      }

      function createPhoneNumber(numbers){
        let areaCode = numbers.slice(0, 3).join('');
        let firstPart = numbers.slice(3, 6).join('');
        let secondPart = numbers.slice(6).join('');
      
        return `(${areaCode}) ${firstPart}-${secondPart}`
      }

      

      function generateRange(min, max, step){
        array = [];
        for(let i = min; i <= max; i+= step) {
            array.push(i);
        }
        return array;
      }
    
      function countSheeps(arrayOfSheep) {
        let count = 0;
        for(let i = 0; i < arrayOfSheep.length; i++) {
            if(arrayOfSheep[i] == true) {
                count++;
            }
        }
        return count;
      }

      array = [true, true, true, false];
      

      function how_many_dalmatians(number) {
        let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];
        if (number <= 10) {
          return dogs[0];
          } else if(number <= 50){
          return dogs[1];
          } else if (number == 101) {
          return dogs[3];
          } else { 
            return dogs[2];
            }
      }

    

    reverse = function(array) {
        let result = [];
        for(let i = array.length ; i > 0 ; i--) {
            result[i] = array[i];
        }
        return result;
    }

    function createPhoneNumber(numbers){
        number <= 10 ? 
        dogs[0] : 
        (number <= 50 ? 
            dogs[1] : 
            (number == 101 ? dogs[3] : 
                dogs[2]));
    }

    function createPhoneNumber(numbers){
        let str = ``;
        for(let i = 0; i < numbers.length; i++) {
            str += numbers[i];
        }
        return str;
      }
      array = [1, 2, 3];
      console.log(createPhoneNumber(array));