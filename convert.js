lenghts = {"mm" : 1, "cm" : 10, "m" : 1000};
weights = {"kg" : 1000, "g" : 1};

var num = process.argv[2];
var from = process.argv[3]
var conjunction = process.argv[4];
var to = process.argv[5];

var toManyArgs = process.argv.length != 6;
var noNumberGiven = isNaN(num);
var wrongKonjunction = conjunction != "to";
var notSameUnit = (!(lenghts[from] && lenghts[to])) && !(weights[from] && weights[to])

var isLenghts = lenghts[from];

if(toManyArgs || noNumberGiven || wrongKonjunction || notSameUnit){
    console.log("Invalid parameters");
}else{
    if(isLenghts){
        console.log(num + " " +from + " are " + num * (lenghts[from] / lenghts[to]) + " " + to)
    }else{
        console.log(num + " " +from + " are " + num * (weights[from] / weights[to]) + " " + to)
    }
}

/*
Why did i comment out my 6 lines solution and not the long version?

Because in my opinion its very very important to have a readable code,
which somebody can understand and use without my help so it doesnt make
very much sense to me to write a such short but unreadable version of my code
I did write the 6 lines solution, because of my developer ambition ;)

lenghts = {"mm" : 1, "cm" : 10, "m" : 1000};
weights = {"kg" : 1000, "g" : 1};
if(process.argv.length != 6 || isNaN(process.argv[2]) || process.argv[4] != "to"  ||  (!(lenghts[process.argv[3]] && lenghts[process.argv[5]])) && !(weights[process.argv[3]] && weights[process.argv[5]]) )
    console.log("Invalid parameters");   
else 
    lenghts[process.argv[3]] ? console.log(process.argv[2] + " " + process.argv[3] + " are " + (process.argv[2] * (lenghts[process.argv[3]]) / lenghts[process.argv[5]]) + " " + process.argv[5]) : console.log(process.argv[2] + " " + process.argv[3] + " are " + (process.argv[2] * (weights[process.argv[3]]) / weights[process.argv[5]]) + " " + process.argv[5]);
*/