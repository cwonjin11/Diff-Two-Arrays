function diffArray(arr1, arr2) {

  const union = new Set([...arr1, ...arr2])
  console.log(union, "<===union")

    const symmatricDiff = []
    for (const currentElement of union) {
      if(arr1.includes(currentElement) && !arr2.includes(currentElement)) {
          symmatricDiff.push(currentElement)
      } else if (arr2.includes(currentElement) && !arr1.includes(currentElement)){
          symmatricDiff.push(currentElement)
      }
    }
    console.log(symmatricDiff, "symmatricDiff")
    return symmatricDiff;
  }

diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5, 7]);