function SinhVien(_maSV, _tenSV, _email, _pass, _date, _khoaHoc, _diemToan, _diemLy, _diemHoa) {
    this.maSV = _maSV;
    this.tenSV = _tenSV;
    this.email = _email;
    this.pass = _pass;
    this.date = _date;
    this.khoaHoc = _khoaHoc;
    this.diemToan = _diemToan;
    this.diemLy = _diemLy;
    this.diemHoa = _diemHoa;
    this.diemTB = 0;

    this.tinhDTB = function () {
        this.diemTB = (parseFloat(this.diemToan) +
            parseFloat(this.diemLy) +
            parseFloat(this.diemHoa)) /
            3;
    };
}