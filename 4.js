function createSquare(size = 10, char = "x", space = " ") {
  const line = char.repeat(size);
  const spaceLine = space.repeat(size - 2);

  for (let i = 0; i < size; i++) {
    if (i === 0 || i === size - 1) {
      console.log(line);
    } else {
      console.log(char + spaceLine + char);
    }
  }
}

const main = () => {
  createSquare();
};

main();
