import React from "react";

<<<<<<< HEAD
export default function Input({label,type,name, data, handle, styles}) {
  return (
    <>
      <label>{label}</label><br></br>
      <input style={styles} onChange={handle} name={name} value={data.name} data={data} className={label.split(" ")[0]}type={type}></input><br></br>
=======
export default function Input({ label, type, name, data, handle }) {
  return (
    <>
      <label>{label}</label>
      <br></br>
      <input
        onChange={handle}
        name={name}
        value={data.name}
        data={data}
        className={label.split(" ")[0]}
        type={type}
      ></input>
      <br></br>
>>>>>>> 3f9943d6445620785d0792b93a60070acabb60bc
    </>
  );
}
