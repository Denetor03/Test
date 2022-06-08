const allowedDirections = ["north", "south", "east", "west"];
const allowedActions = ["move", "take", "drop", "examine", "help"];
var currentRoom = 0;




const north = {0:0, 1: 2, 2:0, 3:3, 4:4, 5:5, 6:5, 7:6, 8:8, 9:9};
const south = {0:2, 1:1, 2:1, 3:3, 4:4, 5:6, 6:7, 7:7, 8:8, 9:9};
const east = {0:0, 1:1, 2:3, 3:4, 4:5, 5:8, 6:7, 7:8, 8:9, 9:9};
const west = {0:0, 1:1, 2:2, 3:2, 4:3, 5:4, 6:6, 7:7, 8:5, 9:8};
const compass = {"north":north, "south":south, "east":east, "west":west};
const description = {0 : "you are in a burning room, there are sparking wires everywhere",
                    1 : "It looks like an engine room, inactive.",
                    2 : "you are narrow hallway",
                    3 : "You are in the sleeping quarters, it looks like it was left in a hurry.",
                    4 : "hallway, nothing special",
                    5 : "you are in a meeting room",
                    6 : "psssss, SCHHHHH, wwwwww, you are in an airlock.",
                    7 : "Looks like you are in a big storage room.",
                    8 : "a long hallway, the lights are not working.",
                    9 : "You are on the bridge of a spaceship"
                   
                };

const Directions = {0 : "there is only one way to go(south)",
                    1 : "there is only one way to go(north)",
                    2 : "there are three ways to go(north, south, east)",
                    3 : "2 ways (east, west)",
                    4 : "2 ways (east, west)",
                    5 : "there are three ways to go(west, south, east)",
                    6 : "you can go (north, south).",
                    7 : "you can only go back (north).",
                    8 : "You can go(east, west).",
                    9 : "you can only go back ( west)."
            };
            

document.getElementById("label1").innerHTML = description[currentRoom];
document.getElementById("label2").innerHTML = Directions[currentRoom];
var input = getInput();
function main()
{
    document.getElementById("label3").innerHTML = "";
    input = getInput();
    var inputArray = input.split(" ");
    var action = inputArray[0];
    var direction = inputArray[1];
    if(allowedActions.indexOf(action) == -1)
    {
        document.getElementById("label3").innerHTML = "wtf do you want?";
    }
    else if(action == "move")
    {
        if(allowedDirections.indexOf(direction) == -1)
        {
            document.getElementById("label3").innerHTML = "I don't understand where you want to go.";
        }
        else
        {
            currentRoom = move(currentRoom, direction);
        }
    }
    else if(action == "take")
    {
        if(inputArray.length == 1)
        {
            document.getElementById("label3").innerHTML = "You need to tell me what you want to take.";
        }
        else
        {
            take(currentRoom, inputArray[1]);
        }
    }
    else if(action == "drop")
    {
        if(inputArray.length == 1)
        {
            document.getElementById("label3").innerHTML = "You need to tell me what you want to drop.";
        }
        else
        {
            drop(currentRoom, inputArray[1]);
        }
    }
    else if(action == "examine")
    {
        if(inputArray.length == 1)
        {
            console.log("You need to tell me what you want to examine.");
        }
        else
        {
            examine(currentRoom, inputArray[1]);
        }
    }
    else if(action == "help")
    {
        help();
    }
    document.getElementById("label1").innerHTML = description[currentRoom];
    document.getElementById("label2").innerHTML = Directions[currentRoom];
}

function getInput()
{
    return document.getElementById("input").value;
}

function move(currentRoom, direction)
{
    var newRoom = compass[direction][currentRoom];
    return newRoom;
}

function moveNorth()
{
    currentRoom = north[currentRoom];
    main();
}
function moveSouth()
{
    currentRoom = south[currentRoom];
    main();
}
function moveEast()
{
    currentRoom = east[currentRoom];
    main();
}
function moveWest()
{
    currentRoom = west[currentRoom];
    main();
}