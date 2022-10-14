import React, { useState } from "react";
import Input from "./Input";

export default function Right() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm: "",
    phonenumber: "",
  });

  function update(event) {
    const { name, value } = event.target;
    setData((oldvalue) => {
      return {
        ...oldvalue,
        [name]: value,
      };
    });
  }
<<<<<<< HEAD
  console.log(data)
  const styling = {
    borderColor: ((data.confirm != "" || data.password!="")&& data.confirm == data.password) ? "green" : "red"
  }
=======

>>>>>>> 3f9943d6445620785d0792b93a60070acabb60bc
  return (
    <article className="right">
      <div>
        <p className="pfisrt">
          This is not real online service!You know you need something like this
          in your life to help you realixe your deppest dream. sign up now to
          get started.
        </p>
        <p>you know you want to</p>
      </div>
      <div>
        <h2>Let's do this!</h2>
        <div className="input-form">
<<<<<<< HEAD
        <div>
          <Input name="firstname" handle={update} data={data} label="FIRST NAME" type="text"/>
          <Input name="email" data={data} label= "EMAIL" type="email" />
          <Input styles={styling} name="password" handle={update} data={data} label="PASSWORD" type="password"/>
          {!((data.confirm != "" || data.password!="") && data.confirm == data.password) ? <p>*password does not match</p>:
          <p className='match'>password does match</p>}
        </div>
        <div>
        <Input name="lastname" data={data} label="LAST NAME" type="text"/>
        <Input name="phonenumber" data={data} label="PHONE NUMBER" type="text"/>
        <Input styles={styling} name="confirm" handle={update} data={data} label="CONFIRM PASSWORD" type="password"/>
        </div>
=======
          <div>
            <Input
              name="firstname"
              handle={update}
              data={data}
              label="FIRST NAME"
              type="text"
            />
            <Input
              name="email"
              data={data}
              label="EMAIL"
              handle={update}
              type="email"
            />
            <Input
              name="password"
              handle={update}
              data={data}
              label="PASSWORD"
              type="password"
            />
            <p>*password does not match</p>
          </div>
          <div>
            <Input
              name="lastname"
              data={data}
              handle={update}
              label="LAST NAME"
              type="text"
            />
            <Input
              name="phonenumber"
              data={data}
              handle={update}
              label="PHONE NUMBER"
              type="text"
            />
            <Input
              name="confirm"
              handle={update}
              data={data}
              label="CONFIRM PASSWORD"
              type="password"
            />
          </div>
>>>>>>> 3f9943d6445620785d0792b93a60070acabb60bc
        </div>
      </div>
      <div>
        <button onClick={() => console.log(data)}>Create Account</button>
      </div>
    </article>
  );
}
