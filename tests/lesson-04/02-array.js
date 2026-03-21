// let monHoc = ["Toán", "Lý", "Hoá", "Anh", "Tin"];

// console.log(monHoc[5]);
// // Lấy độ dài array

// console.log(monHoc.length); // 5
// console.log(monHoc[monHoc.length - 1]);

// monHoc[1] = "Giáo dục công dân";
// console.log(monHoc);

// const danhSach = ["Phong", "Uyên"];
// danhSach.push("Duc");
// console.log(danhSach); // ["Phong", "Uyên", "Duc"]

const danhSach = ["Phong", "Uyên"];

// Thêm vào cuối
danhSach.push("Phong");
console.log(danhSach);

// Xoá ở cuối
const phanTuBiXoa = danhSach.pop();
console.log(danhSach);

// Thêm ở đầu
danhSach.unshift("Hương Anh");
console.log(danhSach);

// Xoá ở đầu
danhSach.shift();
console.log(danhSach);