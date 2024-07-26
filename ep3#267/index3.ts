function gRade(Hw:number, md:number, fn:number){//สร้างฟั่งชั่นการคูณเลขโดยกำหนดตัวแปรและใส่ประเภท และสร้างสูตร
    let score: number = Hw + md + fn //ใส่ตัวแปร score โดยหาจาก Hw,md,fn(เป็นตัวแปร) เพิ่มตัวเลขเข้าไป
    if (score < 50){ // ใส่ if แล้วสร้างวงเล็บโดยตั้งว่าถ้าคะแนนหรือผลัพธ์ต่ำกว่า 50 เป็น เกรด F
        return "Grade F" // หากคำตอบได้น้อยกว่า 50 จริงให้ประกาศว่า เกรด F
    } else if (score < 60){ // หากคะแนน มากกว่า 50 < 60 if แล้วสร้างวงเล็บโดยตั้งว่าถ้าคะแนนหรือผลัพธ์ต่ำกว่า 60 เป็น เกรด D
        return "Grade D"
    } else if (score < 70){ // หากคะแนน มากกว่า 60 < 70 if แล้วสร้างวงเล็บโดยตั้งว่าถ้าคะแนนหรือผลัพธ์ต่ำกว่า 70 เป็น เกรด C
        return "Grade C"
    } else if (score < 80){ // หากคะแนน มากกว่า 70 < 80  if แล้วสร้างวงเล็บโดยตั้งว่าถ้าคะแนนหรือผลัพธ์ต่ำกว่า 80 เป็น เกรด B
        return "Grade B"
    } else { // หากคะแนน มากกว่า 80 ขึ้นไปให้ใส่เกรด A
        return "Grade A"
    }
}

console.log(gRade(40,30,30)) // ทำการประมวลผลลัพธ์โดยใส่ตัวแปรเข้าไปโดยตรง
// มี input,output

function helloworld() {
    console.log("สวัสดี")
}

helloworld() //ฝั่งชั่นไม่มี input / output

function helloname(name: string) {
    console.log(name)
}

console.log(helloname ('X'))//ฝั่งชั่นมี input ไม่มี output

function getPi() {
    return 3.14
}

console.log(getPi()) //ฝั่งชั่นไม่มี input แต่มี output

function ST(fname:string,sname:string) {
    if(fname === 'Mix' && sname === 'zane') {
        console.log('เริ่มสอน')
    } else {
        console.log('ไม่สอน')
    }
}

ST('Mix', 'zane')

function stadY(aname:string,bname:string,cname:string) {
    if(!(aname === 'miX' || bname === 'Zane')&& cname === 'forth') {
        console.log("เริ่มสอนได้")
    } else {
        console.log("ไม่สอนแล้วจร้า")
    }
}

stadY('miX','Zane','forth')

function    plaYerWW3(sex:string, heiGht:number, weight:number) {
    if(sex === 'Man' && (heiGht > 170 || (weight > 50 && weight <= 110))) {
        console.log("ต้องจับใบดำใบแดง")
    } else {
        console.log("ไม่เข้าเกณฑ์")
    }

}

plaYerWW3('Man',179,86)

function diGitalwaLleT(age:number, salary:number, TotaLdeposit:number ){
    if (age >= 16 && salary <= 70000 && TotaLdeposit < 500000) {
        console.log("รับเงินจากนายก 10,000 บาทถ้วน")
    } else {
        console.log("ไว้จนและอายุเยอะกว่านี้นะ")
    }
}

diGitalwaLleT(18,20000,68000) 
