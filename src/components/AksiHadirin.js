import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteHadirin, updateHadirin } from "../features/hadirinSlice";

function AksiHadirin(props) {
  const [newNama, setNewNama] = useState(props.nama);
  const [newAlamat, setNewAlamat] = useState(props.alamat);
  const [newUcapan, setNewUcapan] = useState(props.ucapan);
  const dispatch = useDispatch();
  const onNewNamaChanged = (e) => setNewNama(e.target.value);
  const onNewAlamatChanged = (e) => setNewAlamat(e.target.value);
  const onNewUcapanChanged = (e) => setNewUcapan(e.target.value);

  const onUpdateClicked = () => {
    dispatch(
      updateHadirin({
        id: props.id,
        nama: newNama,
        alamat: newAlamat,
        ucapan: newUcapan,
      })
    );
  };

  const onDeleteClicked = () => {
    dispatch(deleteHadirin({ id: props.id }));
  };

  return (
    <td colSpan={5}>
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Edit Nama..."
                onChange={onNewNamaChanged}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Edit Alamat..."
                onChange={onNewAlamatChanged}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Edit Ucapan..."
                onChange={onNewUcapanChanged}
              />
            </div>
          </div>
        </div>
        <div className="col-2 text-center">
          <div className="btn-group">
            <button className="btn btn-warning" onClick={onUpdateClicked}>
              <i className="bi bi-pencil"></i>
            </button>
            <button className="btn btn-danger" onClick={onDeleteClicked}>
              <i className="bi bi-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </td>
  );
}

export default AksiHadirin;
