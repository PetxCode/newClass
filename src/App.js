import React from "react";
import MakePayment from "./Payment/MakePayment";
import "antd/dist/antd.css";
import ViewPayment from "./Payment/ViewPayment";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <MakePayment />
    </div>
  );
};

export default App;
