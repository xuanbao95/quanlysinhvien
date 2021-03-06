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
            }
        }
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
            return this.arr[viTri] = sv;
        }
    };
    //tìm kiếm sinh viên
    this.timKiemSinhVien = function (keyword) {
        /**
         * 0. tao mangTimKiem = [];
         * 1. Duyệt mảng arr
         * 2. Nếu như keyword trùng với object.tenSV
         *  => mangTimKiem thêm sinh viên dc tìm thấy
         * 3. trả về mangTimKiem
         */
        var mangTimKiem = [];
        for (var i = 0; i < this.arr.length; i++) {
            if (
                this.arr[i].tenSV.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
            ) {
                mangTimKiem.push(this.arr[i]);
            }
        }

        return mangTimKiem;
    };
};