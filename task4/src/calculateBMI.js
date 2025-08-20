export function calcBMI(w,h){
    const hM = h / 100;
    const bmi = w / (hM * hM);
    return bmi;
}
export function dispCat(){
    if (bmi < 18.5) return "Underweight";
    if (bmi >= 18.5 && bmi < 24.9) return "Normal";
    if (bmi >= 25 && bmi < 29.9) return "Overweight";
    return "Obese";
}