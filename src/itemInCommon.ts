const notOptimized = (a: number[], b: number[]) => {
  for (let i = 0; i < a.length; i++) {
    for(let j = 0; j< b.length; j++) {
      if (a[i] === b[j]) return true;
    }
  }
  return false;
}

const bestWay = (a: number[], b: number[]) => {
  let obj = {} as Record<number, boolean>;
  for (let i = 0; i < a.length; i++) {
    obj[a[i]] = true;
  }
  for(let j = 0; j< b.length; j++) {
    if (obj[b[j]]) return true;
  }
  return false;
}

const bestDeclarative = (a: number[], b: number[]) => {
  const object = {} as Record<number, boolean>;
  a.forEach(value => {
    object[value] = true;
  });
  return Boolean(b.find(value => object[value]));
}