import React, { useState } from "react";
import "../Styles/Periodic.scss";
import PeriodicServivemain from "../Components/PeriodicServivemain";
import ACService from "../Components/ACService";
import Batteries from "../Components/Batteries";
import TyresAndWheel from "../Components/TyresAndWheel";
import DentingAndPainting from "../Components/DentingAndPainting";
import car_cart from "../assets/car_cart.png";
import car_fixed from "../assets/car_fixed.png";

function PeriodicService() {
  const [activeComponent, setActiveComponent] = useState("PeriodicService");

  const handleClick = (component) => {
    setActiveComponent(component);
  };
  const getTabClassName = (componentName) => {
    return componentName === activeComponent ? "active-tab" : "";
  };
  return (
    <div className="Periodic" id="Periodic">
      <div className="periodic-heading">
      <span className={getTabClassName("PeriodicService")} onClick={() => handleClick("PeriodicService")}>
          Periodic Service
        </span>
        <span className={getTabClassName("ACService")} onClick={() => handleClick("ACService")}>
          AC Service & Repair
        </span>
        <span className={getTabClassName("Batteries")} onClick={() => handleClick("Batteries")}>Batteries</span>
        <span className={getTabClassName("TyresAndWheel")} onClick={() => handleClick("TyresAndWheel")}>Tyres & Wheel</span>
        <span className={getTabClassName("DentingAndPainting")} onClick={() => handleClick("DentingAndPainting")}>
          Denting & Painting
        </span>
      </div>
      <div className="Periodic-content">
        {activeComponent === "PeriodicService" && <PeriodicServivemain />}
        {activeComponent === "ACService" && <ACService />}
        {activeComponent === "Batteries" && <Batteries />}
        {activeComponent === "TyresAndWheel" && <TyresAndWheel />}
        {activeComponent === "DentingAndPainting" && <DentingAndPainting />}
      </div>

      <div className="card-car">
        <img src={car_fixed} alt="" />
        <div className="card-car-span">
          <span>Mercedes Maybach</span>
          <span>Change</span>
        </div>
        <img src={car_cart} alt="" />
        <p>Go ahead and book a service for your car.</p>

      </div>
    </div>
  );
}

export default PeriodicService;
