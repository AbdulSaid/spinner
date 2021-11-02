// setTimeout(() => {
//   process.stdout.write('\r|   ')
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ')
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ')
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\   ')
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ')
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ')
// },1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ')
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\   ')
// },1500);

// setTimeout(() => {
//   process.stdout.write('\r|   \n')
// }, 1700);

// refactor out and have spincycle function of its own
// create another function revolution 
// setup a loop(while or for) and condition, run the spin function synchornously everytime 

let arr = ['|  ','/  ','-  ','\\  ','|  ','/  ','-  ','\\ ']
let timer = 50
const spinCycle = () => {
  for (let i of arr) {
    setTimeout(()=> {
      process.stdout.write(`\r${i}`)
    },timer)
    timer += 500  
  }
}


spinCycle()