// run `node index.js` in the terminal

//Loop for number 1 to 100
for (i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('amazon');
  }

  if (i % 3 == 0) {
    console.log('google');
    i++;
  }
  // console.log(i);
  if (i % 5 == 0) {
    console.log('Facebook');
    continue;
  }

  console.log(i);
}

console.log(`Hello Node.js v${process.versions.node}!`);
