// ให้สร้าง Function printStar Function นี้จะรับตัวเลขเข้ามา 1 ตัว แล้วแสดงผลลัพธ์ตามตัวเลขที่ได้รับมา เช่น ถ้าตัวเลขที่รับมาคือ 5 จะได้ผลลัพธ์ดังนี้
// *
// * *
// * * *
// * * * *
// * * * * *

// เริ่มเขียนโค้ดตรงนี้
function printStar(number) {
  let rowList = '';

  for (let i = 1; i < number + 1; i++) {
    let row = '';

    for (let j = 1; j < i + 1; j++) {
      row += `* `;
    }

    rowList += row + '\n';
  }

  return rowList;
}

console.log(printStar(5));
