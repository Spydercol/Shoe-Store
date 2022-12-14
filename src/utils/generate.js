export const generateTodos = (n=500) => {
    const todos = []
    for (let i=0; i< n;i++){
        todos.push(generateTodo())
    }
    return todos
}
const generateTodo = () =>({
    id: getRandomString(),
    name: names[getRandomName()],
    description1: word1[getRandomWord()],
    description2: word2[getRandomName()] ,
    color: colors[getRandomColor()],
    price: getRandomPrise(),
    rating: getRandomRating(),
    imageUrl: urls[getRandomColor()]
})

const names = ['Кеды', 'Кроссовки', 'Ботинки', 'Лоферы', 'Туфли', 'Полусапоги'];
const word1 = ['искусственной', 'натуральной'];
const word2 = ['резины', 'замши', 'меха','нубука','войлока','текстиля'];
const colors = ['Синий', 'Красный', 'Зеленый', 'Голубой', 'Фиолетовый', 'Желтый', 'Черный', 'Белый', 'Розовый', 'Серый'];
const urls = ['https://a.allegroimg.com/s1024/0c6cb6/112f11a044029b97c9725d610519', 'https://cdn2.mygazeta.com/i/2014/02/42.jpg', 'https://cache3.youla.io/files/images/780_780/5d/57/5d577bb2074b3e6c3359dfd6.jpg', 'https://alimentola.info/uploads/posts/2021-11/1637092025_107-alimentola-info-p-loferi-zhenskie-na-platforme-devushka-kras-120.jpg', 'https://img.alicdn.com/imgextra/i4/78870369/TB23vcnbFXXXXbFXpXXXXXXXXXX-78870369.jpg', 'https://brandpresent.ru/shop/project/1000/BP_6840.30_1_tif_1000x1000.jpg', 'https://worklass.ru/upload/medialibrary/852/ou9yetbs015wjpzetoutnaff0g82odit.jpg', 'https://www.lesacoutlet.it/dimgs/ARC_39090_1_Z_40326/stivaletti-timberland.jpg', 'https://r98.biz/upload/iblock/e4a/e4ad532f23b4ab2fe410c17b15dd012d.jpg', 'http://afourcustom.ru/image/catalog/easy-item/139/hiker-1-hs-mocco-2-jpg-2.jpg'];

const getRandomName = () =>
    Math.floor(Math.random() * names.length)

const getRandomWord = () =>
    Math.floor(Math.random() * word1.length)

const getRandomColor = () =>
    Math.floor(Math.random() * colors.length)

const getRandomPrise = () =>
    Math.floor(Math.random() * 1000)

const getRandomRating = () =>
Math.floor( Math.random()*100)/10

const getRandomString = () =>
    Math.random().toString(36).slice(2) 

