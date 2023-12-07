//CalGoal would be equal to whatever caloric intake is set for the user once they make their account
var calGoal= 2000;
function calculateC() {
    //Gets the user inputted value from the 'calories' id
    var cal = document.getElementById('calories').value;
    var cals = calGoal-cal;
    //changes 'alertC' to the cals variable and displays it to the user
    document.getElementById('alertC').innerHTML = 'You have ' + cals + ' calories left to eat';
}

//Protein Goal would be equal to whatever protein goal is calculated when the user creates their account
var proGoal= 150;
function calculateP() {
    //Gets the user inputted value from the 'proteins' id
    var pros = document.getElementById('proteins').value;
    var p = proGoal-pros;
    //changes 'alertP' to the p variable and displays it to the user
    document.getElementById('alertP').innerHTML = 'You have ' + p + ' g of protein left to eat';
}

