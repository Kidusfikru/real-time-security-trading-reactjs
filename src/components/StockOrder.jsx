import React, { useEffect, useState } from "react";
import Header from "../utils/Header";
import SecurityInput from "./SecurityInput";
import Amount from "./Amount";
import { Container, Paper, CircularProgress, Typography } from "@mui/material";
import { fetchStockData } from "../services/api";
import { toast } from "react-toastify";

const StockOrder = () => {
  const [stockData, setStockData] = useState(null);
  const [selectedTradeType, setSelectedTradeType] = useState("");
  const [selectedSecurityType, setSelectedSecurityType] = useState("");
  const [price, setPrice] = useState(null);
  const [share, setShare] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchStockData("IBM");
        setStockData(data);
      } catch (error) {
        toast.error("Error fetching stock data");
      }
    };

    fetchData();
  }, []);

  if (!stockData) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
        }}
      >
        <CircularProgress color="primary" />
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1))",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={6}
          sx={{
            padding: "20px",
            marginTop: "20px",
            backgroundColor: "black",
          }}
        >
          <Header title="Stock Order" />
          <SecurityInput
            data={stockData}
            selected={selectedTradeType}
            setSelected={setSelectedTradeType}
            selectedSecurityType={selectedSecurityType}
            setSelectedSecurityType={setSelectedSecurityType}
            share={share}
            setShare={setShare}
          />
          <Amount
            data={stockData}
            price={price}
            setPrice={setPrice}
            share={share}
            setShare={setShare}
            selected={selectedTradeType}
            setSelected={setSelectedTradeType}
            selectedSecurityType={selectedSecurityType}
            setSelectedSecurityType={setSelectedSecurityType}
          />
        </Paper>
      </Container>
    </div>
  );
};

export default StockOrder;
