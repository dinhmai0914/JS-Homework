/* Baì tập 05 tính tổng 2 ký số

1.Đầu vào
+ nhập số có 2 chữ số

2. Xử lý
+ tách số hàng đơn vị, chia 10 lấy phần dư
+ tách số hàng chục, chia 10 và làm tròn xuống */


var number, ten, unit, result;
number=45;
ten=number%10;
unit=number/10;
unit=Math.floor(unit);
result=ten+unit;
console.log(result);
