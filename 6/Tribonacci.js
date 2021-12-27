const tribonacci = (signature, n) => {
  if (n < 3) {
    return signature.splice(0, n);
  }else{ 
      const arr = [...signature];
      for (let i = signature.length; i < n; i++) {
          arr.push(arr[i - 3] + arr[i - 2] + arr[i - 1]);
        }
        
        return arr;
    }
};

console.log(tribonacci([1, 1, 1], 10));
