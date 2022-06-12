var list = {a:"", b:"", c:"", d:"", e:"", f:"", g:"", h:"", i:""};

var xOrO = "X";

function goon() {
    if ( xOrO == "X" ) {
        xOrO = "O";
    }
    else {
        xOrO = "X";
    }
}

function set(position){
    if(list[position] == "X" || list[position] == "O"){
        alert("This position is already taken!");
    }
    if ( list[position] == "" ) {
        list[position] = xOrO;
        aa = xOrO;
        document.getElementById(position).innerHTML = xOrO;
        goon();
    }

    document.getElementById("matrix").innerHTML = "Now: " + xOrO;
    checkForWin();
}

function checkForWin()
{   
    if(list.a, list.b, list.c == "X" ||
        list.d, list.e, list.f == "X" ||
        list.g, list.h, list.i == "X" ||
        list.a, list.d, list.g == "X" ||
        list.b, list.e, list.h == "X" ||
        list.c, list.f, list.i == "X" ||
        list.a, list.e, list.i == "X" ||
        list.c, list.e, list.g == "X" ) {

        document.getElementById("matrix").innerHTML = "X wins!";
        freeze();
    }
    if(list.a, list.b, list.c == "O" ||
        list.d, list.e, list.f == "O" ||
        list.g, list.h, list.i == "O" ||
        list.a, list.d, list.g == "O" ||
        list.b, list.e, list.h == "O" ||
        list.c, list.f, list.i == "O" ||
        list.a, list.e, list.i == "O" ||
        list.c, list.e, list.g == "O" ) {

        document.getElementById("matrix").innerHTML = "O wins!";
        freeze();
    }

}

function freeze()
{
    for (let i = 0; i < list.length; i++) {
        list[i] = "rawr";
    }

}