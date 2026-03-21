// let sinhVienA = {
//   hoTen: "Nguyễn Văn ABC",
//   tuoi: 20,
//   lop: "WEB01"
// };

// console.log(sinhVienA.hoTen);
// console.log(sinhVienA.tuoi);
// console.log(sinhVienA.lop);

  // let lesson ={
  //   name: "Duc",
  //   address: "HCM",
  //   isLoveBadmition: false
  // }
  // console.log(lesson.address);


  // let lesson1 = new Object();
  // lesson1.name = "Duc A";
  // lesson1.address = "HCM A";  
  // lesson1.isLoveBadmition = false;
  // console.log(lesson1.address);
  // console.log(lesson1["name"]);

  const myClass = {
    name: "K22"
  };
console.log(myClass); // { "name": K22}

myClass["major"] = "Playwright";
myClass.language = "TypeScript";
console.log(myClass); // { name: "K22", major: "Playwright", language: "TypeScript"}

myClass.name = "K23";
console.log(myClass); // { name: "K23", major: "Playwright", language: "TypeScript"}

delete myClass.language;
console.log(myClass); // { name: "K23", major: "Playwright"}