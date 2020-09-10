import React, { useContext } from "react";
import { BuahContext } from "./context";
import axios from "axios";

const BuahForm = () => {
  const { dataBuah, setDataBuah, input, setInput } = useContext(BuahContext);
  // const [input] = useContext(BuahContext);
  // const [setInput] = useContext(BuahContext);

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
    setInput({ ...input, name: event.target.value });
  };

  const inputChangeHarga = (event) => {
    setInput({ ...input, price: event.target.value });
  };

  const inputChangeBerat = (event) => {
    setInput({ ...input, weight: event.target.value });
  };
  return (
    <>
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
    </>
  );
};

export default BuahForm;
