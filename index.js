const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i ++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);



const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, message) {
    let messages = []
    for (let i = 0; i < names.length; i ++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${message} gift!`)
};
    return messages;
};

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");


function countDown (i) {
    while (i >= 0) {
        console.log(i--);
    }
};

countDown(10);







 
