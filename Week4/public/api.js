
// Assume fetchDogBreeds is an asynchronous function that fetches the dog breeds
export async function fetchDogBreeds() {
  try {
    const response = await fetch('https://dogapi.dog/api/v2/breeds');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.data.map(breed => breed.attributes.name);
  } catch (error) {
    console.error('Error fetching dog breeds:', error.message);
    return [];
  }
}
