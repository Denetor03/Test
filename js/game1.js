var currentRoom = 0;
var lastRoom = 0;
var follow = false;

const allowedDirections = ["north", "south", "east", "west"];
const allowedActions = ["move", "look", "drop", "examine", "help"];

const north = {0:0, 1: 2, 2:0, 3:3, 4:4, 5:5, 6:5, 7:6, 8:8, 9:9};
const south = {0:2, 1:1, 2:1, 3:3, 4:4, 5:6, 6:7, 7:7, 8:8, 9:9};
const east = {0:0, 1:1, 2:3, 3:4, 4:5, 5:8, 6:7, 7:8, 8:9, 9:9};
const west = {0:0, 1:1, 2:2, 3:2, 4:3, 5:4, 6:6, 7:7, 8:5, 9:8};

const compass = {"north":north, "south":south, "east":east, "west":west};

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

const lookAround = {0: "it looks like something exploded here",
                    1: "The engine looks inactive. It is probebly connected to the first room.",
                    2: "It is a bit craped in here. Also there are wires everywhere.",
                    3: "It looks like people left this room in a hurry. There is chaos everywhere.",
                    4: "It is a very boring room. There is nothing special here.",
                    5: "There are scratch marks on the meeting table. Doesn't look like anything a human could have done.",
                    6: "looks like an airlock, smells like an airlock, sounds like an airlock.",
                    7: "Many boxes are stacked here. Some of them are on the ground",
                    8: "looks creepy, can't see much.",
                    9: "there is blood on the controls, but there are no corpses."};
    
const followMessage = [
                    "it feels like something is watching you.",
                    "what was that sound?!",
                    "it feels like something is following you.",

                        ];

main();
function main()
{
    document.getElementById("label3").innerHTML = "";
    input = getInput();
    document.getElementById("input").value = "";
    var inputArray = input.split(" ");
    var action = inputArray[0];
    var direction = inputArray[1];
    if(allowedActions.indexOf(action) == -1){
        if(!action == ""){
            document.getElementById("label3").innerHTML = "wtf do you want?";
        }
        
    }
    else if(action == "move"){
        if(allowedDirections.indexOf(direction) == -1){
            document.getElementById("label3").innerHTML = "I don't understand where you want to go.";
        }
        else{
            currentRoom = move(currentRoom, direction);
        }
    }
    else if(action == "look"){
        if(inputArray.length == 1){
            document.getElementById("label3").innerHTML = "You need to tell me what you want to take.";
        }
        else{
            look(currentRoom, inputArray[1]);
        }
    }
    /*else if(action == "examine"){
        if(inputArray.length == 1){
            console.log("You need to tell me what you want to examine.");
        }
        else{
            examine(currentRoom, inputArray[1]);
        }
    }
    else if(action == "help"){
        help();
    }*/

    document.getElementById("label1").innerHTML = description[currentRoom];
    document.getElementById("label2").innerHTML = Directions[currentRoom];
}

function getInput(){
    return document.getElementById("input").value;
}

function move(currentRoom, direction){
    var newRoom = compass[direction][currentRoom];
    return newRoom;
}

function moveNorth(){
    currentRoom = north[currentRoom];
    main();
}
function moveSouth(){
    currentRoom = south[currentRoom];
    main();
}
function moveEast(){
    currentRoom = east[currentRoom];
    main();
}
function moveWest(){
    currentRoom = west[currentRoom];
    main();
}
function look(){
    document.getElementById("label3").innerHTML = lookAround[currentRoom];
}