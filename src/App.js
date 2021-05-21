import CenterCard from "./CenterCard";
import "antd/dist/antd.css";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        // backgroundColor: "lightblue",
      }}
    >
      <div
        style={{
          marginBottom: "20px",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        This is Home
      </div>
      <CenterCard />
    </div>
  );
}

export default App;
