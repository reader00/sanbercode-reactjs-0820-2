import React from "react";

class TableBuahBaru extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBuah: [
        { nama: "Semangka", harga: 10000, berat: 1000 },
        { nama: "Anggur", harga: 40000, berat: 500 },
        { nama: "Strawberry", harga: 30000, berat: 400 },
        { nama: "Jeruk", harga: 30000, berat: 1000 },
        { nama: "Mangga", harga: 30000, berat: 500 },
      ],
      index: -1,
      inputNama: "",
      inputHarga: "",
      inputBerat: "",
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    var index = this.state.index;

    var nama = this.state.inputNama;
    var harga = this.state.inputHarga;
    var berat = this.state.inputBerat;
    if (this.state.index !== -1) {
      var newDataBuah = this.state.dataBuah;
      newDataBuah[index] = { nama, harga, berat };
      this.setState({
        daftarBuah: [...newDataBuah],
        index: -1,
        inputNama: "",
        inputHarga: "",
        inputBerat: "",
      });
    } else {
      var newData = { nama, harga, berat };

      this.setState({
        dataBuah: [...this.state.dataBuah, newData],
        inde: -1,
        inputNama: "",
        inputHarga: "",
        inputBerat: "",
      });
    }
  };

  inputChangeNama = (event) => {
    this.setState({ inputNama: event.target.value });
  };

  inputChangeHarga = (event) => {
    this.setState({ inputHarga: event.target.value });
  };

  inputChangeBerat = (event) => {
    this.setState({ inputBerat: event.target.value });
  };

  editData = (event) => {
    var index = event.target.value;
    var data = this.state.dataBuah[index];
    var inputNama = data.nama;
    var inputHarga = data.harga;
    var inputBerat = data.berat;
    this.setState({ inputNama, inputHarga, inputBerat, index });
  };

  deleteData = (event) => {
    var index = event.target.value;
    var newData = this.state.dataBuah;
    newData.splice(index, 1);
    this.setState({ dataBuah: [...newData] });
  };

  render() {
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
              {this.state.dataBuah.map((db, index) => {
                return (
                  <tr key={index}>
                    <td>{db.nama}</td>
                    <td>{db.harga}</td>
                    <td>{Number(db.berat) / 1000} kg</td>
                    <td>
                      <button value={index} onClick={this.editData}>
                        Edit
                      </button>
                      <button value={index} onClick={this.deleteData}>
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
          <form onSubmit={this.submitHandler}>
            <table>
              <tbody>
                <tr>
                  <td>Nama</td>
                  <td>
                    <input
                      required="required"
                      value={this.state.inputNama}
                      onChange={this.inputChangeNama}
                      type="text"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Harga</td>
                  <td>
                    <input
                      required="required"
                      value={this.state.inputHarga}
                      onChange={this.inputChangeHarga}
                      type="text"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Berat</td>
                  <td>
                    <input
                      required="required"
                      value={this.state.inputBerat}
                      onChange={this.inputChangeBerat}
                      type="text"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <button index={this.state.index} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default TableBuahBaru;
