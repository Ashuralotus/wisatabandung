let username = {
    user: `aditya`,
    password: `ashuralotus`
}

function login() {
    let inputUserID = document.getElementById(`inputUserID`).value;
    let inputPassword = document.getElementById(`inputPassword`).value;
    if (inputUserID === username.user && inputPassword === username.password) {
        window.location.href = `../wisatabandung/index1.html`
    } else {
        alert(`User ID atau Password Salah`)
    }
}

let data = [
    {
        no: 1,
        wisata:`Kawah Putih Ciwidey`,
        lokasi:`Ciwidey`,
        masuksitus:"https://anekatempatwisata.com/wisata-bandung-kawah-putih-ciwidey/",
    },
    {
        no: 2,
        wisata:`Orchid Forest Cikole`,
        lokasi:`Cikole`,
        masuksitus:"https://blog.bookingtogo.com/destinasi/wisata-domestik/kota-bandung/orchid-forest-cikole-lembang-review-lengkap-htm-lokasi-daya-tarik/",
    },
    {
        no: 3,
        wisata:`Taman Hutan Raya Djuanda`,
        lokasi:`Dago Pakar`,
        masuksitus:"https://id.wikipedia.org/wiki/Taman_Hutan_Raya_Ir._H._Djuanda",
    },
    {
        no: 4,
        wisata:`Tebing Keraton`,
        lokasi:`Dago Pakar`,
        masuksitus:"https://sikidang.com/tebing-keraton/",
    },
]

function readData() {
    let listwisata = document.getElementById(`list-wisata`);
    let html= ``;
    for (let i= 0; i < data.length; i++) {
        html += `
        <tr>
            <th scope="row">${data[i].no}</th>
            <td>${data[i].wisata}</td>
            <td>${data[i].lokasi}</td>
            <td>${data[i].masuksitus}</td>
            <td>
                <button type="button" class="btn btn-primary">Ubah</button>
                <button type="button" onclick="deleteData(${data[i].no})" class="btn btn-danger">Hapus</button>
        </td>
      </tr>
      `
    }
    listwisata.innerHTML = html;
}

readData();

function deleteData(no) {
    console.log(`function delete terpanggil`, no)
    let index = data.findIndex((e) => e.no === no);
    console.log(index);
    data.splice(index, 1);
    readData();
}