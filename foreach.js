let a = ["ant", "bat", "cat", 42];
a.forEach((element) => {
    console.log(element);
});


let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach((character) => {
  console.log(character);
});

let nums = [8, 17, 42, 99];
nums.sort((a,b) => {return a-b});

nums.sort((a,b) => {return a-b}).forEach((element) =>
    console.log(element)
    );