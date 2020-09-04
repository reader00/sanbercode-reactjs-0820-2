import React from "react";

let dataHargaBuah = [
  { nama: "Semangka", harga: 10000, berat: 1000 },
  { nama: "Anggur", harga: 40000, berat: 500 },
  { nama: "Strawberry", harga: 30000, berat: 400 },
  { nama: "Jeruk", harga: 30000, berat: 1000 },
  { nama: "Mangga", harga: 30000, berat: 500 },
];

class TableBuah extends React.Component {
  render() {
    return (
      <div className="tableBuah">
        <h1> Tabel Harga Buah</h1>
        <table className="tableBuah-tb">
          <thead>
            <td>
              <b>Nama</b>
            </td>
            <td>
              <b>Harga</b>
            </td>
            <td>
              <b>Berat</b>
            </td>
          </thead>
          {dataHargaBuah.map((db) => {
            return (
              <tbody>
                <td>{db.nama}</td>
                <td>{db.harga}</td>
                <td>{Number(db.berat) / 1000} kg</td>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  }
}

export default TableBuah;
