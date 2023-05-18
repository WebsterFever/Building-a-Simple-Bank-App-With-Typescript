// const user = {
//     name: 'webster',
//     age:32,
//     ShowName(){
//         console.log(this.name)
//     }
// }

// const otherUser ={
//     name:'Joao',
//     age: 28,
//     showName(){
//         console.log(this.name)
//     }
// }

// user.ShowName()
// otherUser.showName()

class User {
  name: string = "Webs";
  age: number = 32;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  showName = () => {
    console.log(this.name);
  };
}

const user = new User("Webs", 32);

user.showName();

const otherUser = new User("Joao", 28);
otherUser.showName();
