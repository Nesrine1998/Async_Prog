//await call task 3

const awaitCall = async () => {
  console.log("Attente de la réponse de l'API...");
    
  try {
      const data = await new Promise((resolve, reject) => {
          setTimeout(() => {
              reject(new Error("Erreur lors de l'appel API"));
          }, 2000);
      });
      
      console.log("Réponse de l'API reçue : ", data);
  } catch (error) {
      console.error("Une erreur s'est produite : ", error.message);
  }
}
  awaitCall();

  

  
  