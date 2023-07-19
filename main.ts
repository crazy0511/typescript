let str = 'Tôi là phạm quang tú';
let a: string;
let b: number;
let c: boolean;
// any: là bất cứ loại nào
let d: any;
// string array
let e: string[] = ['1', '2', '3'];
let f: null;
let g: undefined;
let h: void;

// enum = enumeration (một tập hợp các giá trị được định danh với các tên gọi riêng biệt)
enum Color{
    Red = 'màu đỏ',
    Green = 'màu xanh lục',
    Blue = 'màu xanh dương'
};

enum Film{
    PhimMoi,
    PhimMoii,
    PhimChill
}

let red = Color.Red;
// console.log(red);

let film = Film.PhimMoi;
// console ra chỉ số 0,1,2,...
// console.log(film);

// TypeAssertion: Type Assertion là một kỹ thuật trong TypeScript cho phép bạn tạm thời khai báo kiểu dữ liệu của một biến hoặc một biểu thức, 
// bất kể TypeScript đã xác định kiểu dữ liệu của chúng là gì.
// Cast
let cast: any = ['Phạm Quang Tú'];
// console.log((<string[]>cast).length);
// console.log((cast as string[]).length);

let str2: string[] = ['Phạm', 'Quang', 'Tú'];
// Method: push
str2.push('new string');
// Method: length
console.log('Độ dài của chuỗi str2: length =', str2.length);
// Method: join
let str_join: string = str2.join(" - ");
console.log('Chuỗi str sau khi join:', str_join);
// Method: slice (tách chuỗi)
console.log(str2.slice(1, 3));
// Method: concat (nối chuỗi)
let str3: string[] = ['không', 'có', 'ny']; 
str2 = str2.concat(str3);
console.log(str2);
// Method: keys
console.log(Array.from(str2.keys()));
// Method: map (trả về string[])
let str_map = str2.map((str) => {
    return `${str} love you`;
})
console.log(str_map);
// Method: forEach (giống map) (trả về void)
let str_forEach = str2.forEach((str) => {
    console.log(str + " love zata");
})
console.log("--------------------");
let str_number: number[] = [1,2,3,4,5];
let str_number_forEach = str_number.forEach((number) => {
    console.log(`${number} là số`);
})
console.log("--------------------"); 
// Method: filter (trả về number[])
let str_filter = str_number.filter((value, index, array) =>{
    return value;
})
console.log(str_filter);
// Method: every (nếu đúng hết thì là true)
let str_every = str_number.every(value => value % 2 !== 0)
console.log(str_every);
// Method: some (chỉ cần đúng 1 thì true)
let str_some = str_number.some(value => value % 2 === 0);
console.log(str_some);
// Method: find (phần tử đầu tiên thỏa mãn)
let str_find = str_number.find(value => value % 2 === 0);
console.log(str_find);
// Method: shift, unshift 
let str_shift = str_number.shift();
console.log('Phần tử đầu', str_shift);
let str_unshift = str_number.unshift();
console.log('Phần tử áp cuối', str_unshift);




