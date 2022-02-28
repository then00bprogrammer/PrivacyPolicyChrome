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
