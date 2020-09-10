import React, { useContext } from "react";
import { BuahContext } from "./context";
import axios from "axios";

const BuahList = () => {
  const [dataBuah, setDataBuah, , setInput] = useContext(BuahContext);

  const editData = (event) => {
    var idBuah = parseInt(event.target.value);
    var data = dataBuah.filter((el) => el.id === idBuah)[0];
    var name = data.name;
    var price = data.price;
    var weight = data.weight;
    setInput({ id: idBuah, name, price, weight });
  };

  const deleteData = (event) => {
    var idBuah = parseInt(event.target.value);
    var newData = dataBuah.filter((el) => el.id !== idBuah);
    console.log(newData);
    setDataBuah([...newData]);

    axios
      .delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="tableBuah">
      <h1> Tabel Harga Buah</h1>
      <table className="tableBuah-tb">
        <thead>
          <tr>
            <th>
              <b>Nama</b>
            </th>
            <th>
              <b>Harga</b>
            </th>
            <th>
              <b>Berat</b>
            </th>
            <th>
              <b>Action</b>
            </th>
          </tr>
        </thead>
        <tbody>
          {dataBuah !== null &&
            dataBuah.map((db) => {
              return (
                <tr key={db.id}>
                  <td>{db.name}</td>
                  <td>{db.price}</td>
                  <td>{db.weight / 1000} kg</td>
                  <td>
                    <button value={db.id} onClick={editData}>
                      Edit
                    </button>
                    <button value={db.id} onClick={deleteData}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default BuahList;
