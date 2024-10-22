
function homePlusOne()
{
    let val = parseInt(document.getElementById("HomeValue").textContent);
    let res = val + 1;
    document.getElementById("HomeValue").textContent = res;
}

function homePlusTwo()
{
    let val = parseInt(document.getElementById("HomeValue").textContent);
    let res = val + 2;
    document.getElementById("HomeValue").textContent = res;
}

function homePlusThree()
{
    let val = parseInt(document.getElementById("HomeValue").textContent);
    let res = val + 3;
    document.getElementById("HomeValue").textContent = res;
}

function homeReset()
{
    document.getElementById("HomeValue").textContent = 0;
}

function awayPlusOne()
{
    let val = parseInt(document.getElementById("AwayValue").textContent);
    let res = val + 1;
    document.getElementById("AwayValue").textContent = res;
}

function awayPlusTwo()
{
    let val = parseInt(document.getElementById("AwayValue").textContent);
    let res = val + 2;
    document.getElementById("AwayValue").textContent = res;
}

function awayPlusThree()
{
    let val = parseInt(document.getElementById("AwayValue").textContent);
    let res = val + 3;
    document.getElementById("AwayValue").textContent = res;
}

function awayReset()
{
    document.getElementById("AwayValue").textContent = 0;
}
