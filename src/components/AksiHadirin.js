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
    <tr>
      {/* <td></td> */}
      <td>
        <input
          type="text"
          className="form-control"
          placeholder="Edit Nama..."
          onChange={onNewNamaChanged}
        />
      </td>
      <td>
        <input
          type="text"
          className="form-control"
          placeholder="Edit Alamat..."
          onChange={onNewAlamatChanged}
        />
      </td>
      <td>
        <input
          type="text"
          className="form-control"
          placeholder="Edit Ucapan..."
          onChange={onNewUcapanChanged}
        />
      </td>
      <td className="text-center">
        <div className="btn-group">
          <button className="btn btn-warning" onClick={onUpdateClicked}>
            <i className="bi bi-pencil"></i>
          </button>
          <button className="btn btn-danger" onClick={onDeleteClicked}>
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  );
}

export default AksiHadirin;
