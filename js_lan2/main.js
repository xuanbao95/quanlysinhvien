function getEle(id) {
    return document.getElementById(id);
};
var dssv = new DanhSachSinhVien();
getLocalStorage()
function layThongTinNguoiNhap() {
    var _maSV = getEle("txtMaSV").value;
    var _tenSV = getEle("txtTenSV").value;
    var _email = getEle("txtEmail").value;
    var _pass = getEle("txtPass").value;
    var _date = getEle("txtNgaySinh").value;
    var _khoaHoc = getEle("khSV").value;
    var _diemToan = getEle("txtDiemToan").value;
    var _diemLy = getEle("txtDiemLy").value;
    var _diemHoa = getEle("txtDiemHoa").value;
    var isvalid = true;
    if (_maSV === "") {
        getEle("spanMaSV").innerHTML = "vui lòng nhập";
        isvalid = false;
    } else {
        getEle("spanMaSV").innerHTML = "";
        isvalid = true;
    }
    if (isvalid = true) {
        var sinhVien = new SinhVien(_maSV, _tenSV, _email, _pass, _date, _khoaHoc, _diemToan, _diemLy, _diemHoa);
        return sinhVien;
    };
    return null;
};
function themSinhVien(event) {
    event.preventDefault();
    var sinhVien = layThongTinNguoiNhap();
    sinhVien.tinhDTB();
    dssv.themSinhVien(sinhVien);
    taoBang(dssv.arr);
    setLocalStorage();

};
function xoaSinhVien(maSV) {
    dssv.xoaSinhVien(maSV);
    taoBang(dssv.arr);
    setLocalStorage();
};
function suaSinhVien(maSV) {
    var sinhVien = dssv.layThongTinSinhVien(maSV);
    getEle("btnCapNhat").style.display = "inline";
    getEle("txtMaSV").value = sinhVien.maSV;
    getEle("txtMaSV").disabled = true;
    getEle("txtTenSV").value = sinhVien.tenSV;
    getEle("txtEmail").value = sinhVien.email;
    getEle("txtPass").value = sinhVien.pass;
    getEle("txtNgaySinh").value = sinhVien.date;
    getEle("khSV").value = sinhVien.khoaHoc;
    getEle("txtTenSV").value = sinhVien.tenSV;
};
getEle("btnCapNhat").addEventListener("click", function () {
    var sinhVien = layThongTinNguoiNhap();
    sinhVien.tinhDTB();
    dssv.capNhat(sinhVien)
    taoBang(dssv.arr);
    setLocalStorage();
});
function resetForm() {
    getEle("formSV").value = "";
    getEle("btnCapNhat").style.display = "none";
    getEle("txtMaSV").disabled = false;
};
getEle("txtSearch").addEventListener("keyup", function () {
    var keyWord = getEle("txtSearch").value;
    var mangTimKiem = dssv.timKiem(keyWord);
    taoBang(mangTimKiem);
});
function taoBang(arr) {
    var content = "";
    for (var i = 0; i < arr.length; i++) {
        content += `
            <tr>
                <td>${arr[i].maSV}</td>
                <td>${arr[i].tenSV}</td>
                <td>${arr[i].email}</td>
                <td>${arr[i].date}</td>
                <td>${arr[i].khoaHoc}</td>
                <td>${arr[i].diemTB}</td>
                <td>
                    <button class="btn btn-danger" onclick="xoaSinhVien('${arr[i].maSV}')">xoa</button>  
                    <button class="btn btn-info" onclick="suaSinhVien('${arr[i].maSV}')">sua</button>  

                </td>
            </tr>
        `
    };
    getEle("tbodySinhVien").innerHTML = content;
}
function setLocalStorage() {
    var arrString = JSON.stringify(dssv.arr);
    localStorage.setItem("DSSV", arrString);
};
function getLocalStorage() {
    if (localStorage.getItem("DSSV")) {
        dssv.arr = JSON.parse(localStorage.getItem("DSSV"));
        taoBang(dssv.arr);
    };
};