

class Demo{
  constructor(name,age){
    this.name  = name;
    this.age = age;
  }
  sing(){
    console.log('我爱唱歌');
  }
}

const {sing} = new Demo()
sing()

function a (name){
  this.name = name
}


