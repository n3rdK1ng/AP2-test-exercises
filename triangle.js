const getLength = (x1, y1, x2, y2) => {
  const xDiff = x2 - x1;
  const yDiff = y2 - y1;
  return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
};

const isTriangle = (a, b, c) => {
  return a + b > c && a + c > b && b + c > a;
};

const getPerimeter = (a, b, c) => {
  return a + b + c;
};
