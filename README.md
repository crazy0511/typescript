Hôm nay, ngày 18/07/2023, bắt đầu học lại Angular
1. Học về TypeScript cơ bản
a. Cài đặt
- Trước đó, cài node 
- Cài đặt TypeScript: npm install typescript
- Cấu hình TypeScript: npx tsc --init. Tạo ra "tsconfig.json"
    + "target": "es2016", 
    + "module": "es2015", 
- Tạo TS mới: touch main.ts 
- Chuyển từ TS sang JS: npx tsc
- Run code Js: node main.js
- npm start: cài trong package.json
    "scripts": {
        "start": "tsc && node main.js"
    }

b. Data Type
- Normal Variable: number, string, boolean, any, null, undefined, void
- Enum (Enumeration): liệt kê các giá trị được định danh với tên gọi riêng biệt
- Array Method: 
    + push, pop: thêm, xóa phẩn tử cuối
    + length: đếm số phần tử 
    + some, every: true - 1 phần tử thỏa mãn/ tất cả thỏa mãn
    + map: quét qua all phẩn tử -> []
    + forEach: quét qua all phẩn tử -> void
    + filter: lọc theo điều kiện -> []
    + join:
    + slice: chọn phần tử theo khoảng [a, b]
    + concat: nối
    + find: phần tử đầu tiên thỏa mãn điều kiện
- 