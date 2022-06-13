const canvas = document.getElementById('c1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const canvas2 = document.getElementById('c2');
const ctx2 = canvas2.getContext('2d');
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;
var messageArray = ["Denetor03"];
var textPosition = 0;


typewriter = () => {
    document.querySelector("#nameprompt").innerHTML = messageArray[0].substring(0, textPosition) + "<span>\u25ae</span>";
    if(textPosition++ <= messageArray[0].length) {
        setTimeout(typewriter, 200);
    }
}
window.addEventListener("load", typewriter);
if(window.location.href.indexOf("matrix.html") == -1){
    fade("c1");
    fade("c2");
    fade("parent");
}
console.log(window.location.href);


class Symbol {
    constructor(x, y, fontSize, canvasHeight){
        this.characters = 'Denetor03';
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.text = 'A';
        this.canvasHeight = canvasHeight;
        //this.color = 'hsl(' + this.x * 3+ ', 100%, 50%)';
    }
    draw(context, context2){
        //context.font = this.fontSize + 'px monospace';
        this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
        //context.fillStyle = this.color;
        context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
        context2.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
        if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.97){
            this.y = 0;
        }
        else {
            this.y += 0.9;
        }
    }
}

class Effect {
    constructor(canvasWidth, canvasHeight){
        this.fontSize = 16;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.columns = this.canvasWidth/this.fontSize;
        this.symbols = [];
        this.#initialize();
    }
    #initialize(){
        for (let i = 0; i < this.columns; i++) {
            this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
        }
    }
    resize(width, height){
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.columns = this.canvasWidth/this.fontSize;
        this.symbols = [];
        this.#initialize();
    }
}
const effect = new Effect(canvas.width, canvas.height);
let lastTime = 0;
const fps = 60;
const nextFrame = 1000/fps;
let timer = 0;

function animate(timeStamp){
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    if (timer > nextFrame){
        ctx.textAlign = "center";
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = effect.fontSize + 'px monospace';
        ctx.fillStyle = '#C92519'; // #C92519 //03A062
        ctx.fillStyle = '#C92519'; // #C92519 //0aff0a

        ctx2.textAlign = "center";
        ctx2.clearRect(0, 0, canvas.width, canvas.height);
        ctx2.font = effect.fontSize + 'px monospace';
        ctx2.fillStyle = 'white';

        effect.symbols.forEach(symbol => symbol.draw(ctx, ctx2));
        timer = 0;
    } else {
        timer += deltaTime;
    }
    requestAnimationFrame(animate);
}
animate(0);

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas2.width = window.innerWidth;
    canvas2.height = window.innerHeight;
    effect.resize(canvas.width, canvas.height);
})


function fade(id){
    var fadeTarget = document.getElementById(id);
    var speed = 0.005;
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 2;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= speed;
            speed = speed + 0.0005;
        } else {
            clearInterval(fadeEffect);
            c1.style.display = "none";
            c2.style.display = "none";
            getElementById("parent").visibility = "hidden";
        }
    }, 50);
}
