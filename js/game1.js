var currentRoom = 0;
var lastRoom = 0;
var secondlastRoom = 0;
var follow = false;
var followCountdown= 0;
var alive = true;
document.getElementById("hide").style.visibility = "hidden";

const allowedDirections = ["north", "south", "east", "west"];           //list to check for valid directions
const allowedActions = ["move", "look"];                                // " for actions

const north = {0:0, 1: 2, 2:0, 3:3, 4:4, 5:5, 6:5, 7:6, 8:8, 9:9};      //matrix for room connections direction {this room:to this room}
const south = {0:2, 1:1, 2:1, 3:3, 4:4, 5:6, 6:7, 7:7, 8:8, 9:9};
const east = {0:0, 1:1, 2:3, 3:4, 4:5, 5:8, 6:7, 7:8, 8:9, 9:9};
const west = {0:0, 1:1, 2:2, 3:2, 4:3, 5:4, 6:6, 7:7, 8:5, 9:8};

const compass = {"north":north, "south":south, "east":east, "west":west};

const description = {0 : "you are in a burning room, there are sparking wires everywhere",      //room descriptions
                    1 : "It looks like an engine room",
                    2 : "you are narrow hallway",
                    3 : "You are in the sleeping quarters.",
                    4 : "hallway, nothing special",
                    5 : "you are in a meeting room",
                    6 : "psssss, SCHHHHH, wwwwww, you are in an airlock.",
                    7 : "Looks like you are in a big storage room.",
                    8 : "a long hallway, the lights are not working.",
                    9 : "You are on the bridge of a spaceship"       };

const Directions = {0 : "there is only one way to go(south)",                   //room directions
                    1 : "there is only one way to go(north)",
                    2 : "there are three ways to go(north, south, east)",
                    3 : "2 ways (east, west)",
                    4 : "2 ways (east, west)",
                    5 : "there are three ways to go(west, south, east)",
                    6 : "you can go (north, south).",
                    7 : "you can only go back (north).",
                    8 : "You can go(east, west).",
                    9 : "you can only go back ( west)."};

const lookAround = {0: "it looks like something exploded here",                                         //room look around messages
                    1: "The engine looks inactive. It is probebly connected to the first room.",
                    2: "It is a bit cramped in here. Also there are wires everywhere.",
                    3: "It looks like people left this room in a hurry. There is chaos everywhere.",
                    4: "It is a very boring room. There is nothing special here.",
                    5: "There are scratch marks on the meeting table. Doesn't look like anything a human could have done.",
                    6: "looks like an airlock, smells like an airlock, sounds like an airlock.",
                    7: "Many boxes are stacked here. Some of them are on the ground",
                    8: "looks creepy, can't see much.",
                    9: "there is blood on the controls, but there are no corpses."};
    
const followMessage = [
                    "it feels like something is watching you.",                 //follow messages
                    "what was that sound?!",
                    "it feels like something is following you.",
                    "it looked like shadow moved in the room you came from",
                    "there are screaching sounds behind you, chills run down your spine",
                    "there is something right behind you"
                ];

main();
function main()
{
    input = getInput();
    document.getElementById("input").value = "";    //clear input field
    document.getElementById("label3").innerHTML = "";


    var inputArray = input.split(" ");      //split input into array
    var action = inputArray[0];             //get action
    var direction = inputArray[1];          //get direction
    if(allowedActions.indexOf(action) == -1){       //check if action is valid
        if(!action == ""){
            document.getElementById("label3").innerHTML = "wtf do you want?";
        }
        
    }
    else if(action == "move"){              //check if action is move
        if(allowedDirections.indexOf(direction) == -1){
            document.getElementById("label3").innerHTML = "I don't understand where you want to go.";
        }
        else{
            currentRoom = move(currentRoom, direction);
        }
    }
    else if(action == "look"){              //check if action is look
        if(inputArray.length == 1){
            document.getElementById("label3").innerHTML = "You need to tell me what you want to take.";
        }
        else{
            look(currentRoom, inputArray[1]);
        }
    }


    document.getElementById("label1").innerHTML = description[currentRoom];         //display room description
    document.getElementById("label2").innerHTML = Directions[currentRoom];          //display room directions

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

    if(currentRoom == 9){
        follow = true;
        document.getElementById("hide").style.visibility = "visible";
    }

    if(!alive){                                                     //check if player is alive
        document.getElementById("label1").innerHTML = "-------------------------------------------------";
        document.getElementById("label2").innerHTML = "You are dead.";
        document.getElementById("label3").innerHTML = "------You have been consumed by the shadows------";
    }


    setTimeout(reactivateButton, 3000);         //reactivate button after 5 seconds
}

function getInput(){                                
    return document.getElementById("input").value;
}

function move(currentRoom, direction){
    lastRoom = currentRoom;
    var newRoom = compass[direction][currentRoom];
    return newRoom;
}

function moveNorth(){                    //move north
    deactivateButton();                                     //deactivate buttons
    secondlastRoom = lastRoom;
    lastRoom = currentRoom;
    currentRoom = north[currentRoom];
    main();                                                 //call main function
}
function moveSouth(){                   //move south
    deactivateButton();
    secondlastRoom = lastRoom;
    lastRoom = currentRoom;
    currentRoom = south[currentRoom];
    main();
}
function moveEast(){                    //move east
    deactivateButton();
    secondlastRoom = lastRoom;
    lastRoom = currentRoom;
    currentRoom = east[currentRoom];
    main();
}
function moveWest(){                    //move west
    deactivateButton();
    secondlastRoom = lastRoom;
    lastRoom = currentRoom;
    currentRoom = west[currentRoom];
    main();
}

function look(){
    document.getElementById("label3").innerHTML = lookAround[currentRoom];
    if(followCountdown > 5){
        alive = false;
        main();
    }
}

function deactivateButton()             //deactivate button 
{
    document.getElementById("north").disabled = true;
    document.getElementById("south").disabled = true;
    document.getElementById("east").disabled = true;
    document.getElementById("west").disabled = true;
}

function reactivateButton()             //reactivate button
{
    document.getElementById("north").disabled = false;
    document.getElementById("south").disabled = false;
    document.getElementById("east").disabled = false;
    document.getElementById("west").disabled = false;

}

function hide(){
    var x = 1;
    follow = false;
    followCountdown=x;
    x++;
}