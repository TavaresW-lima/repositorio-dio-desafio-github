function getValoresUnicos(vetor) {
    let set = new Set(vetor);
    console.log(Array.from(set));
}

//Testes
getValoresUnicos([30, 30, 40, 5, 223, 2049, 3034, 5]);
getValoresUnicos([1,1,1,1,1,1,1,1,1]);
getValoresUnicos([1,2,3,4,5,6,7,8,9]);
getValoresUnicos([]);