function diffArray(arr1, arr2) {

  const union = [];
    for (let i=0; i<= arr1.length; i++ ) {
      if (!union.includes(arr1[i])) {
        union.push(arr1[i]);
      }
    }

    for (let i=0; i<= arr2.length; i++ ) {
      if (!union.includes(arr2[i])) {
        union.push(arr2[i]);
      }
    }
    // console.log(union)


    const symmatricDiff = []
    // for (let i=0; i<=union.length; i++){
    //   const currentElement = union[i];
    //refactoring above two line
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