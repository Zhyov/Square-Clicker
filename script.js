Game = {
    squares: 0,
    name: '',
    consoleText: {
        '1': 'Welcome to the game!',
        '2': 'Dont you dare cheat...',
        '3': 'You have to click on the square!',
        '4': 'Did you know that you can click on the square?',
        '5': 'Are negative numbers allowed?',
        '6': 'Not so sneaky message...',
        '7': '"Cheated squares look awful!" - Luke',
        '8': 'Is "Creator" a name? Oops wrong chat...',
        '9': 'If you type "refresh()" you will get a new message!',
        '10': 'Dont refresh the page too fast!',
    },
    squaresPerClick: 1,
    squaresPerSecond: 0,
    skin: 'Square',
};

console.log('--[ ' + Game.consoleText[String(Math.floor(Math.random() * 10) + 1)] + ' ]--');

var price_mC = 10;
var boost_mC = 1;
var price_aC = 20;
var boost_aC = 1;
var square = document.getElementById('square');
var squares = document.getElementById('squares');
var sSkin = document.getElementById('square-skin');
var cSkin = document.getElementById('circle-skin');
var cAlert = 0;
var uBtn_mC = document.getElementById('upgrade-moreClicks');
var uBtn_aC = document.getElementById('upgrade-autoClick');
var msgContent = document.getElementById('msgContent');
var statsBtn = document.getElementById('statsBtn');
var creditsBtn = document.getElementById('creditsBtn');

square.addEventListener('click', function () {
    Game.squares += Game.squaresPerClick;
});

uBtn_mC.addEventListener('click', function () {
    if (Game.squares >= price_mC) {
        Game.squares -= price_mC;
        price_mC *= 3;
        Game.squaresPerClick += boost_mC;
        boost_mC *= 2;
     };
});

uBtn_aC.addEventListener('click', function () {
    if (Game.squares >= price_aC) {
        Game.squares -= price_aC;
        price_aC *= 3;
        Game.squaresPerSecond += boost_aC;
     };
});

sSkin.addEventListener('click', function () {
    Game.skin = 'Square';
    cSkin.innerHTML = '';
    sSkin.innerHTML = '✓';
});

cSkin.addEventListener('click', function () {
    Game.skin = 'Circle';
    sSkin.innerHTML = '';
    cSkin.innerHTML = '✓';
});

creditsBtn.addEventListener('click', function () {
    msgContent.innerHTML = 'In Progress...';
    setTimeout(function () {
        msgContent.innerHTML = '';
    }, 2000);
});

statsBtn.addEventListener('click', function () {
    msgContent.innerHTML = 'In Progress...';
    setTimeout(function () {
        msgContent.innerHTML = '';
    }, 2000);
});

setInterval(function () {
    Game.squares += Game.squaresPerSecond
}, 1000);

setInterval(function () {
    if (Game.name != 'Creator') {
        if (Game.squares < 0) {
            Game.squares = 0;
            console.log("I smell cheating... you cannot have negative numbers, can you?");
        };
        if (Game.squaresPerClick < 1) {
            Game.squaresPerClick = 1;
            console.log("You cannot have a negative number of squares per click!");
        };
        if (Game.squaresPerSecond < 0) {
            Game.squaresPerSecond = 0;
            console.log("You cannot have a negative number of squares per second!");
        };
    } else {
        if (cAlert == 0) {
            msgContent.innerHTML = 'Oh, looks like you found me! Im Luke, the Creator of the game. Just to tell you, secrets may have been unlocked so try messing with the code in the console to find an answer to the secret.';
            cAlert = 1;
            setTimeout(function () {
                msgContent.innerHTML = '';
            }, 12000);
        };
    };
    if (Game.squares >= price_mC) {
        uBtn_mC.disabled = false;
    } else {
        uBtn_mC.disabled = true;
    };
    if (Game.squares >= price_aC) {
        uBtn_aC.disabled = false;
    } else {
        uBtn_aC.disabled = true;
    };
    if (Game.squares >= 1000000000) {
        square.style.backgroundColor = "rgb(0,0,0)";
    } else if (Game.squares >= 100000000) {
        square.style.backgroundColor = "rgb(200,0,125)";
    } else if (Game.squares >= 10000000) {
        square.style.backgroundColor = "rgb(255,0,0)";
    } else if (Game.squares >= 1000000) {
        square.style.backgroundColor = "rgb(255,150,0)";
    } else if (Game.squares >= 100000) {
        square.style.backgroundColor = "rgb(255,255,0)";
    } else if (Game.squares >= 10000) {
        square.style.backgroundColor = "rgb(100,250,100)";
    } else if (Game.squares >= 1000) {
        square.style.backgroundColor = "rgb(0,200,0)";
    } else if (Game.squares >= 100) {
        square.style.backgroundColor = "rgb(0,0,255)";
    } else if (Game.squares >= 10) {
        square.style.backgroundColor = "rgb(0,200,255)";
    } else if (Game.squares >= 0) {
        square.style.backgroundColor = "rgb(255,255,255)";
    };
    if (Game.squares <= -1) {
        square.style.backgroundColor = "rgb(255,0,0)";
        square.innerHTML = "NEGATIVE";
    } else {
        square.innerHTML = "";
    };
    if (Game.skin == 'Square') {
        square.style.borderRadius = '0';
    } else if (Game.skin == 'Circle') {
        square.style.borderRadius = '50%';
    }
    Game.name = document.getElementById('name').value;
    squares.innerHTML = Game.squares;
    document.getElementById('price-moreClicks').innerHTML = price_mC;
    document.getElementById('boost-moreClicks').innerHTML = boost_mC;
    document.getElementById('price-autoClick').innerHTML = price_aC;
    document.getElementById('boost-autoClick').innerHTML = boost_aC;
    document.getElementById('squareAmount').innerHTML = Game.squaresPerClick;
    document.getElementById('spsAmount').innerHTML = Game.squaresPerSecond;
});

document.addEventListener('keydown', function (e) {
    if (e.keyCode == 81) {
        alert("Did you really think that this would work? I'm not sure, but it does.");
        window.close();
    }
});

refresh = function () {
    console.clear();
    console.log('--[ ' + Game.consoleText[String(Math.floor(Math.random() * 9) + 1)] + ' ]--');
};

window.onbeforeunload = function () {
    localStorage.setItem('Game.squares', Game.squares);
    localStorage.setItem('Game.squaresPerClick', Game.squaresPerClick);
    localStorage.setItem('Game.squaresPerSecond', Game.squaresPerSecond);
    localStorage.setItem('Game.skin', Game.skin);
    localStorage.setItem('Game.name', Game.name);
    localStorage.setItem('price_mC', price_mC);
    localStorage.setItem('boost_mC', boost_mC);
    localStorage.setItem('price_aC', price_aC);
    localStorage.setItem('boost_aC', boost_aC);
};
window.onload = function () {
    if (localStorage.getItem('Game.squares') != null) {
        Game.squares = parseInt(localStorage.getItem('Game.squares'));
    };
    if (localStorage.getItem('Game.squaresPerClick') != null) {
        Game.squaresPerClick = parseInt(localStorage.getItem('Game.squaresPerClick'));
    };
    if (localStorage.getItem('Game.squaresPerSecond') != null) {
        Game.squaresPerSecond = parseInt(localStorage.getItem('Game.squaresPerSecond'));
    };
    if (localStorage.getItem('Game.skin') != null) {
        Game.skin = localStorage.getItem('Game.skin');
    };
    if (localStorage.getItem('Game.name') != null) {
        Game.name = localStorage.getItem('Game.name');
    };
    if (localStorage.getItem('price_mC') != null) {
        price_mC = parseInt(localStorage.getItem('price_mC'));
    };
    if (localStorage.getItem('boost_mC') != null) {
        boost_mC = parseInt(localStorage.getItem('boost_mC'));
    };
    if (localStorage.getItem('price_aC') != null) {
        price_aC = parseInt(localStorage.getItem('price_aC'));
    };
    if (localStorage.getItem('boost_aC') != null) {
        boost_aC = parseInt(localStorage.getItem('boost_aC'));
    };
};

document.getElementById('name').value = localStorage.getItem('Game.name');
