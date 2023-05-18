const arrayy : Array<number> = [1,2,3,4]

const stringArrayy:string[] = ['a' , 'b' , 'c']

console.log(arrayy[1])

console.log(stringArrayy.length)

arrayy.push(5)

const buscaNum = arrayy.find(num => num ===4)

console.log(buscaNum)

arrayy.forEach(num => console.log(num))

arrayy.forEach(num =>{
    if(num > 2){
        console.log(num)
    }
})

arrayy.map(num => console.log(num))

