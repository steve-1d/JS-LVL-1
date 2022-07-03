1. https://edabit.com/challenge/B3FR3P7g8NyTg7t8b?fbclid=IwAR3K0ughkjsmZ_koJvMHPMylXN2vBzru0BWmolh3bruwSTCyyL4_NuadblI

function sumElements(arr, num) {

    let arr1 = arr.slice(0,num);
    
    let arr2 = arr1.reduce(function(prev, cur) {
      return prev + cur
      }, 0);
    
    alert(arr2);
  }
  
sumElements ([4,2,5,7], 3)

2. https://edabit.com/challenge/3ymGugubc4gTfcqcR?fbclid=IwAR0_v3GwRR9M7IExhFP67JfMrbF3Yn5Fcrifi1gZuhO21KSQlcHc0plYvZc

function isSubset(arr1,arr2) {

    if((arr1.every(val => arr2.includes(val))) == true) {
      return alert(true)
    } else {
      return alert(false)
    }
}

isSubset([3, 2, 5], [5, 3, 7, 9, 2]);
isSubset([1, 2], [3, 5, 9, 1]);

3. https://edabit.com/challenge/h7LTMAFeNz79rXB2Y?fbclid=IwAR2yvzc1d8Nb7l-3NRvB5ulSJMpovEtZCOEmP31pugnHKV1BK61svz0wszk

function spellTheWord(word) {

    let arr = [];
    let temp = ``;
  
    for (let i=0; i<word.length; i++) {
      temp = temp + word.slice(i,i+1)
      arr.push(temp)
    }
  
    return alert(arr)
  }
  
  spellTheWord(`eagerly`)

4. https://edabit.com/challenge/Gpy2qSFnfhGJnWMMj?fbclid=IwAR2hYt_4r5jFU5agGx1F788EaSeEXNIAMIxt9oe7LUgTE1oMY3vi8F9h2NE

function findLargestNums(arr) {
    return alert(arr.map(element => element.sort((a, b) => b - a)[0]));
}

findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])

5. https://edabit.com/challenge/aMyRSjKakeDauFfkX?fbclid=IwAR1BonKvZlV27o07jaOI_AGaV4SSXq6pxo9My4ixtnUd_7CGzL6NLptmjwM

function canNest(arr1,arr2) {

    if(Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2)) {
      return alert(true)
    } else {
      return alert(false)
    }
}

canNest([1, 2, 3, 4], [0, 6])
canNest([9, 9, 8], [8, 9])

6. https://edabit.com/challenge/Akgh37c6dccEsNBt6?fbclid=IwAR0BQzUWs9-VtVmVg4v-rXSVO4Vn3bpXeD6GwaRD_nDFDWgYx3qspnsOlCM

//-----