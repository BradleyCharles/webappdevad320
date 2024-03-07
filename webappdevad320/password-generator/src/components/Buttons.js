const Generate = async () => {
  const response = await fetch(
    "https://random-word-api.herokuapp.com/word?length=5&number=3"
  );

  const words = await response.json();
  const randomWords = words.map(() => {
    return randomWords;
  });

  return randomWords;
};

export default Generate;
