import React from "react";

class FormBuah extends React.Component {
  render() {
    return (
      <div className="formBuah">
        <h1>Form Pembelian Buah</h1>
        <form action="">
          <table>
            <thead>
              <tr className="tName">
                <td>Nama Pelanggan</td>
                <td>
                  <input type="text" />
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tDaftar">
                  <b>Daftar Item </b>
                </td>
                <td>
                  <input type="checkbox" value="Semangka" /> Semangka
                  <br />
                  <input type="checkbox" value="Jeruk" /> Jeruk
                  <br />
                  <input type="checkbox" value="Nanas" /> Nanas
                  <br />
                  <input type="checkbox" value="Salak" /> Salak
                  <br />
                  <input type="checkbox" value="Anggur" /> Anggur
                  <br />
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit">Kirim</button>
        </form>
      </div>
    );
  }
}

export default FormBuah;
