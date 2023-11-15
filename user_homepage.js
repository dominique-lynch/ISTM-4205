var calGoal= 2000;
function calculateC() {
    var cal = document.getElementById('calories').value;
    var cals = calGoal-cal;
    document.getElementById('alertC').innerHTML = 'You have ' + cals + ' calories left to eat';
}

var proGoal= 150;
function calculateP() {
    var pros = document.getElementById('proteins').value;
    var p = proGoal-pros;
    document.getElementById('alertP').innerHTML = 'You have ' + p + ' g of protein left to eat';
}

