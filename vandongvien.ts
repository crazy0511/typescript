class VanDongVien{
    private hoten: string;
    private tuoi: number;
    private monthidau: string;
    private cannang: number;
    private chieucao: number;

    constructor(hoten, tuoi, monthidau, cannang, chieucao){
        this.hoten = hoten;
        this.tuoi = tuoi;
        this.monthidau = monthidau;
        this.cannang = cannang;
        this.chieucao = chieucao;
    }

    get hoTen(){
        return this.hoten;
    }
    set hoTen(value: string){
        this.hoten = value;
    }

    get all(){
        return `
            Họ tên: ${this.hoten}
            Tuổi: ${this.tuoi}
            Môn thi đấu: ${this.monthidau}
            Cân nặng: ${this.cannang}
            Chiều cao: ${this.chieucao}
        `
    }

    sosanh(vdv: VanDongVien){
        if(this.cannang > vdv.cannang && this.chieucao > vdv.chieucao){
            return `${this.hoten} lợi thế hơn ${vdv.hoten}`;
        }
        if(this.cannang < vdv.cannang && this.chieucao < vdv.chieucao){
            return `${this.hoten} bất thế hơn ${vdv.hoten}`;
        }
        return `${this.hoten} ngang tài ngang sức với ${vdv.hoten}`;
    }
}

let Tu: VanDongVien = new VanDongVien('Phạm Quang Tú', 22, 'Cử tạ', 57, 165);
let Trang: VanDongVien = new VanDongVien('Phạm Quang Trang', 22, 'Cử tạ', 47, 145);
console.log(Tu.hoTen);
console.log(Tu.all);
console.log(Tu.sosanh(Trang));
