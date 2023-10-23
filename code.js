var options = [
    'This Text is white',
    'The sky is normally blue',
    'No number from 1 to 999 includes the letter "a" in its word form.',
    'Movie trailers got their name because they were originally shown after the movie.',
    'Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.',
    'A group of flamingos is called a "flamboyance."',
    'Cows have best friends and can become stressed when they are separated.',
    'Octopuses have three hearts.',
    'Bananas are berries, but strawberries are not.',
    'Wombat feces are cube-shaped.',
    'In Switzerland, it is illegal to own just one guinea pig because they are prone to loneliness.',
    'The "sixth sick sheik\'s sixth sheep\'s sick" is one of the toughest tongue twisters in the English language.',
    // Add more facts here...
    'There are more possible iterations of a game of chess than there are atoms in the observable universe.',
    'A day on Venus is longer than its year. Venus has an extremely slow rotation on its axis.',
    'Polar bears have black skin, not white. Their fur appears white because it scatters light.',
    'The shortest war in history was between Britain and Zanzibar on August 27, 1896, lasting just 38 minutes.',
    'A single strand of spaghetti is called a "spaghetto."',
    'Hippopotamus milk is pink.',
    'The Eiffel Tower can be 15 cm taller during the summer due to the expansion of the iron in the heat.',
    'A day on Mercury is longer than its night because it rotates very slowly.',
    'Hawaii moves about 7.5 cm closer to Alaska every year due to plate tectonics.'
];

function generate(){
    
    var randOptionNum = Math.floor(Math.random() * options.length);
    document.getElementById('text').innerHTML = '';
    document.getElementById('text').innerHTML = options[randOptionNum];
}