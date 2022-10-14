import React from "react";

export default function Input({label,type,name, data, handle, styles}) {
  return (
    <>
      <label>{label}</label><br></br>
      <input style={styles} onChange={handle} name={name} value={data.name} data={data} className={label.split(" ")[0]}type={type}></input><br></br>
    </>
  );
}
