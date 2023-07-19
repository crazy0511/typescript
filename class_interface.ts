// interface: chỉ để khai báo các đối tượng thành 1 nhóm chung
// Vi phạm luật cohesion (tính gắn kết giữa các thuộc tính và phương thức)
// Hạn chế sử dụng
// interface Point {
//     x: number,
//     y: number
// }

// let drawPoint = (point: Point) =>{
//     console.log(`Vẽ 1 điểm có tọa độ x = ${point.x} và y = ${point.y}`);
// }
// drawPoint({
//     x: 1,
//     y: 2
// })

// let removePoint = (point: Point) =>{
//     console.log(`Xóa 1 điểm có tọa độ x = ${point.x} và y = ${point.y}`);
// }
// removePoint({
//     x: 1,
//     y: 2
// })

// let getDistance = (A: Point, B: Point) => {
//     let AB = Math.sqrt(Math.pow(A.x - B.x,2) + Math.pow(A.y - B.y,2));
//     console.log('Khoảng cách AB = ', AB);
// }
// getDistance({x:2, y:4}, {x: -1, y: 0});

// class
// Access Modifiers: Public, Private, Protect
// Getters và Setters
class Point{
    private x: number;
    private y: number;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    drawPoint = () =>{
    console.log(`Vẽ 1 điểm có tọa độ x = ${this.x} và y = ${this.y}`);
    }   
    
    // Chỉ xem
    get X(){
        return this.x;
    }
    set X(value: number){
        if(value < 0){
            throw new Error("Không nhận số âm");
        }
        this.x = value;
    }
}

let point: Point = new Point(1,2);
point.drawPoint();
console.log(point.X);
point.X = 100;
point.drawPoint();


