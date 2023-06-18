const arr = [
    ['+1', '+2', 1],
    ['-1', '+3', 1],
    ['+4', '-2', 1],
  ];
  
  const top = [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0] ];
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < top.length; k++) {
        if (parseInt(arr[i][j][1]) === top[k][0]) {
          top[k][1] = 1;
        }
      }
    }
  }
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (i < 2) {
        if (arr[i][j][1] === arr[i + 1][j][1]) {
          let x = parseInt(arr[i][j][1]) - 1;
          if (arr[i][j][0] !== arr[i + 1][j][0]) {
            top[x][1] = -2;
          }
        }
      }
    }
  }
  
  for (let i = 0; i < top.length; i++) {
    if (top[i][1] === 1) {
      console.log('+');
    } else {
      console.log('-');
    }
  }