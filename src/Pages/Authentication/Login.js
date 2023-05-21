import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <div className="d-flex pt-4">
        <div className="w-50 pe-lg-4">
          <p className="text-start mb-1">
            Email<span className="spanRed">*</span>
          </p>
          <input
            type="text"
            name="contactName"
            id=""
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-100 h-75 px-2 rounded-0 border-1"
          />
        </div>
        <div className="w-50 ">
          <p className="text-start mb-1 d-flex">
            Password <span className="spanRed"> *</span>
          </p>
          <input
            type="password"
            name="contactName"
            placeholder="password"
            id=""
            className="w-100 h-75 px-2 rounded-0 border-1"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
