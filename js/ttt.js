var list = {a:"", b:"", c:"", d:"", e:"", f:"", g:"", h:"", i:""};
var win;
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
        win = checkForWin();
        freeze();
    }
    else if(!win) document.getElementById("matrix").innerHTML = "Now: " + xOrO;
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
    else if(
        list.a != "" &&
        list.b != "" &&
        list.c != "" &&
        list.d != "" &&
        list.e != "" &&
        list.f != "" &&
        list.g != "" &&
        list.h != "" &&
        list.i != ""){
            
            document.getElementById("matrix").innerHTML = "Draw!";
            return true;
        }
    return false;

}

function freeze(){
    list = {a:"y", b:"y", c:"y", d:"y", e:"y", f:"y", g:"y", h:"y", i:"y"};
}

function restart()
{
    window.location.reload();
}