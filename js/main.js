function getEle(id) {
    return document.getElementById(id);
};
var dssv = new DanhSachSinhVien();
getLocalStorage()
// function layThongTinNguoiNhap() {
//     var _maSV = getEle("txtMaSV").value;
//     var _tenSV = getEle("txtTenSV").value;
//     var _email = getEle("txtEmail").value;
//     var _pass = getEle("txtPass").value;
//     var _date = getEle("txtNgaySinh").value;
//     var _khoaHoc = getEle("khSV").value;
//     var _diemToan = getEle("txtDiemToan").value;
//     var _diemLy = getEle("txtDiemLy").value;
//     var _diemHoa = getEle("txtDiemHoa").value;
//     var sinhVien = new SinhVien(_maSV, _tenSV, _email, _pass, _date, _khoaHoc, _diemToan, _diemLy, _diemHoa);
// };
function themSinhVien(event) {
    event.preventDefault();
    var _maSV = getEle("txtMaSV").value;
    var _tenSV = getEle("txtTenSV").value;
    var _email = getEle("txtEmail").value;
    var _pass = getEle("txtPass").value;
    var _date = getEle("txtNgaySinh").value;
    var _khoaHoc = getEle("khSV").value;
    var _diemToan = getEle("txtDiemToan").value;
    var _diemLy = getEle("txtDiemLy").value;
    var _diemHoa = getEle("txtDiemHoa").value;
    var sinhVien = new SinhVien(_maSV, _tenSV, _email, _pass, _date, _khoaHoc, _diemToan, _diemLy, _diemHoa);
    sinhVien.tinhDTB();
    dssv.themSinhVien(sinhVien);
    taobang(dssv.arr);
    setLocalStorage();
    console.log(sinhVien);
};
//tạo bảng
function taobang(arr) {
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
            <button class="btn btn-danger" onclick="xoaSinhVien('${arr[i].maSV}')">xóa</button>
            <button class="btn btn-info" onclick="suaSinhVien('${arr[i].maSV}')">sửa</button>
        </td>
        </tr>
    `;
    }
    getEle("tbodySinhVien").innerHTML = content;
};
//xóa sinh viên
function xoaSinhVien(maSV) {
    dssv.xoaSinhVien(maSV);
    taobang(dssv.arr);
    setLocalStorage();
};
//sữa sinh viên
function suaSinhVien(maSV) {
    getEle("btnCapNhat").style.display = "inline-block";
    var laySinhVien = dssv.layThongTinSinhVien(maSV);
    getEle("txtMaSV").value = laySinhVien.maSV;
    getEle("txtMaSV").disabled = true;
    getEle("txtTenSV").value = laySinhVien.tenSV;
    getEle("txtEmail").value = laySinhVien.email;
    getEle("txtPass").value = laySinhVien.pass;
    getEle("txtNgaySinh").value = laySinhVien.date;
};
function setLocalStorage() {
    var arrString = JSON.stringify(dssv.arr);
    localStorage.setItem("DSSV", arrString);
};
function getLocalStorage() {
    if (localStorage.getItem("DSSV")) {
        dssv.arr = JSON.parse(localStorage.getItem("DSSV"));
        taobang(dssv.arr);
    };
};