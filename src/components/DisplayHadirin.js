import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHadirin } from "../features/hadirinSlice";
import AksiHadirin from "./AksiHadirin";

function DisplayHadirin() {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.hadirin);

  useEffect(() => {
    dispatch(getHadirin());
  }, []);

  return (
    <div className="mt-3">
      <h1>Daftar Hadir Ondangan</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="col-1 text-center">ID</th>
            <th>Nama</th>
            <th>Alamat</th>
            <th>Ucapan Untuk Mempelai</th>
            <th className="col-2 text-center">Aksi</th>
          </tr>
        </thead>

        {value.map((val) => {
          return (
            <tbody key={val.id}>
              <tr>
                <td className="text-center" rowSpan="2">
                  {val.id}
                </td>
                <td>{val.nama}</td>
                <td>{val.alamat}</td>
                <td>{val.ucapan}</td>
                <td className="text-center">
                  {/* <button type="button" className="btn btn-sm btn-primary">
                    <i className="bi bi-chevron-down"></i>
                  </button> */}
                </td>
              </tr>
              <AksiHadirin
                id={val.id}
                nama={val.nama}
                alamat={val.alamat}
                ucapan={val.ucapan}
              />
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default DisplayHadirin;
