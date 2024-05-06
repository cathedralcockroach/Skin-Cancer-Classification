import React from "react";
import './patientinfo.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Nav from "../Header/Nav";
import { useNavigate } from "react-router-dom";

const PatientInfo = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/Home");
  };

  return (
    <div className="patientInfo">
      <Header />
      <Nav />
      <form className="form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <div className="inputBox">
              <input type="text" name="firstname" required="required" />
              <span className="text">First Name</span>
              <span className="line"></span>
            </div>
          </div>
          <div className="col">
            <div className="inputBox">
              <input type="text" name="lastname" required="required" />
              <span className="text">Last Name</span>
              <span className="line"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="inputBox">
              <input type="text" name="email" required="required" />
              <span className="text">Patient ID</span>
              <span className="line"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="submit" className="btn">
              login
            </button>
          </div>
        </div>
      </form>
      <Footer/>
    </div>
  );
};

export default PatientInfo;
