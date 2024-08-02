function SayHi(dayoFwEek: number) {
    if (dayoFwEek === 1) {
        console.log('สวัสดีวันอาทิตย์')
    } else if (dayoFwEek === 2) {
        console.log('สวัสดีวันจันทร์')
    }else if (dayoFwEek === 3) {
        console.log('สวัสดีวันอังคาร')
    }else if (dayoFwEek === 4) {
        console.log('สวัสดีวันพุธ')
    }else if (dayoFwEek === 5) {
        console.log('สวัสดีวันพฤหัสบดี')
    }else if (dayoFwEek === 6) {
        console.log('สวัสดีวันศุกร์')
    }else if (dayoFwEek === 7) {
        console.log('สวัสดีวันเสาร์')
    }
    
}

SayHi(7)

function SayHi2(dayOf1 : number) {
    switch (dayOf1) {
        case 1 :
            console.log('สวัสดีวันจันทร์')
            break
        case 2 :
            console.log('สวัสดีวันอังคาร')
            break
        case 3 :
            console.log('สวัสดีวันพุธ')
            break
        case 4 :
            console.log('สวัสดีวันพฤหัสบดี')
            break
        case 5 :
            console.log('สวัสดีวันศุกร์')
            break
        case 6 :
            console.log('สวัสดีวันเสาร์')
            break
        case 7 : //เครสถ้าเป็นเลข 7 
            console.log('สวัสดีวันอาทิตย์') // แสดง สวัสดีวันอาทิตย์
            break  //หยุด
        default : // ถ้าไม่ตรงสักอันให้รัน error
            console.log('error')
            break
    }
}

SayHi2(5)

function SayboDy(SizEz : string) {
    switch (SizEz) {
        case ('S') :
            console.log("ผอมจัดด")
            break
        case ('M') :
            console.log("ผอมนะเตง")
            break
        case ('L') :
            console.log("ท้วมๆอวบนะเรา")
            break
        case ('XL') :
            console.log("อ้วนแล้วนะ")
            break
        case ('2XL') :
            console.log("โคตรอ้วนนน") 
            break
        default :
            console.log("ยักษ์ป่ะนิ error")
            break
    }
}

SayboDy('2XL')

const x: number = 999999999999999 //15ตัว (โดยใส่เลขได้ไม่เกิน 15 หลักไม่เกิน)
const y: number = 9999999999999999 //16ตัว runไม่ไหวเนื่องจากไซต์ใหญ่

console.log('x',y) // runได้ปกติ
console.log('y',y) // runไม่ไหวเนื่องจากไซต์ใหญ่

const xw: number = 0.4
const yw: number = 0.2

console.log(xw + yw) 
// [LOG]: 0.30000000000000004 const xw: number = 0.1 const yw: number = 0.2
// [LOG]: 0.3 const xw: number = 0.15 const yw: number = 0.15 
// มีค่าได้ไม่เกิน17
//console.log((x * 10 + y * 10) / 10)  [LOG]: 0.3 
// [LOG]: 87 [LOG]: 87.5 const x: number = 46 const y: number = 41.5 / 41.0

//number Methods

const xe: number = 46 
console.log(xe.toString()) //  "46" string


function mAnagenumbEr(a: number) {
    const xq = a.toLocaleString()
    return xq
}


console.log(mAnagenumbEr(50000)) //[LOG]: "50,000" 

const xg: number = 1000000
console.log(xg.toLocaleString()) //[LOG]: "1,000,000" ตัวหนังสือ

function FiXedDEcimal(n: number, digit: number) {
    const x = n.toFixed(digit)
    return x
}

console.log(FiXedDEcimal(40.5698899,5)) //[LOG]: "40.56988" 

const xr: number = 46.4255555
console.log(xr.toFixed(2)) //"46.43" ตัวหนังสือ

const str: string = "i can't like Mancherter United and Harry Kane"
console.log(str.length) // [LOG]: 45

const strz: string = "ronaldo"
 //[LOG]: "r" 
// console.log(strz.charAt(1))[LOG]: "o" เริ่มจาก 0 เป็นต้นไป 

const stQr: string = "   ronaldo     "
console.log(stQr.trimStart()) //[LOG]: "ronaldo     " 

const stQAr: string = "   ronaldo     "
console.log(stQAr.trimEnd()) //"   ronaldo" 

const stAr: string = "   ronaldo     "
console.log(stAr.trim()) //[LOG]: "ronaldo" 

const stAqr: string = "  RawHand.Atipat    "
console.log(stAqr.toUpperCase()) // [LOG]: "  RAWHAND.ATIPAT    " 

const stAqer: string = "  RawHand.Atipat    "
console.log(stAqer.toLowerCase()) // [LOG]: "  rawhand.atipat    " 

function chEckSTrlength(X : string) {
    console.log(X.length)
}

chEckSTrlength('เรารักในหลวง') //[LOG]: 12

function chanelOne(hobbie : string , index : number) {
    const x = hobbie.charAt(index)
    return x
}

console.log(chanelOne('hello thailand',6)) //[LOG]: "t"

const stfr: string = 'อยากกลับบ้าน'
console.log(stfr.indexOf('ก')) //[LOG]: 3 

const rtxs: string = 'i love you so'
console.log(rtxs.includes('love')) //[LOG]: true 

const rctxs: string = 'i love you so'
console.log(rctxs.includes('suck')) //[LOG]: false

function deepDark(story: string ,sTyro : string) {
    if (story.includes(sTyro)) {
        console.log(story.indexOf(sTyro))
    } else {
        console.log("ไม่พบคำที่ค้นหา")
    }

}

deepDark('วันหนึ่งฉันเดินเข้าป่า','นอน') // ป่า = [LOG]: 19 //นอน = [LOG]: "ไม่พบคำที่ค้นหา" 