let n1, n2, res;

function add()
{
    n1 = parseFloat(document.getElementById("fn").value);
    n2 = parseFloat(document.getElementById("sn").value);

    if(n1 && n2)
    {
        res = n1 + n2;
        document.getElementById("ans").value = res;
    }
}
function minus()
{
    n1 = parseFloat(document.getElementById("fn").value);
    n2 = parseFloat(document.getElementById("sn").value);

    if(n1 && n2)
    {
        res = n1 - n2;
        document.getElementById("ans").value = res;
    }
}
function mul()
{
    n1 = parseFloat(document.getElementById("fn").value);
    n2 = parseFloat(document.getElementById("sn").value);

    if(n1 && n2)
    {
        res = n1 * n2;
        document.getElementById("ans").value = res;
    }
}
function div()
{
    n1 = parseFloat(document.getElementById("fn").value);
    n2 = parseFloat(document.getElementById("sn").value);

    if(n1 && n2)
    {
        res = n1/n2;
        document.getElementById("ans").value = res;
    }
}
function daynknight(){
    // document.body.style.backgroundColor="rgb(246,248,250)";
    document.body.style.backgroundColor="silver";
    document.getElementById('c').style.color="black";
}
function knight(){
    document.body.style.backgroundColor="rgba(1,1,1,0.9)";
    document.getElementById('c').style.color="white";
}
