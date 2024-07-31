function BMiTest(height: number, weight: number): string {
    let BMI_answer: number = (weight / (height * height)) ;
    if (BMI_answer < 18.50) {
        return "อยู่ในเกณฑ์น้ำหนักน้อย หุ่นผอม และมีสภาวะเสี่ยงโรคมากกว่าคนปกติ";
    } else if (BMI_answer >= 18.50 && BMI_answer <= 22.90) {
        return "อยู่ในเกณฑ์ปกติ หุ่นสมส่วน และมีความเสี่ยงต่อโรคน้อย";
    } else if (BMI_answer >= 23.00 && BMI_answer <= 24.90) {
        return "อยู่ในเกณฑ์ท้วม มีความเสี่ยงโรคระดับ 1 มีความอันตรายระดับ 1";
    } else if (BMI_answer >= 25.00 && BMI_answer <= 29.90) {
        return "อยู่ในเกณฑ์อ้วน มีความเสี่ยงโรคระดับ 2 มีความอันตรายระดับ 2";
    } else {
        return "อยู่ในเกณฑ์อ้วนมาก มีความเสี่ยงโรคระดับ 3 มีความอันตรายระดับ 3";
    }
}

console.log(BMiTest(1.75, 50)) ;