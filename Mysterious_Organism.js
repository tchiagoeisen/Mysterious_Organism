// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}


const pAequorFactory = (specimenNum , dna) =>{
  return{
    specimenNum,
    dna,

    mutate() {
      let newFirstBase = returnRandBase();
      console.log(`NewFirstBase = ${newFirstBase}`);//----->checkpoint
      console.log(`DNA[0] = ${dna[0]}`);//----->checkpoint

      while (dna[0] === newFirstBase){        
        newFirstBase = returnRandBase()
        console.log(`NewFirstBase = ${newFirstBase}`);//----->checkpoint
      };

      dna[0] = newFirstBase;   
      
      console.log('DNA:');//----->checkpoint
      return dna
    },

    compareDNA(compareDNA) {
      console.log('CompareDNA:')
      console.log(compareDNA.dna);//----->checkpoint
      let counterSameBase = 0;

      for(let i = 0; i < compareDNA.dna.length; i++)
      {
         if(compareDNA.dna[i] === dna[i])
           {
             console.log(dna[i])//----->checkpoint
             counterSameBase++;
           };
      };

        const resultDNA = (counterSameBase / compareDNA.dna.length) *100;
        console.log('SameBase = ' + counterSameBase);//----->checkpoint
        console.log('% = ' + resultDNA.toFixed());//----->checkpoint

        console.log('\n'+ `Specimen ${specimenNum} and specimen ${compareDNA.specimenNum} have ${resultDNA.toFixed()}% DNA in common.`);
      },

    willLikelySurvive(){
      //console.log('');//----->checkpoint
      let counterCG = 0;
      for(let i = 0; i < dna.length; i++)
      {
        if(dna[i] === 'C' || dna[i] === 'G')
        {
          //console.log(dna[i]);//----->checkpoint
          counterCG++;
        }
      }
      console.log('\n' + 'CounterCG = ' + counterCG);//----->checkpoint
      console.log('WillLikelySurvive = ' + ((counterCG / dna.length) *100).toFixed() + '%');//----->checkpoint
      return ((counterCG / dna.length) *100 >= 60 ? true : false)
    },

    complementStrand(){
      let complementStrand = [dna];
      let complementDNA = [];

      for( let i = 0; i < dna.length; i++){
         switch(complementStrand[0][i]){
           case 'A':
           complementDNA.push('T');
           break;
           case 'T':
           complementDNA.push('A');
           break;
           case 'C':
           complementDNA.push('G');
           break;
           case 'G':
           complementDNA.push('C');
           break;
           default:
           console.log('Something went wrong...');
           break;
         }     
      }
      complementStrand.push(complementDNA);
      console.log(complementStrand);
   }
  }
};

let dna = pAequorFactory(1,mockUpStrand());//----->checkpoint
console.log(dna.mutate());
//console.log(dna.dna);//----->checkpoint
dna.compareDNA(pAequorFactory(2, mockUpStrand()));//----->checkpoint
console.log(dna.willLikelySurvive());//----->checkpoint
console.log('\n' + 'ComplementStrand from DNA:');//----->checkpoint
dna.complementStrand();//----->checkpoint

////////////////////////////////////////////////

//Create 30 instances of pAequor

/*console.log('\n' + '30 instances of pAequor that can survive in their natural environment:');//----->checkpoint

let survive = [];
let surviveNum = 1;

while(survive.length < 30){
  let dnaSurvice = pAequorFactory(surviveNum,mockUpStrand());
  if (dnaSurvice.willLikelySurvive() === true){
    survive.push(dnaSurvice);
    surviveNum++;
  }
};

for(let i = 0; i < survive.length; i++){
  console.log('\n' + survive[i].specimenNum); 
  console.log(survive[i].dna);
}*/


/* //checkpoint

NewFirstBase = G
DNA[0] = T
DNA:
[
  'G', 'G', 'G', 'T',
  'A', 'G', 'T', 'G',
  'G', 'T', 'C', 'A',
  'G', 'A', 'T'
]
CompareDNA:
[
  'G', 'T', 'A', 'C',
  'G', 'T', 'G', 'T',
  'C', 'T', 'T', 'A',
  'G', 'A', 'A'
]
G
T
A
G
A
SameBase = 5
% = 33

Specimen 1 and specimen 2 have 33% DNA in common.

CounterCG = 8
WillLikelySurvive = 53%
false

ComplementStrand from DNA:
[
  [
    'G', 'G', 'G', 'T',
    'A', 'G', 'T', 'G',
    'G', 'T', 'C', 'A',
    'G', 'A', 'T'
  ],
  [
    'C', 'C', 'C', 'A',
    'T', 'C', 'A', 'C',
    'C', 'A', 'G', 'T',
    'C', 'T', 'A'
  ]
]

*/