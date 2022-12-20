/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useDate } from "./use-date";

const item: React.CSSProperties = {
  fontFamily: "serif",
  fontSize: 20,
  listStyleType: "square",
};

export const Menu: React.FC = () => {
  const date = useDate();
  const dayOfWeek = new Date(date).getDay();

  if (dayOfWeek === 5) {
    return (
      <div>
        <h3>Fresh Fridays</h3>
        <p style={item}>A new taste adventure every week! </p>
        <br></br>
        <p
          style={{
            textAlign: "right",
          }}
        >
          <b>0.00</b>
        </p>
      </div>
    );
  }
  if (dayOfWeek === 4) {
    return (
      <div>
        <h3>"Mit und ohne"</h3>
        <p style={item}>Herzhafte Kebabs aus ehrlichem Handwerk</p>
        <br></br>
        <ul style={{ marginLeft: 20 }}>
          <li style={item}>Planted Chicken Döner</li>
          <li style={item}>Freshly baked bread</li>
          <li style={item}>Oriental style available</li>
        </ul>
        <p
          style={{
            textAlign: "right",
          }}
        >
          <b>0.00</b>
        </p>
      </div>
    );
  }
  if (dayOfWeek === 3) {
    return (
      <div>
        <h3>"Fu Lin"</h3>
        <p style={item}>Experience the flavors of China in a cozy setting</p>
        <br></br>
        <ul style={{ marginLeft: 20 }}>
          <li style={item}>Authentic Tofu and rice dishes</li>
          <li style={item}>Satay or Szechuan Art</li>
        </ul>
        <p
          style={{
            textAlign: "right",
          }}
        >
          <b>0.00</b>
        </p>
      </div>
    );
  }
  if (dayOfWeek === 2) {
    return (
      <div>
        <h3>"Pasta Bazaar"</h3>
        <p style={item}>Delicious pasta dishes from all over the world!</p>
        <br></br>

        <ul style={{ marginLeft: 20 }}>
          <li style={item}>Penne Urs</li>
          <li style={item}>Spaghetti Hansueli</li>
          <li style={item}>Risotto Julia</li>
        </ul>
        <p
          style={{
            textAlign: "right",
          }}
        >
          <b>0.00</b>
        </p>
      </div>
    );
  }
  if (dayOfWeek === 1) {
    return (
      <div>
        <h3>"Roots of Himalaya"</h3>
        <p style={item}>
          Authentic Tibetan momos, straight from the roof of the world!
        </p>
        <br></br>

        <ul style={{ marginLeft: 20 }}>
          <li style={item}>Beef</li>
          <li style={item}>Gruyère and Spinach (Vegetarian)</li>
          <li style={item}>Soja and cabbage (Vegan)</li>
        </ul>
        <p
          style={{
            textAlign: "right",
          }}
        >
          <b>0.00</b>
        </p>
      </div>
    );
  }

  return null;
};
