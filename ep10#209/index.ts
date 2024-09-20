// const database = [
//     {
//         email : "user@gmail.com",
//         password: "isustoo2557"
//     }
// ]


// function regidter(email: string, password: string) {
//     if (email.includes('@') && email.lastIndexOf('@')!== email.length - 1) {
//         if (password.length > 8 && password.length < 16) {
//             const userObject = {
//                 email : email,
//                 password: password
//             }
//             database.push(userObject)
//             alert("สมัครสมาชิกเสร็จสิ้น ยินดีต้อนรับ")

//         } else {
//             alert('รหัสผ่่านต้องมากกว่า 8 ตัว และไม่เกิน 16 ตัว')
//         }
//     } else {
//         alert('Email ไม่ถูกต้อง')
//     }
// }

// regidter("max@gmail.com", '123456789')


// const database = [
//     {
//         email : "user@gmail.com",
//         password: "isustoo2557"
//     },
//     {
//         email: 'cuteboys@gmail.com',
//         password: "098987876"
//     }
// ]

// function decryptPassword(password: string) {
//     return password.replaceAll("+","u").replaceAll('*','6').replaceAll('^','0')
// }

// function login(email: string, password: string) { 
//     const user = database.filter(function(element, index){
//         return element.email === email
//     })
//     if (user.length > 0 ) {
//         if(user[0].password === password){
//             alert('เข้าสู๋ระบบสำเร็จ ยินดีต้อนรับ')
//         } else {
//             alert ('รหัสผ่านไม่ถูกต้อง กรุณาตรวจสอบอีกครั้ง')
//         }
//     } else {
//         alert('ไม่พบผู้ใช้งานในระบบ')
//     }
// }

// login("cuteboys@gmail.com","098987876")