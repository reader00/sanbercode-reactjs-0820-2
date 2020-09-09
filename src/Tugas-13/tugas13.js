import React, { useState, useEffect } from "react";
import axios from "axios";

const TableBaruBuah = () => {
  const [dataBuah, setDataBuah] = useState(null);
  const [input, setInput] = useState({
    id: -1,
    name: "",
    price: "",
    weight: "",
  });

  useEffect(() => {
    if (dataBuah === null) {
      axios
        .get(`http://backendexample.sanbercloud.com/api/fruits`)
        .then((res) => {
          setDataBuah(res.data);
          console.log(res.data);
        });
    }
  }, [dataBuah]);

  const submitHandler = (event) => {
    event.preventDefault();
    var idBuah = parseInt(input.id);

    var name = input.name;
    var price = input.price;
    var weight = parseInt(input.weight);
    if (idBuah !== -1) {
      var newDataBuah = dataBuah.map((el) => {
        if (el.id === idBuah) {
          el.name = name;
          el.price = price;
          el.weight = weight;
        }
        return el;
      });
      setDataBuah([...newDataBuah]);
      setInput({ id: -1, name: "", price: "", weight: "" });
      axios
        .put(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`, {
          name,
          price,
          weight,
        })
        .then((res) => {
          console.log(res.status);
        });
    } else {
      var newData = { name, price, weight };
      setDataBuah([...dataBuah, newData]);
      setInput({ id: -1, name: "", price: "", weight: "" });

      axios
        .post(`http://backendexample.sanbercloud.com/api/fruits`, {
          name,
          price,
          weight,
        })
        .then((res) => {
          console.log(res);
        });
    }
  };

  const inputChangeNama = (event) => {
    setInput({
      id: input.id,
      name: event.target.value,
      price: input.price,
      weight: input.weight,
    });
  };

  const inputChangeHarga = (event) => {
    setInput({
      id: input.id,
      name: input.name,
      price: event.target.value,
      weight: input.weight,
    });
  };

  const inputChangeBerat = (event) => {
    setInput({
      id: input.id,
      name: input.name,
      price: input.price,
      weight: event.target.value,
    });
  };

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
    <div className="wraper-table-buah">
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
      <div className="input-wraper">
        <form onSubmit={submitHandler}>
          <table>
            <tbody>
              <tr>
                <td>Nama</td>
                <td>
                  <input
                    required="required"
                    value={input.name}
                    onChange={inputChangeNama}
                    type="text"
                  />
                </td>
              </tr>
              <tr>
                <td>Harga</td>
                <td>
                  <input
                    required="required"
                    value={input.price}
                    onChange={inputChangeHarga}
                    type="text"
                  />
                </td>
              </tr>
              <tr>
                <td>Berat</td>
                <td>
                  <input
                    required="required"
                    value={input.weight}
                    onChange={inputChangeBerat}
                    type="text"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <button index={input.id} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TableBaruBuah;
