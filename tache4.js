//chainage avec async/await

const firstFunction = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Première fonction terminée !");
  };
  
  const secondFunction = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Deuxième fonction terminée !");
  };
  
  const thirdFunction = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Troisième fonction terminée !");
  };
  
  const chainedAsyncFunctions = async () => {
    await firstFunction();
    await secondFunction();
    await thirdFunction();
  };
  
  chainedAsyncFunctions();