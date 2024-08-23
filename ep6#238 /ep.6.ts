//การทำลูป
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
// console.log("Loop ended");
// //การคูณลูป 
// let sum: number = 0

// for (let i =1; i <= 365; i++) {
//     sum = sum + i 
// }

// console.log("Total:", sum)

// // การทำ ลูป รับตัวแปร เงื่อนไขจำนวนรอบ เก็บรอบ

// let sum: number = 0
// let i : number = 1

// while (i <= 31) {
//     sum = sum + i
//     i++
// }

// console.log('toTal: ', sum)

// let sum: number = 0
// let i : number = 1

// do {
//     sum = sum + i
//     i++
// } while (i <= 31) 

// console.log('total: ' , sum)

// // ระวัง -- // จำทำให้มีปัญหา

// let count: number = 0


// while (true) { 
//     console.log ('rrt')
//     count++
// if (count === 10) {
//     break
// }

// // count++
// //if (count === 10) {
// //    break

for (let i = 1; i <= 4; i++) {
    console.log('ฉันอายุ'+ i + 'ปี')
  }
  
  
  let x: number = 1
  while (x <= 5) {
    console.log("ผมอยู๋บนโลกนี้มา"+ x + "ปีแล้วละ")
    x++
  }
  
  let c: number = 1
  do {
    console.log("อยากโดน" + c + "ทีครับ")
    c++
} while (c <= 6)

    // let car1: string = 'Toyota'
// let car2: string = 'Honda'
// let car3: string = 'Suzuki'
// let car4: string = 'Yamaha'
// let car5: string = 'mazda'

// const cars: string[] = ['toyota','yamha','nissan','BMW']
// const carsd: number[] = [1,2,3,4,5,6,7,8,9]
// const carsdf: Boolean[] = [true,false,false]

// console.log (car3)

//------------
// const cars: string[] = ['toyota','yamha','nissan','BMW']

// console.log(cars[0])

//  const cars: string[] = ['toyota','yamha','nissan','BMW']

// cars[1] = 'Audi'

// for(let i = 0; i < 5; i++) {
//   console.log(cars[i])

// }

// const cars: string[] = ['toyota','honda','suzuki','yamaha','Mazda']



// for (let i = 0; i < cars.length; i++) {
//    if (cars[i] === 'yamaha') {
//     console.log('รถซื้อแกง จะไปแรงได้ยังไง')
//  }
//}


// console.log(cars.indexOf('t'))


const friendsName: string[] = ['Forth','Time','Flim','Kon','Bell']

for (let i = 0; i < friendsName.length; i++) {
  if (friendsName[i] === 'Bell') {
    console.log('ไปตีแบดไหม?')
  } else if (friendsName[i] === 'Time') {
    console.log('เล่นบอร์ดเกมไหม?')
  }
} 


const numBer: number[] = [1,2,3,4,5,6,7,8,9,10]

for (let i = 1; i <= 10; i++ ) {
  if (numBer[i] === 3 || numBer[i] === 5 || numBer[i] === 7) {
    numBer [i] = (0)
  }

}

console.log(numBer)