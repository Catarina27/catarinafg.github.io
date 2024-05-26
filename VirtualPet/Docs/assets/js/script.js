let pet = {
    hunger: 10,
    happiness: 10,
    energy: 50
};

const petElement = document.getElementById('pet');
const hungerLevelElement = document.getElementById('hungerLevel');
const happinessLevelElement = document.getElementById('happinessLevel');
const energyLevelElement = document.getElementById('energyLevel');

function updatePetDisplay() {
    petElement.style.width = `${pet.happiness}px`;
    petElement.style.height = `${pet.happiness}px`;

    if (pet.hunger > 50) {
        petElement.style.backgroundColor = 'red';
    } else {
        petElement.style.backgroundColor = 'blue';
    }

    // Atualizar os níveis de fome, felicidade e energia
    hungerLevelElement.textContent = pet.hunger;
    happinessLevelElement.textContent = pet.happiness;
    energyLevelElement.textContent = pet.energy;
}

function feedPet() {
    pet.hunger -= 10;
    updatePetDisplay();
}

function playWithPet() {
    pet.happiness += 10;
    pet.energy -= 10;
    updatePetDisplay();
}

function sleepPet() {
    pet.energy += 10;
    updatePetDisplay();
}

document.getElementById('feedBtn').addEventListener('click', feedPet);
document.getElementById('playBtn').addEventListener('click', playWithPet);
document.getElementById('sleepBtn').addEventListener('click', sleepPet);

updatePetDisplay();

function decreaseFactors() {
    setInterval(() => {
        pet.hunger -= 1;
        pet.happiness -= 1;
        pet.energy -= 1;
        updatePetDisplay();
    }, 1000);
}

decreaseFactors();
