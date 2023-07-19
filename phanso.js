class phanso {
    constructor(t, m) {
        this.tu = t;
        this.mau = m;
    }
    get tuso() {
        return this.tu;
    }
    set tuso(value) {
        this.tu = value;
    }
    get mauso() {
        return this.mau;
    }
    set mauso(value) {
        this.mau = value;
    }
    cong(ps2) {
        return `Tổng của 2 phần số`;
    }
    tru(ps2) {
        return `Hiệu của 2 phần số`;
    }
    nhan(ps2) {
        return `Tích của 2 phần số`;
    }
    chia(ps2) {
        return `Chia của 2 phần số`;
    }
    tong(ps1, ps2) {
        let tong = new phanso(0, 0);
        tong.tuso = ps1.tuso * ps2.mauso + ps2.tuso * ps1.mauso;
        tong.mauso = ps1.mauso * ps2.mauso;
        return tong;
    }
}
let ps1 = new phanso(1, 2);
let ps2 = new phanso(3, 4);
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
