function processEntry(){const userinput=document.getElementById("incomeinput")CSSMathValue;
const income = parseFloat(userInput);
if (isNaN(income)||income<=0){alert("Please enter a valid income greater than zero.");
    error message}else{const tax=calculateTax(income);
        document.getElementById("taxOutput").value=tax.toFixed(2);}
        document.getElementById("incomeInput").focus();
}
function calculateTax(income){let tax=0;
    if(income<=9875){tax=income*0.10;
        10% for the first bracket}else if (income <=40125){tax=987.50+(income-9875)*0.12;
       12% for the second bracket }else if(income<=85525){tax=4617.50(income-40125)*0.22;
        22% for the third bracket }else if(income<=163300){tax=14605.50+(income-85525)*0.24;
        24% for the fourth bracket }else if(income<=207350){tax=33271.50+(income-163300)*0.32;
        32% for the fifth bracket }else if(income<=518400){tax=147367.50+(income-207350)*0.35;
        35% for the sixth bracket }else {tax=156235+(income-518400)*0.37;
        37% for the highest bracket }return parseFloat(tax.toFixed(2));
    document.addEventListener("DOMContentLoaded",)=>
    {document.getElementById("calculateButton").addEventListener("click",processEntry);};
    }

        
        