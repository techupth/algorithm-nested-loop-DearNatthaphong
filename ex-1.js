// ให้สร้าง Function printPattern Function นี้จะรับตัวเลขเข้ามา 1 ตัว แล้วแสดงผลลัพธ์ตามตัวเลขที่ได้รับมา เช่น ถ้าตัวเลขที่รับมาคือ 5 จะได้ผลลัพธ์ดังนี้
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// เริ่มเขียนโค้ดตรงนี้
function printPattern(number) {
  let rowList = '';

  for (let i = 0; i < number; i++) {
    let row = '';

    for (let j = 0; j <= i; j++) {
      row += `${j + 1} `;
    }

    rowList += row + '\n';
  }

  return rowList;
}

console.log(printPattern(5));
