class phanso{
    private tu: number;
    private mau: number;

    constructor(t: number, m: number){
        this.tu = t;
        this.mau = m;
    }

    get tuso(){
        return this.tu;
    }

    set tuso(value: number){
        this.tu = value;
    }

    get mauso(){
        return this.mau;
    }

    set mauso(value: number){
        this.mau = value;
    }

    cong(ps2: phanso){
        return `Tổng của 2 phần số`; 
    }
    tru(ps2: phanso){
        return `Hiệu của 2 phần số`; 
    }
    nhan(ps2: phanso){
        return `Tích của 2 phần số`; 
    }
    chia(ps2: phanso){
        return `Chia của 2 phần số`; 
    }

    tong(ps1: phanso, ps2: phanso): phanso{
        let tong: phanso = new phanso(0,0);
        tong.tuso = ps1.tuso * ps2.mauso + ps2.tuso * ps1.mauso;
        tong.mauso = ps1.mauso * ps2.mauso;
        return tong;
    }
}

let ps1: phanso = new phanso(1,2);
let ps2: phanso = new phanso(3,4);
console.log(ps1.tuso);
console.log(ps1.mauso);
console.log(ps2.tuso);
console.log(ps2.mauso);
console.log(ps1.cong(ps2));
console.log(ps1.tru(ps2));
console.log(ps1.nhan(ps2));
console.log(ps1.chia(ps2));

let ps3 = ps1.tong(ps1, ps2);
console.log(ps3);
console.log(`${ps3.tuso}/${ps3.mauso}`); // 10/8

