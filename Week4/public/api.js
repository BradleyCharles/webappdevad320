async function fetchDogBreeds() {
  try {
    const response = await fetch('https://dogapi.dog/api/v2/breeds');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const breedInfo = data.data.map(breed => {
      return {
        name: breed.attributes.name,
        lifeSpan: {
          min: breed.attributes.life.min,
          max: breed.attributes.life.max
        },
        maleWeight: {
          min: breed.attributes.male_weight.min,
          max: breed.attributes.male_weight.max
        },
        femaleWeight: {
          min: breed.attributes.female_weight.min,
          max: breed.attributes.female_weight.max
        },
        hypoallergenic: breed.attributes.hypoallergenic,
        description: breed.attributes.description
      };
    });

    return breedInfo;
  } catch (error) {
    console.error('Error fetching dog breeds:', error.message);
    return [];
  }
}

async function updateName() {
  try {
    const dogNames = await fetchDogBreeds();
    
    for (let i = 0; i < 10; i++) {
      const breed = dogNames[i].name;
      const dogNameElement = document.getElementById(`dogName${i}`);
      dogNameElement.innerHTML = breed;
    }

  } catch (error) {
    console.error('Error updating dog name:', error.message);
  }
} updateName();

export async function updateDog(i = 0) {
  try {
    const dogBreeds = await fetchDogBreeds();
    const dogName = dogBreeds[i].name;
      const dogLife = dogBreeds[i].lifeSpan.min + ' - ' + dogBreeds[i].lifeSpan.max;
      const dogWeightM = dogBreeds[i].maleWeight.min + ' - ' + dogBreeds[i].maleWeight.max;
      const dogWeightF = dogBreeds[i].femaleWeight.min + ' - ' + dogBreeds[i].femaleWeight.max;
      const dogAlergy = dogBreeds[i].hypoallergenic;
      const dogDesc = dogBreeds[i].description;

    const dogNameElement = document.getElementById("dogName");
    dogNameElement.innerHTML = dogName;
    const dogLifeElement = document.getElementById("dogLife");
    dogLifeElement.innerHTML = dogLife;
    const dogWeightMElement = document.getElementById("dogWeightM");
    dogWeightMElement.innerHTML = dogWeightM;
    const dogWeightFElement = document.getElementById("dogWeightF");
    dogWeightFElement.innerHTML = dogWeightF;
    const dogAlergyElement = document.getElementById("dogAlergy");
    dogAlergyElement.innerHTML = dogAlergy;
    const dogDescElement = document.getElementById("dogDesc");
    dogDescElement.innerHTML = dogDesc;

  } catch (error) {
    console.error('Error updating dog facts:', error.message);
  }
} updateDog(Math.floor(Math.random()*10));