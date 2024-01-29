export async function fetchDogBreeds() {
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
