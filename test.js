let theShortest = words[0];

for (let i = 1; i < words.length; i++) {
  if (words[i].length < theShortest.length) {
    theShortest = words[i];
  }
}
