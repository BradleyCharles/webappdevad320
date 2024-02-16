
// Fetches dog breeds data from an external API and processes it
async function fetchDogBreeds() {
  try {

    // Fetches data from the dog API
    const response = await fetch('https://dogapi.dog/api/v2/breeds');

    // Checks if the HTTP response is successful; if not, throws an error
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parses the JSON data from the response
    const dogData = await response.json();

    // Maps the data to a more structured format
    const breedInfo = dogData.data.map(breed => {
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
  } catch (error) { // Logs an error message if there's an issue with fetching or processing data
    console.error('Error fetching dog breeds:', error.message);
    return [];
  }
}

// Updates the names of 10 dog elements on the webpage
async function updateName() {
  try {

    // Calls the fetchDogBreeds function to get dog names
    const dogNames = await fetchDogBreeds();
    
    for (let i = 0; i < 10; i++) {
      const breed = dogNames[i].name;
      const dogNameElement = document.getElementById(`dogName${i}`);
      dogNameElement.innerHTML = breed;
    }

  } catch (error) { // Logs an error message if there's an issue with fetching or processing data
    console.error('Error updating dog name:', error.message);
  }
 } updateName();

// Updates the information of a specific dog on the webpage
export async function updateDog(i = 0) {
  try {

    // Extracts information for the specified dog index
    const dogBreeds = await fetchDogBreeds();
    const dogName = dogBreeds[i].name;
    const dogLife = dogBreeds[i].lifeSpan.min + ' - ' + dogBreeds[i].lifeSpan.max;
    const dogWeightM = dogBreeds[i].maleWeight.min + ' - ' + dogBreeds[i].maleWeight.max;
    const dogWeightF = dogBreeds[i].femaleWeight.min + ' - ' + dogBreeds[i].femaleWeight.max;
    const dogAlergy = dogBreeds[i].hypoallergenic;
    const dogDesc = dogBreeds[i].description;

    // Updates the corresponding elements on the webpage with dog information
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

  } catch (error) { // Logs an error message if there's an issue with fetching or processing data
    console.error('Error updating dog facts:', error.message);
  }
  // Calls updateDog with a random index to display information about a random dog to start
} updateDog(Math.floor(Math.random()*10));