import React from "react";
import "./styles.css";
import { useState } from "react";

const carBrand = {
  Hyundai: [
    { name: "Creta", rating: "4/5" },
    { name: "Verna", rating: "4.7/5" },
    { name: "Venue", rating: "5/5" },
    { name: "Aura", rating: "4.2/5" },
    { name: "Santro", rating: "3.5/5" },
    { name: "i20", rating: "4.7/5" }
  ],

  Honda: [
    { name: "City", rating: "5/5" },
    { name: "Jazz", rating: "4.4/5" },
    { name: "Amaze", rating: "5/5" },
    { name: "All New City", rating: "4.1/5" },
    { name: "WR-V", rating: "4.5/5" },
    { name: "HR-V", rating: "4.7/5" }
  ],

  MarutiSuzuki: [
    { name: "Swift", rating: "5/5" },
    { name: "Baleno", rating: "4.4/5" },
    { name: "Ertiga", rating: "5/5" },
    { name: "Alto", rating: "4.1/5" },
    { name: "DZIRE", rating: "4.5/5" },
    { name: "Wagon R", rating: "4.7/5" }
  ],

  volkswagen: [
    { name: "Tigun", rating: "5/5" },
    { name: "Polo", rating: "4.4/5" },
    { name: "Vento", rating: "5/5" },
    { name: "T-ROC", rating: "4.1/5" },
    { name: "Virtus", rating: "4.5/5" }
  ],

  Toyota: [
    { name: "Fortuner", rating: "5/5" },
    { name: "Glanza", rating: "4/5" },
    { name: "Innova Crysta", rating: "5/5" },
    { name: "Yaris", rating: "4.7/5" },
    { name: "Camry", rating: "4.5/5" },
    { name: "Vellfire", rating: "4.8/5" }
  ]
};

export default function App() {
  const [selectedBrand, setBrand] = useState("Toyota");

  function ClickHandler(brand) {
    setBrand(brand);
  }
  return (
    <div className="App">
      <h1>Car Linkz 🚗</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Check here the rating of most used cars from famous brand{" "}
      </p>

      <div>
        {Object.keys(carBrand).map((brand) => (
          <button
            onClick={() => ClickHandler(brand)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {brand}
          </button>
        ))}
      </div>

      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {carBrand[selectedBrand].map((cars) => (
            <li
              key={cars.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {cars.name} </div>
              <div style={{ fontSize: "smaller" }}> {cars.rating} </div>
            </li>
          ))}
        </ul>
      </div>

      <footer>
        <p>Developed by Arpita </p>
      </footer>
    </div>
  );
}
