//------------------------------------------------------initialize var---------------------------------------------------------------
var currentRoom = 0;
var lastRoom = 0;
var secondlastRoom = 0;
var follow = false;
var followCountdown= 0;
var alive = true;
document.getElementById("restart").style.visibility = "hidden";
//------------------------------------------------------valid directions and actions---------------------------------------------------------------

const allowedDirections = ["north", "south", "east", "west"];
const allowedActions = ["move", "look", "kill"];

const north = {0:0, 1: 2, 2:0, 3:3, 4:4, 5:5, 6:5, 7:6, 8:8, 9:9};
const south = {0:2, 1:1, 2:1, 3:3, 4:4, 5:6, 6:7, 7:7, 8:8, 9:9};
const east = {0:0, 1:1, 2:3, 3:4, 4:5, 5:8, 6:7, 7:8, 8:9, 9:9};
const west = {0:0, 1:1, 2:2, 3:2, 4:3, 5:4, 6:6, 7:7, 8:5, 9:8};

const compass = {"north":north, "south":south, "east":east, "west":west};


//------------------------------------------------------discriptions---------------------------------------------------------------
//room descriptions
const description = {0 : "you are in a burning room, there are sparking wires everywhere",      
                    1 : "It looks like an engine room",
                    2 : "you are narrow hallway",
                    3 : "You are in the sleeping quarters.",
                    4 : "hallway, nothing special",
                    5 : "you are in a meeting room",
                    6 : "psssss, SCHHHHH, wwwwww, you are in an airlock.",
                    7 : "Looks like you are in a big storage room.",
                    8 : "a long hallway, the lights are not working.",
                    9 : "You are on the bridge of a spaceship"       };

//room directions
const Directions = {0 : "there is only one way to go(south)",
                    1 : "there is only one way to go(north)",
                    2 : "there are three ways to go(north, south, east)",
                    3 : "2 ways (east, west)",
                    4 : "2 ways (east, west)",
                    5 : "there are three ways to go(west, south, east)",
                    6 : "you can go (north, south).",
                    7 : "you can only go back (north).",
                    8 : "You can go(east, west).",
                    9 : "you can only go back ( west)."};

//room look around messages
const lookAround = {0: "it looks like something exploded here",
                    1: "The engine looks inactive. It is probebly connected to the first room.",
                    2: "It is a bit cramped in here. Also there are wires everywhere.",
                    3: "It looks like people left this room in a hurry. There is chaos everywhere.",
                    4: "It is a very boring room. There is nothing special here.",
                    5: "There are scratch marks on the meeting table. Doesn't look like anything a human could have done.",
                    6: "looks like an airlock, smells like an airlock, sounds like an airlock.",
                    7: "Many boxes are stacked here. Some of them are on the ground",
                    8: "looks creepy, can't see much.",
                    9: "there is blood on the controls, but there are no corpses."};

//follow messages
const followMessage = [
                    "it feels like something is watching you.",
                    "what was that sound?!",
                    "it feels like something is following you.",
                    "it looked like shadow moved in the room you came from",
                    "there are screaching sounds behind you, chills run down your spine",
                    "there is something right behind you"
                ];

//------------------------------------------------------Movement---------------------------------------------------------------
function move(currentRoom, direction){          //text movement
    secondlastRoom = lastRoom;
    lastRoom = currentRoom;
    var newRoom = compass[direction][currentRoom];
    return newRoom;
}

function moving(){
    deactivateButton();                                     //deactivate buttons
    secondlastRoom = lastRoom;
    lastRoom = currentRoom;
}

function moveNorth(){                    //move north
    moving();
    currentRoom = north[currentRoom];
    main();
}

function moveSouth(){                   //move south
    moving();
    currentRoom = south[currentRoom];
    main();
}

function moveEast(){                    //move east
    moving();
    currentRoom = east[currentRoom];
    main();
}

function moveWest(){                    //move west
    moving();
    currentRoom = west[currentRoom];
    main();
}

//------------------------------------------------------Actions---------------------------------------------------------------

function look(){
    document.getElementById("label3").innerHTML = lookAround[currentRoom];
    if(followCountdown > 5){
        alive = false;
        main();
    }
}

//------------------------------------------------------Button de/activate---------------------------------------------------------------

function deactivateButton()             //deactivate button
{
    document.getElementById("north").disabled = true;
    document.getElementById("south").disabled = true;
    document.getElementById("east").disabled = true;
    document.getElementById("west").disabled = true;
}

function reactivateButton()             //reactivate button
{
    document.getElementById("foo").innerHTML = "";
    document.getElementById("north").disabled = false;
    document.getElementById("south").disabled = false;
    document.getElementById("east").disabled = false;
    document.getElementById("west").disabled = false;

}

//----------------------------------------------- extra buttons----------------------------------------------------------------------

function hide(){
    var x = 1;
    follow = false;
    followCountdown=x;
    x++;
}

function restart()
{
    window.location.reload();
}

//------------------------------------------------------Main---------------------------------------------------------------

deactivateButton();
main();


function main()
{
    //clear input field and label 3
    document.getElementById("input").value = "";
    document.getElementById("label3").innerHTML = "";


    //getting text input and splitting it into array
    input = document.getElementById("input").value;
    var inputArray = input.split(" ");      //split input into array
    var action = inputArray[0];             //get action
    var direction = inputArray[1];          //get direction

    //check actions
    if(allowedActions.indexOf(action) == -1){
        if(!action == ""){
            document.getElementById("label3").innerHTML = "wtf do you want?";
        }
    }
    if(action == "move"){
        if(allowedDirections.indexOf(direction) == -1){
            document.getElementById("label3").innerHTML = "I don't understand where you want to go.";
        }
        else{
            currentRoom = move(currentRoom, direction);
        }
    }
    if(action == "look"){
        if(inputArray.length == 1){
            document.getElementById("label3").innerHTML = "You need to tell me what you want to take.";
        }
        else{
            look(currentRoom, inputArray[1]);
        }
    }
    if(action == "kill"){
        alive = false;
    }

    //output label 1 & 2
    document.getElementById("label1").innerHTML = description[currentRoom];
    document.getElementById("label2").innerHTML = Directions[currentRoom];


    //output label 3 / shadow following you
    if((follow == true) & (currentRoom != lastRoom)){
        document.getElementById("label3").innerHTML = followMessage[followCountdown];
        followCountdown++;
        if(followCountdown > 3 & currentRoom == secondlastRoom){
            alive = false;
        }
        if(followCountdown > 6){
            alive = false;
        }
    }

    //check to activate the shadow
    if(currentRoom == 9){
        follow = true;
        document.getElementById("hide").style.visibility = "visible";
    }

    //death message
    if(!alive){
        document.getElementById("label1").innerHTML = "--------------------------------";
        document.getElementById("label2").innerHTML = "You are dead. <br> You have been consumed by the shadows";
        document.getElementById("label3").innerHTML = "--------------------------------";
        document.getElementById("restart").style.visibility = "visible";
    }

    //deactivate buttons for 3 seconds
    var counter = 3;
    var output = document.getElementById('foo');
    var interval = setInterval(function() {
    if (counter == 0) {
        clearInterval(interval);
    }
    output.innerHTML = "" + counter;
    counter--;
    }, 750);
    setTimeout(reactivateButton, 3000);
}
