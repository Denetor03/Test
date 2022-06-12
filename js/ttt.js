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


    if(checkForWin()){
        freeze();
    }
    else{
        document.getElementById("matrix").innerHTML = "Now: " + xOrO;
    }
}

function checkForWin()
{
    if( (list.a == "X" && list.b == "X"  && list.c == "X") ||
        (list.d == "X" && list.e == "X"  && list.f == "X") ||
        (list.g == "X" && list.h == "X"  && list.i == "X") ||
        (list.a == "X" && list.d == "X"  && list.g == "X") ||
        (list.b == "X" && list.e == "X"  && list.h == "X") ||
        (list.c == "X" && list.f == "X"  && list.i == "X") ||
        (list.a == "X" && list.e == "X"  && list.i == "X") ||
        (list.c == "X" && list.e == "X"  && list.g == "X") ) {

        document.getElementById("matrix").innerHTML = "X wins!";
        return true;
    }
    else if( (list.a == "O" && list.b == "O"  && list.c == "O") ||
        (list.d == "O" && list.e == "O"  && list.f == "O") ||
        (list.g == "O" && list.h == "O"  && list.i == "O") ||
        (list.a == "O" && list.d == "O"  && list.g == "O") ||
        (list.b == "O" && list.e == "O"  && list.h == "O") ||
        (list.c == "O" && list.f == "O"  && list.i == "O") ||
        (list.a == "O" && list.e == "O"  && list.i == "O") ||
        (list.c == "O" && list.e == "O"  && list.g == "O") ) {

        document.getElementById("matrix").innerHTML = "O wins!";
        return true;
    }
    else{
        return false;
    }

}

function freeze()
{
    list["a"] = "rawr";
    list["b"] = "rawr";
    list["c"] = "rawr";
    list["d"] = "rawr";
    list["e"] = "rawr";
    list["f"] = "rawr";
    list["g"] = "rawr";
    list["h"] = "rawr";
    list["i"] = "rawr";
}