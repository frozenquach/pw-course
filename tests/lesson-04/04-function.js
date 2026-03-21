// function tinhDienTich(a, b) { // parameters
//     const dienTich = a * b;
//     console.log(`Square root of ${a}, ${b} là ${dienTich}`);
// }

// // tham số không cần khai báo trước rồi mới gọi à thầy?
// tinhDienTich(10, 20);
// tinhDienTich(10, 30);

function kiemTraDiem(name, score) {
    if(score>=5){
        console.log(`${name} - Đỗ - ${score} điểm`);
    } else {
        console.log(`${name} - Trượt - ${score} điểm`);
    }
}
kiemTraDiem("duc", 9);
kiemTraDiem("duc 2", 4);
kiemTraDiem("duc 3", 5);