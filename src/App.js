import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Form Pembelian Buah</h1>
        <form action="">
          <table>
            <tr>
              <td className="tName">
                <b>Nama Pelanggan</b>
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
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
          </table>
          <button type="submit">Kirim</button>
        </form>
      </div>
    </div>
  );
}

export default App;
