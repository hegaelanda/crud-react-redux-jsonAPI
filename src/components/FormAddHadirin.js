import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addHadirin } from "../features/hadirinSlice";

function FormAddHadirin() {
  const dispatch = useDispatch();
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [ucapan, setUcapan] = useState("");

  //   const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const onNamaChanged = (e) => setNama(e.target.value);
  const onAlamatChanged = (e) => setAlamat(e.target.value);
  const onUcapanChanged = (e) => setUcapan(e.target.value);

  const onSavePostClicked = () => {
    if (nama && alamat && ucapan) {
      return dispatch(addHadirin({ nama, alamat, ucapan }));
    }
    return alert("Belum diisi semua!");
  };

  return (
    <form className="mt-3">
      <h1>Tambah Daftar Tamu</h1>
      <div className="row">
        <div className="mb-3 col">
          <label htmlFor="inputNama" className="form-label">
            Nama
          </label>
          <input
            type="text"
            className="form-control"
            id="inputNama"
            placeholder="Tambah Nama..."
            required
            onChange={onNamaChanged}
          />
        </div>
        <div className="mb-3 col">
          <label htmlFor="inputAlamat" className="form-label">
            Alamat
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAlamat"
            placeholder="Tambah Alamat..."
            required
            onChange={onAlamatChanged}
          />
        </div>
        <div className="mb-3 col">
          <label htmlFor="inputUcapan" className="form-label">
            Ucapan Untuk Mempelai
          </label>
          <input
            type="text"
            className="form-control"
            id="inputUcapan"
            placeholder="Tambah Ucapan..."
            required
            onChange={onUcapanChanged}
          />
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={onSavePostClicked}>
        Submit
      </button>
    </form>
  );
}

export default FormAddHadirin;
