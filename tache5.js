const concurrentRequests = async () => {
  const apiCall1 = new Promise(resolve => {
    setTimeout(() => {
        resolve({ data: "Réponse de l'API 1" });
    }, 1000);
});

const apiCall2 = new Promise(resolve => {
    setTimeout(() => {
        resolve({ data: "Réponse de l'API 2" });
    }, 1000);
});

const [result1, result2] = await Promise.all([apiCall1, apiCall2]);

console.log("Résultats combinés : ", { result1, result2 });
  };
  
  concurrentRequests();
  