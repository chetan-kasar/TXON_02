var cal = 0;
var op;
var no1;
var no2;
var no = "";
var result;

for(var i = 0; i <= 9; i++)
{
    document.getElementById(i).addEventListener("click" , function(event){
        fun(event.target.id);
    });
}

document.getElementById("+").addEventListener("click" , function(event){
    fun(event.target.id);
});

document.getElementById("-").addEventListener("click" , function(event){
    fun(event.target.id);
});

document.getElementById("*").addEventListener("click" , function(event){
    fun(event.target.id);
});

document.getElementById("/").addEventListener("click" , function(event){
    fun(event.target.id);
});

document.getElementById("%").addEventListener("click" , function(event){
    fun(event.target.id);
});

document.getElementById(".").addEventListener("click" , function(event){
    fun(event.target.id);
});

document.getElementById("=").addEventListener("click" , function(event){
    no2 = Number(no);
    arith(op);
});

function fun(btn)
{
    if(btn === "+" || btn === "-" || btn === "*" || btn === "/" || btn === "%")
    {
        op = btn;
        no1 = Number(no);
        no = "";
        document.getElementById("inner-text").innerHTML = op;
    }
    else
    {
        Num5(btn);
    }

}

function operation(ope)
{
    document.getElementById("inner-text").innerHTML = no;
    this.op = ope
}

function Num5(n)
{
    no = no.concat(n);
    document.getElementById("inner-text").innerHTML = no;
}

function arith(op1)
{
    switch(op1)
    {
        case "+":
            result = Number(no1) + Number(no2);
            document.getElementById("inner-text").innerHTML = result;
        break;

        case "-":
            result = Number(no1) - Number(no2);
            document.getElementById("inner-text").innerHTML = result;
        break;

        case "*":
            result = Number(no1) * Number(no2);
            document.getElementById("inner-text").innerHTML = result;
        break;

        case "/":
            result = Number(no1) / Number(no2);
            document.getElementById("inner-text").innerHTML = result;
        break;

        case "%":
            result = Number(no1) % Number(no2);
            document.getElementById("inner-text").innerHTML = result;
        break;

        default:
            alert();
    }
}

document.getElementById("C").addEventListener("click" , function(){
    location.reload();
});