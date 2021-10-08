function diffArray(arr1, arr2) {

  const union = [];
    for (const el of arr1) {
      if (!union.includes(el)) {
        union.push(el);
      }
    }

    for (const el of arr2 ) {
      if (!union.includes(el)) {
        union.push(el);
      }
    }



    const symmatricDiff = []

    for (const currentElement of union) {
      
    if(arr1.includes(currentElement) && !arr2.includes(currentElement)) {
         symmatricDiff.push(currentElement)
       } else if (arr2.includes(currentElement) && !arr1.includes(currentElement)){
        symmatricDiff.push(currentElement)
       }
    }
    // console.log(symmatricDiff)
    return symmatricDiff;
  }

diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5, 7]);