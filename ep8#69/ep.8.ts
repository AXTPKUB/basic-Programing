const me = {
    firstname: 'uEFA',
    lastname: 'CHAMPIONSHIP',
    age: '129',
    currentaddressnumber: '2024',
    village: '1',
    road: 'utopian',
    subdistrict: 'mollow',
    district: 'Utopian177',
    province: 'tungjask77',
    zipcode: '00000',
    telephone: '9000999900',
    numberphone:'0990000',
    email: 'fifafootball1@hotmail.com',
    fan: {
            firstname: 'lisa',
            lastname: 'manoba',
            animal : {
            animaltype:"Cat",
            color : 'Red',

        }
    } ,
    friends: {
             firstName: "kittapak",
             lastName: 'LerBod',
             key: 'dekpre3',
    }


} 

me.firstname = 'ronaldo'

console.log(me.firstname + me.lastname)
console.log(me.friends.key)

const myFriends = [{
    firstname: 'Leborn',
    lastname: 'JAMES',
    age: 30 ,
    AKA : 'หล่อสุด'
 }, {
    firstname: 'jungkok',
    lastname: 'BTS',
    age: 17,
    AKA: 'มักเน่'
 }, {
    firstname: 'Rm',
    lastname: 'BTS',
    age: 28,
    AKA: 'กัปตันทำลายล้าง'
 }, {
    firstname: 'Jhope',
    lastname: 'BTS',
    age: 27,
    AKA: 'ความหวัง'
 }] 


const myFriendsAKA = myFriends.map(function(element, index) {
    return ({
        Noun: element.firstname,
        AKA: element.AKA
    })
})

const myFriendsMorethen = myFriends.filter(function(element,index) {
    return element.age <= 26 && element.lastname === 'BTS'
})

console.log(myFriendsMorethen)