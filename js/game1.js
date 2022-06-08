const allowedDirections = ["north", "south", "east", "west"];
const allowedActions = ["move", "take", "drop", "examine", "help"];
var currentRoom = 0;

const north = {1: 2, 2:0, 6:5, 7:6, 6:5};
const south = {0:2, 2:1, 5:6, 6:7};
const east = {2:3, 3:4, 4:5, 5:8, 8:9};
const west = {3:2, 4:3, 5:4, 8:5, 9:8};

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
                    9 : "you can only go back ( east)."
            };
            

document.getElementById("label1").innerHTML = description[currentRoom];
document.getElementById("label2").innerHTML = Directions[currentRoom];
var input = getInput();
while(currentRoom != null)
{
    input = getInput();
    var inputArray = input.split(" ");
    var action = inputArray[0];
    var direction = inputArray[1];
    if(allowedActions.indexOf(action) == -1)
    {
        console.log("wtf do you want?");
    }
    else if(action == "move")
    {
        if(allowedDirections.indexOf(direction) == -1)
        {
            console.log("I don't understand where you want to go.");
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
            console.log("You need to tell me what you want to take.");
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
            console.log("You need to tell me what you want to drop.");
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
}

function getInput()
{
    return document.getElementById("input").value;
}