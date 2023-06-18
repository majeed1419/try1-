function pizzaToppings(n, m) {
    // Create a 2D array to store the wishes of each family member.
    let wishes = [];
    for (let i = 0; i < n; i++) {
      wishes[i] = [];
      let line = input.readline();
      for (let j = 0; j < 2; j++) {
        wishes[i][j] = line[j];
      }
    }
  
    // Create a set to store the toppings that are good for everyone.
    let goodToppings = new Set();
    for (let i = 0; i < n; i++) {
      if (wishes[i][0] === "+") {
        goodToppings.add(i + 1);
      }
    }
  
    // Create a set to store the toppings that are bad for everyone.
    let badToppings = new Set();
    for (let i = 0; i < n; i++) {
      if (wishes[i][1] === "-") {
        badToppings.add(i + 1);
      }
    }
  
    // Initialize the answer array.
    let answer = [];
    for (let i = 1; i <= m; i++) {
      answer.push("-");
    }
  
    // Iterate over the toppings and add them to the answer array if they are not bad for everyone.
    for (let i = 1; i <= m; i++) {
      if (!badToppings.has(i)) {
        answer[i - 1] = "+";
      }
    }
  
    // Check if the answer is valid.
    for (let i = 0; i < n; i++) {
      if (!goodToppings.has(i + 1) && !badToppings.has(i + 1)) {
        return "IMPOSSIBLE";
      }
    }
  
    // Return the answer.
    return answer.join("");
  }
  
  const input = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  const n =+ input.readline();
  const m =+ input.readline();
  
  const answer = pizzaToppings(n, m);
  
  console.log(answer);