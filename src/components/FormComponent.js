import React, { useState } from "react";
import "./FormComponent.css";

export default function FormComponent() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorRePassword, setErrorRePassword] = useState("");
  const [userNameColor, setUserNameColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [rePasswordColor, setRePasswordColor] = useState("");

  const validateform = (e) => {
    // ບໍ່ຣີເຊັດຟອມເວລາກົດ submit
    e.preventDefault();

    if (userName.length > 8) {
      setUserName("");
      setUserNameColor("green");
    } else {
      setErrorUserName("ປ້ອນຊື່ຜຸ້ໃຊ້ຈຳນວນໜ້ອຍກວ່າ 8 ຕົວອັກສອນ");
      setUserNameColor("red");
    }
    if (email.includes("@")) {
      setEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("ຮູບແບບອີເມວບໍ່ຖືກຕ້ອງ");
      setEmailColor("red");
    }
    if (password.length >= 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("ປ້ອນລະຫັດຜ່ານຫຼາຍກວ່າ 8 ຕົວອັກສອນ");
      setPasswordColor("red");
    }
    if (rePassword !== "" && rePassword === password) {
      setErrorRePassword("");
      setRePasswordColor("green");
    } else {
      setErrorRePassword("ລະຫັດຜ່ານບໍ່ກົງກັນ");
      setRePasswordColor("red");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={validateform}>
        <h2>ແບບຟອມລົງທະບຽນ</h2>
        <div className="form-control">
          <label>ຊື່ຜູ້ໃຊ້</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={{ borderColor: userNameColor }}
          />
          <small style={{ color: userNameColor }}>{errorUserName}</small>
        </div>
        <div className="form-control">
          <label>ອີເມວ</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderColor: emailColor }}
          />
          <small style={{ color: emailColor }}>{errorEmail}</small>
        </div>
        <div className="form-control">
          <label>ລະຫັດຜ່ານ</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderColor: passwordColor }}
          />
          <small style={{ color: emailColor }}>{errorPassword}</small>
        </div>
        <div className="form-control">
          <label>ຍືນຍັນລະຫັດຜ່ານ</label>
          <input
            type="password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            style={{ borderColor: rePasswordColor }}
          />
          <small style={{ color: emailColor }}>{errorRePassword}</small>
        </div>
        <button type="submit">ລົງທະບຽນ</button>
      </form>
    </div>
  );
}
