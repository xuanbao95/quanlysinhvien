function DanhSachSinhVien() {
    this.arr = [];
    this.themSinhVien = function (sv) {
        this.arr.push(sv);
    };
    this.timViTri = function (maSV) {
        var viTri = -1;
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i] === maSV) {
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
        if (viTri !== -1) {
            //tìm thấy sinh viên
            return this.arr[viTri];
        }
    };
    this.capNhatSinhVien = function (sv) {
        var viTri = this.timViTri(sv.maSV);
        if (viTri !== -1) {
            this.arr[viTri] = sv;
        }
    }
};