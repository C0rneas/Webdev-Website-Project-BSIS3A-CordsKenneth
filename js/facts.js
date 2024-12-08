// Array of corn facts
const cornFacts = [
    "Corn is grown on every continent except Antarctica.",
    "There are over 3,500 uses for corn products!",
    "Popcorn is a type of corn, and it's the only type that pops.",
    "The average ear of corn has about 800 kernels, arranged in 16 rows.",
    "Corn is a key ingredient in more than 4,000 everyday products.",
    "Corn was first domesticated over 10,000 years ago in southern Mexico.",
    "There are over 5,000 different varieties of corn grown worldwide.",
    "Corn is used to make biofuel, a renewable source of energy.",
    "The largest corn-producing country is the United States.",
    "Corn is a member of the grass family, not a vegetable.",
    "The stalk of corn can grow as tall as 10 feet or more.",
    "Corn plants can produce up to two ears of corn per stalk.",
    "The husk of corn is used in making biodegradable packaging materials.",
    "Indigenous people have been cultivating corn for thousands of years.",
    "Sweet corn is harvested while the kernels are still soft and sweet.",
    "Corn plants are pollinated by the wind.",
    "Some varieties of corn are naturally high in antioxidants.",
    "Popcorn kernels can reach temperatures of up to 180°C when they pop!",
    "Corn has been genetically modified for various reasons.",
    "Corn was once considered a sacred plant by many Native American tribes."
];

document.addEventListener('DOMContentLoaded', function() {
    const factCard = document.querySelector('.fact-card');
    const currentFact = document.getElementById('currentFact');
    const newFactBtn = document.getElementById('newFactBtn');
    let usedFacts = new Set();

    function getRandomFact() {
        if (usedFacts.size === cornFacts.length) {
            usedFacts.clear(); // Reset when all facts have been shown
        }

        let availableFacts = cornFacts.filter(fact => !usedFacts.has(fact));
        let randomFact = availableFacts[Math.floor(Math.random() * availableFacts.length)];
        usedFacts.add(randomFact);
        return randomFact;
    }

    function drawNewFact() {
        // Disable button during animation
        newFactBtn.disabled = true;
        
        // Reset classes
        factCard.classList.remove('spinning');
        
        // Trigger reflow
        void factCard.offsetWidth;
        
        // Update the fact text before starting the animation
        currentFact.textContent = getRandomFact();
        
        // Start spinning animation
        factCard.classList.add('spinning');
        
        // After animation completes
        setTimeout(() => {
            newFactBtn.disabled = false;
        }, 3000);
    }

    newFactBtn.addEventListener('click', drawNewFact);
}); 
