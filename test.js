// let cards = [{
//     name: 'card1',
//     // id: 'card1',
//     img: '/image/facebook.png'
// },

// {
//     name: 'card2',
//     // id: 'card2',
//     img: '/image/github.png'
// },

// {
//     name: 'card3',
//     // id: 'card3',
//     img: '/image/instagram.png'
// },

// {
//     name: 'card4',
//     //  id: 'card4',
//     img: '/image/Pinterest.png'
// },

// {
//     name: 'card5',
//     //  id: 'card5',
//     img: '/image/reddit.png'
// },

// {
//     name: 'card6',
//     //  id: 'card6',
//     img: '/image/snapchat.png'
// },

// {
//     name: 'card7',
//     //  id: 'card7',
//     img: '/image/twitter.png'
// },

// {
//     name: 'card8',
//     //  id: 'card8',
//     img: '/image/viber.png'
// },

// {
//     name: 'card9',
//     //  id: 'card9',
//     img: '/image/whatsapp.png'
// },

// {
//     name: 'card10',
//     //  id: 'card10',
//     img: '/image/youtube.png'
// },

// {
//     name: 'card11',
//     //  id: 'card11',
//     img: '/image/amazon.png'
// },

// {
//     name: 'card12',
//     //  id: 'card12',
//     img: '/image/google\ +.png'
// },

// {
//     name: 'card13',
//     //  id: 'card13',
//     img: '/image/vk.png'
// },

// {
//     name: 'card14',
//     //  id: 'card14',
//     img: '/image/tiktok.png'
// },

// {
//     name: 'card15',
//     //  id: 'card15',
//     img: '/image/spotify.png'
// }];

// let newCardArray = [];

// function shufle(card) {

//     for (i = 0; i < card.length; i++) {

//         const random = Math.floor(Math.random() * card.length)

//         const temp = card[i];

//         card[i] = card[random];

//         card[random] = temp;
//     };
// };

// function createImg(i, theNumberOfTickets) {

//     const bordImg = document.querySelector('#bordImg');

//     const img = document.createElement("img");

//     img.src = newCardArray[i].img;

//     img.className = 'image';

//     img.id = i + 1;

//     //img.addEventListener('click', openCards(e));

//     if (theNumberOfTickets === 12) {

//         bordImg.style.gridTemplateColumns = 'auto auto auto auto';
//     };

//     bordImg.appendChild(img);

// };

// // function boardArrangement(theNumberOfTickets) {

// //     const style = document.createElement('style');

// //     const bordImg = document.querySelector('#bordImg');

// //     const image = document.querySelector('.image');

// //     if (theNumberOfTickets == 12) {

// //         bordImg.style.gridTemplateColumns = 'auto auto auto auto';

// //         style.innerHTML =
// //             '.image{' +
// //             'padding = 3' +
// //             'width = 5' +
// //             '}';

// //     } else if (theNumberOfTickets == 16) {

// //         bordImg.style.gridTemplateColumns = 'auto auto auto auto';

// //         style.innerHTML =
// //             '.image{' +
// //             'padding = 1.3' +
// //             'width = 5' +
// //             '}';

// //     } else if (theNumberOfTickets == 20) {

// //         bordImg.style.gridTemplateColumns = 'auto auto auto auto';

// //         style.innerHTML =
// //             '.image{' +
// //             'padding = 1' +
// //             'width = 4' +
// //             '}';

// //     } else if (theNumberOfTickets == 24) {

// //         bordImg.style.gridTemplateColumns = 'auto auto auto auto auto auto';

// //         style.innerHTML =
// //             '.image{' +
// //             'padding = 2' +
// //             'width = 4' +
// //             '}';

// //     } else {

// //         bordImg.style.gridTemplateColumns = 'auto auto auto auto auto auto';

// //         style.innerHTML =
// //             '.image{' +
// //             'padding = 1' +
// //             'width = 4' +
// //             '}';
// //     };

// // };


// function init(theNumberOfTickets) {

//     shufle(cards);


//     newCardArray = cards.slice(-theNumberOfTickets / 2);

//     newCardArray.push(...newCardArray);

//     shufle(newCardArray);

//     for (let i = 0; i < newCardArray.length; i++) {

//         createImg(i, theNumberOfTickets);
//     };
//     if (theNumberOfTickets === 12) {
//         document.querySelector('.image').style.padding = '3'
//         document.querySelector('.image').style.width = '5'
//     }
//     // boardArrangement(theNumberOfTickets);
// };






// let counter = 0;

// let score = {
//     player1: 0,
//     player2: 0
// };

// document.querySelector('#moves').innerText = 'Moves: \n \n' + counter;
// document.querySelector('#player1').innerText = 'Player 1 \n\n score: \n\n ' + score.player1;
// document.querySelector('#player2').innerText = 'Player 2 \n\n score: \n\n ' + score.player2;










// let card1 = {
//     id: false,
//     name: false
// };

// let card2 = {
//     id: false,
//     name: false
// };

// let finalGameCounter = 0;

// const like = 'gifLike';





// function visibility(codeCard, mode) {

//     document.querySelector('#' + codeCard).style.visibility = mode;

// };





// function openCards(e) {

//     if (!card1.id && !card1.name) {

//         card1.id = e.target.id;

//         card1.name = e.target.name;

//         visibility(card1.id, 'hidden');

//     } else if (card1.id && !card2.id && card1.name && !card2.name) {

//         card2.id = e.target.id;

//         card2.name = e.target.name;

//         visibility(card2.id, 'hidden');

//         setTimeout(closedCards, 1500)
//     };
// };






// function closedCards() {

//     if (card1.name === card2.name) {

//         card1.id = false, card2.id = false, card1.name = false, card2.name = false, counter++, finalGameCounter++;

//         visibility(like, 'visible')

//         document.querySelector('#moves').innerText = 'Moves: \n\n' + counter;

//         setTimeout(() => {
//             document.querySelector('#gifLike').style.visibility = 'hidden'
//         }, 1000);



//     } else if (card1.name && card2.name && card1.name !== card2.name) {

//         visibility(card1.id, 'visible');

//         visibility(card2.id, 'visible');

//         card1.id = false, card2.id = false, card1.name = false, card2.name = false, counter++;

//         document.querySelector('#moves').innerText = 'Moves: \n\n' + counter;
//     };

//     if (finalGameCounter === 10) {
//         document.querySelector('#finalGame').style.visibility = 'visible';
//     }
// };