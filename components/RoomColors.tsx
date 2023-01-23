import React from "react";

const row: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  fontWeight: "bold",
  fontSize: 20,
};

const Key: React.FC<{
  keyRingColor: string;
}> = ({ keyRingColor }) => {
  return (
    <div style={row}>
      <div
        style={{
          height: 50,
          width: 50,
          backgroundColor: "silver",
          borderRadius: 500,
          border: "8px solid " + keyRingColor,
        }}
      >
        <div
          style={{
            height: 12,
            width: 12,
            backgroundColor: "white",
            borderRadius: 7.5,
            marginTop: 11,
            marginLeft: 8,
          }}
        ></div>
      </div>
      <div
        style={{
          height: 20,
          width: 65,
          backgroundColor: "silver",
          marginRight: 20,
          marginLeft: -10,
          borderTopRightRadius: 30,
          borderBottomRightRadius: 30,
        }}
      ></div>
    </div>
  );
};

export const RoomColors: React.FC = () => {
  return (
    <div>
      <div style={row}>
        <Key keyRingColor="orange"></Key>
        Second office
      </div>
      <br></br>
      <div style={row}>
        <Key keyRingColor="#000"></Key>
        Manufactory
      </div>
      <br></br>
      <div style={row}>
        <Key keyRingColor="transparent"></Key>
        Fun Room
      </div>
    </div>
  );
};
