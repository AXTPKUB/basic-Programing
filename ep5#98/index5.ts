const st4r : string = 'นายอติพัฒน์ ม่วงภาษี'

console.log (st4r.slice (3,11))

const stdr : string = 'นายอติพัฒน์ ม่วงภาษี'

console.log (stdr.slice (stdr.indexOf ('ม่วงภาษี'), stdr.indexOf('ม่วงภาษี') + "ม่วงภาษี".length))

const st3r : string = 'คนไทย รักกัน พรรค ประชาชน มาแน่ แม่จร้า'

console.log(st3r.split("   "))

const stw3r : string = 'คนไทย,รักกัน,พรรค,ประชาชน,มาแน่,แม่จร้า'

console.log(stw3r.split(" , "))

const stwe3r : string = 'คนไทย,รักกัน,พรรค,ประชาชน,มาแน่,แม่จร้า'

console.log(stwe3r.replace('พรรค','พวกเรา'))

const stwer3r : string = 'คนไทย,รักกัน,พรรค,ประชาชน,มาแน่,แม่จร้า พรรค'

console.log(stwer3r.replace('พรรค','พวกเรา'))

function getPrefix(fullnaMe: string) {
    if (fullnaMe.includes('นาย')) {
     return 'นาย'
    } else if (fullnaMe.includes('นางสาว')) {
     return 'นางสาว'
    } else {
     return '_'
    } 
    
 
 }
 
 console.log(getPrefix('นาย อติพัฒน์ ม่วงภาษี'))