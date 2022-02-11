class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

console.log(new SmallestIntegerFinder().findSmallestInt([78, 56, 232, 12, 8]));
