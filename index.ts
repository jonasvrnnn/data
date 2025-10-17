const fruit: string[] = ["appel", "peer", "banaan", "aardbei"];
fruit.sort((a, b) => {
  console.log(`a: ${a}`);
  console.log(`b: ${b}`);
  return -1;
});
console.log(fruit);
