// ให้สร้าง Function multiplicationTable Function นี้จะรับตัวเลขเข้ามา 1 ตัว แล้วแสดงตารางสูตรคูณตั้งแต่ 1 จนถึงตัวเลขที่ใส่เข้ามา หรือก็คือแสดงสูตรคูณขนาน n x n เช่น ถ้า n เป็น 5 จะได้ผลลัพธ์ดังนี้
// 1   2   3   4   5
// 2   4   6   8  10
// 3   6   9  12  15
// 4   8  12  16  20
// 5  10  15  20  25

// เริ่มเขียนโค้ดตรงนี้
function multiplicationTable(number) {
  let rowList = '';

  for (let i = 1; i < number + 1; i++) {
    let row = '';

    for (let j = 1; j < number + 1; j++) {
      let multiplyResult = i * j;
      let maxNumberLength = (number * number).toString().length;

      if (maxNumberLength === multiplyResult.toString().length) {
        row += `${multiplyResult}   `;
      } else {
        row += `${multiplyResult}    `;
      }
    }

    rowList += row + '\n';
  }

  return rowList;
}

console.log(multiplicationTable(5));
console.log(multiplicationTable(6));
console.log(multiplicationTable(7));
