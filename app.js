// uyga vazifa 
//1. Ism, yosh va mamlakat xususiyatlariga ega "Person" deb nomlangan class yaratish uchun JavaScript dasturini yozing. Shaxsning tafsilotlarini ko'rsatish metodini qo'shing. Person classini ikkita nusxasini yarating va ularning tafsilotlarini ko'rsating. 

// class Person {
//     constructor(name,age,country){
//         this.name = name;
//         this.age = age;
//         this.country = country;
//     }

//     getInfo(){
//         console.log(`name: ${this.name}, age: ${this.age}, country: ${this.country}`);
//     }
// }

// let person1 = new Person("Ali","23","Uzbekistan");

// let person2 = new Person("Mikhail","26","Rossiya");

// console.log(person1.getInfo(),person2.getInfo());
//=========================================================================================================================================================================

/*2. Kenglik va balandlik xususiyatlariga ega 'Rectangle' deb nomlangan class yaratish uchun JavaScript dasturini yozing. To'rtburchaklar yuzasi va perimetrini hisoblashning ikkita usulini kiriting. 'Rectangle' classining namunasini yarating va uning yuzasini va perimetrini hisoblang. */

// class Rectangle{
//    constructor(width,height){
//      this.width = width;
//      this.height = height;
//    }

//    getArea(){
//       return this.width*this.height
//    }

//    getPerimetr(){
//     return  (this.width + this.height)*2
//  }
// }

// let rectangleInfo = new Rectangle(8,9);

// console.log("Hajmi",rectangleInfo.getArea());
// console.log("Perimetri",rectangleInfo.getPerimetr());
//=======================================================================================================================================================================

/* 3. Marka, model va yil uchun xususiyatlarga ega 'Vehicle' deb nomlangan classni yaratadigan JavaScript dasturini yozing. Avtomobil tafsilotlarini ko'rsatish usulini qo'shing. 'Avtomobil' classidan meros bo'lib o'tadigan va eshiklar soni uchun qo'shimcha mulkni o'z ichiga olgan 'avtomobil' deb nomlangan subklass yarating. Eshiklar sonini kiritish uchun displey usulini bekor qiling.*/

// class Vehicle{
//     constructor(marka,model,year){
//         this.marka = marka;
//         this.model = model;
//         this.year = year
//     }

//     getInfo(){
//         return `marka: ${this.marka}, model: ${this.model}, year: ${this.year}`
//     }
// }


// class Car extends Vehicle{
//     constructor(marka,model,year,doors){
//         super(marka,model,year);
//         this.doors = doors;
//     }

//      getInfo(){
        
//         return `${super.getInfo()}; Eshiklar soni ${this.doors}`
//      }
// }

// let car = new Car("Toyota","Corolla",2018, 4)
// console.log(car.getInfo())
//========================================================================================================================================================================

/* 4. Hisob raqami va balans xususiyatlariga ega "BankAccount" deb nomlangan.....*/

// class BankAccount{
//     constructor(accountNumber,balance){
//     this.accountNumber = accountNumber;
//     this.balance = balance
// }

//  includeMoney(amountOfmoney){
//     if(amountOfmoney > 0){
//         this.balance += amountOfmoney;
//         return `pul muvoffaqiyatli tushdi, balansingiz: ${this.balance}`
//     }else{
//         return "Pul qushilmadi"
//     }
//  }
  
//  getMoney(amountOfmoney){
//      if(amountOfmoney > 0 && amountOfmoney <=this.balance){
//         this.balance -= amountOfmoney;
//         return `Pul echildi, balansingiz: ${this.balance}`
//      }else{
//         return "Pul echilmadi"
//      }
//  }
// }

// let account1 = new BankAccount(124532,4000000);
// let account2 = new BankAccount(224532,3000000);

// console.log(account1.includeMoney(6000));
// console.log(account2.getMoney(400));

//==============================================================================================================================================================



/*5....*/

// class Shape{
//     getArea(){
//         return " hozircha bu figuraga Yuza aniqlanmadi "
//     }

// }

// class Circle extends Shape{
//     constructor(radius){
//         super();
//         this.radius = radius
//     }

//     getArea(){
//         return Math.PI*this.radius**2
//     }
// }

// class Triangle extends Shape{
//     constructor(base, height){
//         super();
//         this.base = base;
//         this.height = height
//     }

//     getArea(){
//         return 0.5*this.base*this.height;
//     }
// }

// let circle = new Circle(8);
// console.log("Yumaloqni yuzasi: ",circle.getArea());


// let triangle= new Triangle(8,6);
// console.log("Uchburchakni yuzasi: ",triangle.getArea());


/*6.....*/

// class Employee {
//     constructor(name,salary){
//         this.name = name;
//         this.salary =salary;
//     }

//     yearSalary(){
//      return this.salary*12;
//     }
// }

// class Manager extends Employee{
//     constructor(name,salary,role){
//         super(name,salary,role);
//         this.role = role;
//     }

//      yearSalary(){
//         let  bonus = 450
//        return (this.salary*12) + bonus
//      }

// }

// let manager1 = new Manager("Alisher",12000,"Smm");
// console.log("Alisher' oyligi va bonusi: ",manager1.yearSalary());

// let manager2 = new Manager("Otabek",13000,"Sales");
// console.log("Otabek' oyligi va bonusi: ", manager2.yearSalary());
//============================================================================================================================

/*7...*/

// class Book {
//     constructor(name,author,year){
//         this.name = name;
//         this.author = author;
//         this.year = year;
//     }

//     getInfo(){
//         return `Name: ${this.name}, Author: ${this.author}, Year: ${this.year}`
//     }
// }

// class Ebook extends Book{
//     constructor(name,author,year,price){
//         super(name,author,year);
//         this.price = price;
//     }

//     getInfo(){
//         return `${super.getInfo()}, Price: ${this.price}`
//     }
// }

// let ebook1 = new Ebook("Atomic Habbits","James Clear",2018, 1200);
//  console.log(ebook1.getInfo());

//========================================================================================================================================================================



/*8....*/
// class Animal{
//     constructor(type,sound){
//         this.type= type;
//         this.sound =sound;
//     }

//     soundOfAnimal(){
//         return `${this.type} makes ${this.sound} sound`
//     }
// }

// class Dog extends Animal{
//     constructor(type,sound,color){
//         super(type,sound);
//         this.color = color;
//     }
//     soundOfAnimal(){
        
//         return `${super.soundOfAnimal()} Color: ${this.color}`
//     }
// }

// let dogjon = new Dog("ALabay","Gav-Gav-Gav","Black");
// console.log(dogjon.soundOfAnimal());

/*9....*/

// class Bank {
//     constructor(name,branches){
//       this.name = name;
//       this.branches = branches;
//     }

//     inputBank(amount){
//         if(amount > 0){
//            return  `Umumiy filliallar soni kupaydi: ${this.branches+=amount}`
//         }else{
//             return "FIllial ochilmagan"
//         }
//     }

//     excludeBank(amount){
//         if(amount > 0 && amount <= this.branches ){
//            return  `Umumiy filliallar soni kamaydi: ${this.branches-=amount}`
//         }else{
//             return "FIllial yopilmagan"
//         }
//     }
// }

// let bank1 =new Bank("Asaka",8);
// let bank2 =new Bank("Ipoteka",8);
// console.log(bank1.inputBank(2));
// console.log(bank2.excludeBank(3));
//=========================================================================================================================================================================


/*10... */

// class Product {
//     constructor(id,name,price){
//         this.id = id;
//         this.name = name;
//         this.price = price;
//     }

//     overallPrice(amount){
//      return amount*this.price
//     }
// }

// class PersonalCareProduct extends Product{
//     constructor(id,name,price,garantee){
//         super(id,name,price);
//         this.garantee = garantee;
//    }
   
//    overallPrice(amount){
//     let overall = super.overallPrice(amount);
//     return `Garantee with price is  ${this.garantee} :${overall}`
//    }

// }

// let product1 = new PersonalCareProduct("234","Phone",1200,"1Year");

// console.log(product1.overallPrice(3));


