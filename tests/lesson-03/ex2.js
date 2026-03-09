const height=163 //cm
let idealWeight = (height-100)*9/10
let maxWeight = height-100
let minWeight = (height-100)*8/10
if (height>100 && height<200){
    console.log(`Cân nặng lý tưởng: ${idealWeight} kg, Cân nặng tối đa: ${maxWeight} kg, Cân nặng tối thiểu: ${minWeight} kg`);
}else{
    console.log("Chiều cao không áp dụng cho công thức");   
}