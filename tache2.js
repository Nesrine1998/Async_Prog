//await call function

const awaitCall = async () => {
  console.log("Attente de la réponse de l'API...");

  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "Données obtenues avec succès !" });
    }, 2000);
  });

  console.log("Réponse de l'API reçue : ", data);
};

awaitCall();
