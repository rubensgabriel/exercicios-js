function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
      return []
    } else {
      const contador = rangeOfNumbers(startNum + 1, endNum)
        contador.unshift(startNum)
        return contador
    }
  };
  console.log(rangeOfNumbers(2, 8))