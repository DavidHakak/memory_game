let cards = [
    {
        name: 'card1',
        // id: 'card1',
        img: '/image/facebook.png'
    },

    {
        name: 'card2',
        // id: 'card2',
        img: '/image/github.png'
    },

    {
        name: 'card3',
        // id: 'card3',
        img: '/image/instagram.png'
    },

    {
        name: 'card4',
        //  id: 'card4',
        img: '/image/Pinterest.png'
    },

    {
        name: 'card5',
        //  id: 'card5',
        img: '/image/reddit.png'
    },

    {
        name: 'card6',
        //  id: 'card6',
        img: '/image/snapchat.png'
    },

    {
        name: 'card7',
        //  id: 'card7',
        img: '/image/twitter.png'
    },

    {
        name: 'card8',
        //  id: 'card8',
        img: '/image/viber.png'
    },

    {
        name: 'card9',
        //  id: 'card9',
        img: '/image/whatsapp.png'
    },

    {
        name: 'card10',
        //  id: 'card10',
        img: '/image/youtube.png'
    },

    {
        name: 'card11',
        //  id: 'card11',
        img: '/image/amazon.png'
    },

    {
        name: 'card12',
        //  id: 'card12',
        img: '/image/google\ +.png'
    },

    {
        name: 'card13',
        //  id: 'card13',
        img: '/image/vk.png'
    },

    {
        name: 'card14',
        //  id: 'card14',
        img: '/image/tiktok.png'
    },

    {
        name: 'card15',
        //  id: 'card15',
        img: '/image/spotify.png'
    }];

let newCardArray = [];

let counter = 0;

let counterPlayers = 1;

let numPlayers = '';

let score = {
    player1: 0,
    player2: 0,
    player3: 0,
    player4: 0,
};

let paramOfCards = {
    card1Id: false,
    card1Name: false,
    card2Id: false,
    card2Name: false
};

let finalGameCounter = 0;

const like = 'gifLike';



function creatFormForNumPlayers() {

    visibility('moreGame', 'hidden');
    visibility('newGame', 'hidden');
    visibility('bord', 'hidden');


    const bord = document.querySelector('#bord');

    const form = document.createElement('form');

    form.id = 'formPlayers1'

    bord.appendChild(form);

    const lable = document.createElement('lable');
    lable.innerText = 'How many players are you?';
    lable.id = 'labelNumPlayers';
    form.appendChild(lable);

    const inputNum = document.createElement('input');
    inputNum.id = 'numPlayers';
    inputNum.type = "number";
    inputNum.min = '1';
    inputNum.max = '4';
    inputNum.value = 0;
    form.appendChild(inputNum);

    const inputSubmit = document.createElement('div');
    inputSubmit.className = 'submit';
    inputSubmit.innerText = 'submit'
    inputSubmit.addEventListener('click', () => { createFormToGiveNumCards(inputNum.value, bord) })
    form.appendChild(inputSubmit);
}

function createFormToGiveNumCards(num, bord) {

    numPlayers = Number(num);

    visibility('formPlayers1', 'hidden');

    const form = document.createElement('form');
    form.id = 'formPlayers2'
    bord.appendChild(form);

    const lable = document.createElement('lable');
    lable.innerText = 'How many cards you want to shuffle?';
    lable.id = 'labelNumPlayers';
    form.appendChild(lable);

    const selectNumOfCards = document.createElement('select');
    selectNumOfCards.id = 'selectNumOfCards';
    form.appendChild(selectNumOfCards);

    const selectOption1 = document.createElement("option");
    selectOption1.innerText = '12 cards';
    selectNumOfCards.appendChild(selectOption1);

    const selectOption2 = document.createElement("option");
    selectOption2.innerText = '16 cards';
    selectNumOfCards.appendChild(selectOption2);


    const selectOption3 = document.createElement("option");
    selectOption3.innerText = '20 cards';
    selectNumOfCards.appendChild(selectOption3);


    const selectOption4 = document.createElement("option");
    selectOption4.innerText = '24 cards';
    selectNumOfCards.appendChild(selectOption4);


    const selectOption5 = document.createElement("option");
    selectOption5.innerText = '30 cards';
    selectNumOfCards.appendChild(selectOption5);


    const inputSubmit = document.createElement('div');
    inputSubmit.className = 'submit';
    inputSubmit.innerText = 'submit'
    inputSubmit.addEventListener('click', () => { creatingPlayrs(selectNumOfCards.value, bord) })
    form.appendChild(inputSubmit);
};

function creatingPlayrs(numCards, bord) {

    const numMatch = numCards.match(/\d+/);

    const numOfCards = Number(numMatch[0]);

    visibility('formPlayers2', 'hidden');

    const bordParam = document.createElement('div');
    bordParam.id = 'param';
    bord.appendChild(bordParam);


    const moves = document.createElement('div');
    moves.id = 'moves';
    moves.className = 'listParam';
    moves.innerText = 'Moves: \n \n' + counter;
    bordParam.appendChild(moves);


    const player1 = document.createElement('div');

    const player2 = document.createElement('div');

    const player3 = document.createElement('div');

    const player4 = document.createElement('div');


    player1.id = 'player1';
    player1.className = 'listParam';
    player1.innerText = 'Player 1 \n\n score: \n\n ' + score.player1;
    bordParam.appendChild(player1);

    visibility('bord', 'visible');

    if (numPlayers === 2) {

        player1.id = 'player1';
        player1.className = 'listParam';
        player1.innerText = 'Player 1 \n\n score: \n\n ' + score.player1;
        bordParam.appendChild(player1);

        player2.id = 'player2';
        player2.className = 'listParam';
        player2.innerText = 'Player 2 \n\n score: \n\n ' + score.player2;
        bordParam.appendChild(player2);

    } else if (numPlayers === 3) {

        player1.id = 'player1';
        player1.className = 'listParam';
        player1.innerText = 'Player 1 \n\n score: \n\n ' + score.player1;
        bordParam.appendChild(player1);

        player2.id = 'player2';
        player2.className = 'listParam';
        player2.innerText = 'Player 2 \n\n score: \n\n ' + score.player2;
        bordParam.appendChild(player2);

        player3.id = 'player3';
        player3.className = 'listParam';
        player3.innerText = 'Player 3 \n\n score: \n\n ' + score.player3;
        bordParam.appendChild(player3);

    } else if (numPlayers === 4) {

        player1.id = 'player1';
        player1.className = 'listParam';
        player1.innerText = 'Player 1 \n\n score: \n\n ' + score.player1;
        bordParam.appendChild(player1);

        player2.id = 'player2';
        player2.className = 'listParam';
        player2.innerText = 'Player 2 \n\n score: \n\n ' + score.player2;
        bordParam.appendChild(player2);

        player3.id = 'player3';
        player3.className = 'listParam';
        player3.innerText = 'Player 3 \n\n score: \n\n ' + score.player3;
        bordParam.appendChild(player3);

        player4.id = 'player4';
        player4.className = 'listParam';
        player4.innerText = 'Player 4 \n\n score: \n\n ' + score.player4;
        bordParam.appendChild(player4);
    };

    init(numOfCards);
};

function init(theNumberOfCards) {

    visibility('pc', 'visible');

    shufle(cards);

    newCardArray = cards.slice(-theNumberOfCards / 2);

    newCardArray.push(...newCardArray);

    shufle(newCardArray);

    for (let i = 0; i < newCardArray.length; i++) {

        createImg(i, theNumberOfCards);
    };

    for (let i = 0; i < newCardArray.length; i++) {

        createCards(i);
    };

    bordSize(theNumberOfCards);
};

function shufle(card) {

    for (i = 0; i < card.length; i++) {

        const random = Math.floor(Math.random() * card.length)

        const temp = card[i];

        card[i] = card[random];

        card[random] = temp;
    };
};

function createImg(i) {

    const bordImg = document.querySelector('#bordImg');

    const img = document.createElement("img");

    img.src = newCardArray[i].img;

    img.className = 'image';

    bordImg.appendChild(img);

};

function createCards(i) {

    const bordCovers = document.querySelector('#bordCovers')

    const cover = document.createElement("div");

    cover.name = newCardArray[i].name

    cover.id = 'cover' + (i + 1);

    cover.className = 'covers';

    cover.addEventListener('click', openCards)

    bordCovers.appendChild(cover);
};

function bordSize(numOfCards) {

    const bordImg = document.querySelector('#bordImg');

    const bordCovers = document.querySelector('#bordCovers');

    switch (numOfCards) {

        case 12:
            bordImg.style.gridTemplateColumns = '1fr 1fr auto';
            bordImg.style.gridTemplateRows = ' 1fr 1fr 1fr';
            bordImg.style.padding = '2vw'


            bordCovers.style.gridTemplateColumns = '1fr 1fr auto';
            bordCovers.style.gridTemplateRows = ' 1fr 1fr 1fr';

            break;

        case 16:
            bordImg.style.gridTemplateColumns = '1.4fr 1.4fr 1.4fr auto';
            bordImg.style.gridTemplateRows = ' 1fr 1fr 1fr';

            bordCovers.style.gridTemplateColumns = '1.4fr 1.4fr 1.4fr auto';
            bordCovers.style.gridTemplateRows = ' 1fr 1fr 1fr';
            break;

        case 20:
            bordImg.style.gridTemplateColumns = '1fr 1fr 1fr auto';
            bordImg.style.gridTemplateRows = ' 1fr 1fr 1fr 1fr';

            bordCovers.style.gridTemplateColumns = '1fr 1fr 1fr auto';
            bordCovers.style.gridTemplateRows = ' 1fr 1fr 1fr 1fr';
            break;

        case 24:
            bordImg.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr auto';
            bordImg.style.gridTemplateRows = '1fr 1fr 1fr ';

            bordCovers.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr auto';
            bordCovers.style.gridTemplateRows = '1fr 1fr 1fr ';
            break;

        case 30:
            bordImg.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr auto';
            bordImg.style.gridTemplateRows = '1fr 1fr 1fr 1fr ';

            bordCovers.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr auto';
            bordCovers.style.gridTemplateRows = '1fr 1fr 1fr 1fr ';
            break;
    };
};

function visibility(codeCard, mode) {

    document.querySelector('#' + codeCard).style.visibility = mode;
};

function changePlayers() {

    switch (numPlayers) {

        case 2:

            if (counterPlayers === 1) {

                document.querySelector('#player2').style.boxShadow = 'inset 30px 45px 100px 20px rgba(0, 0, 0, 0.691)';
                document.querySelector('#player1').style.boxShadow = 'none';
                counterPlayers++;

            } else if (counterPlayers === 2) {

                document.querySelector('#player1').style.boxShadow = 'inset 30px 45px 100px 20px rgba(0, 0, 0, 0.691)';
                document.querySelector('#player2').style.boxShadow = 'none';

                counterPlayers = 1;
            };

            break;

        case 3:

            if (counterPlayers === 1) {

                document.querySelector('#player2').style.boxShadow = 'inset 30px 45px 100px 20px rgba(0, 0, 0, 0.691)';
                document.querySelector('#player1').style.boxShadow = 'none';

                counterPlayers++;

            } else if (counterPlayers === 2) {

                document.querySelector('#player3').style.boxShadow = 'inset 30px 45px 100px 20px rgba(0, 0, 0, 0.691)';
                document.querySelector('#player2').style.boxShadow = 'none';

                counterPlayers++;

            } else if (counterPlayers === 3) {

                document.querySelector('#player1').style.boxShadow = 'inset 30px 45px 100px 20px rgba(0, 0, 0, 0.691)';
                document.querySelector('#player3').style.boxShadow = 'none';

                counterPlayers = 1;
            };

            break;

        case 4:
            if (counterPlayers === 1) {

                document.querySelector('#player2').style.boxShadow = 'inset 30px 45px 100px 20px rgba(0, 0, 0, 0.691)';
                document.querySelector('#player1').style.boxShadow = 'none';

                counterPlayers++;

            } else if (counterPlayers === 2) {

                document.querySelector('#player3').style.boxShadow = 'inset 30px 45px 100px 20px rgba(0, 0, 0, 0.691)';
                document.querySelector('#player2').style.boxShadow = 'none';

                counterPlayers++;

            } else if (counterPlayers === 3) {

                document.querySelector('#player4').style.boxShadow = 'inset 30px 45px 100px 20px rgba(0, 0, 0, 0.691)';
                document.querySelector('#player3').style.boxShadow = 'none';

                counterPlayers++;

            } else if (counterPlayers === 4) {

                document.querySelector('#player1').style.boxShadow = 'inset 30px 45px 100px 20px rgba(0, 0, 0, 0.691)';
                document.querySelector('#player4').style.boxShadow = 'none';

                counterPlayers = 1;
            };

            break;
    };
};


function scorePlayers() {

    if (counterPlayers === 1) {

        document.querySelector('#player1').innerText = 'Player 1 \n\n score: \n\n ' + (score.player1 += 1);

    } else if (counterPlayers === 2) {

        document.querySelector('#player2').innerText = 'Player 2 \n\n score: \n\n ' + (score.player2 += 1);

    } else if (counterPlayers === 3) {

        document.querySelector('#player3').innerText = 'Player 3 \n\n score: \n\n ' + (score.player3 += 1);

    } else if (counterPlayers === 4) {

        document.querySelector('#player4').innerText = 'Player 4 \n\n score: \n\n ' + (score.player4 += 1);
    };
};

function openCards(e) {

    if (!paramOfCards.card1Id && !paramOfCards.card1Name) {

        paramOfCards.card1Id = e.target.id;

        paramOfCards.card1Name = e.target.name;

        visibility(paramOfCards.card1Id, 'hidden');

    } else if (paramOfCards.card1Id && !paramOfCards.card2Id && paramOfCards.card1Name && !paramOfCards.card2Name) {

        paramOfCards.card2Id = e.target.id;

        paramOfCards.card2Name = e.target.name;

        visibility(paramOfCards.card2Id, 'hidden');

        setTimeout(closedCards, 1500)
    };
};

function closedCards() {

    if (paramOfCards.card1Name === paramOfCards.card2Name) {

        paramOfCards.card1Id = false, paramOfCards.card2Id = false, paramOfCards.card1Name = false, paramOfCards.card2Name = false, counter++, finalGameCounter++;

        visibility(like, 'visible');

        document.querySelector('#moves').innerText = 'Moves: \n\n' + counter;

        scorePlayers(numPlayers);

        changePlayers(numPlayers);

        setTimeout(() => {

            visibility(like, 'hidden')

        }, 1000);


    } else if (paramOfCards.card1Name !== paramOfCards.card2Name) {

        visibility(paramOfCards.card1Id, 'visible');

        visibility(paramOfCards.card2Id, 'visible');

        paramOfCards.card1Id = false, paramOfCards.card2Id = false, paramOfCards.card1Name = false, paramOfCards.card2Name = false, counter++;

        document.querySelector('#moves').innerText = 'Moves: \n\n' + counter;

        changePlayers();
    };


    if (finalGameCounter == newCardArray.length / 2) {
        document.querySelector('#gifFireworks').style.visibility = 'visible';

        setTimeout(() => {
            visibility('moreGame', 'visible')
            visibility('gifFireworks', 'hidden')
            visibility('pc', 'hidden');
        }, 4000)
    };
};