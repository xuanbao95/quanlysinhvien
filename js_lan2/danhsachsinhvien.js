function DanhSachSinhVien() {
    this.arr = [];
    this.themSinhVien = function (sv) {
        this.arr.push(sv);
    };
    this.timViTri = function (maSV) {
        var viTri = -1;
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i].maSV === maSV) {
                viTri = i;
                break;
            };

        };
        return viTri;
    };
    this.xoaSinhVien = function (maSV) {
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i].maSV === maSV) {
                this.arr.splice(i, 1);
                break;
            };
        };

    };
    this.layThongTinSinhVien = function (maSV) {
        var viTri = this.timViTri(maSV);
        for (var i = 0; i < this.arr.length; i++) {
            if (viTri !== -1) {
                return this.arr[viTri];
            }
        }
    };
    this.capNhat = function (SV) {
        var viTri = this.timViTri(SV.maSV);
        if (viTri !== -1) {
            return this.arr[viTri] = SV;
        };
    };
    this.timKiem = function (keyWord) {
        var mangTimKiem = [];
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i].tenSV.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1) {
                mangTimKiem.push(this.arr[i]);
            };
        };
        return mangTimKiem;
    };
};