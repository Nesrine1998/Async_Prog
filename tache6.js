const parallelCalls = async urls => {
  const fetchData = url => 
    new Promise(resolve => setTimeout(() => resolve(`Données de ${url}`), Math.random() * 3000));

  const responses = await Promise.all(urls.map(fetchData));
  console.log("Toutes les réponses :", responses);
};

const urls = ["https://api.exemple.com/1", "https://api.exemple.com/2", "https://api.exemple.com/3"];
parallelCalls(urls);
