//iterateWithAsyncAwait
const iterateWithAsyncAwait = async (values) => {
  for (const value of values) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Pause de 1 seconde
    console.log(value);
  }
};

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
iterateWithAsyncAwait(values);
