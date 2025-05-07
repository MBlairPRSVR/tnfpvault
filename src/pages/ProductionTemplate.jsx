import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import PrintLabel from "../components/PrintLabel";
import { Typography, CircularProgress } from "@mui/material";
import "./ProductionTemplate.css";

const ProductionTemplate = () => {
  const [templateData, setTemplateData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTemplateData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "templates"));
        const data = querySnapshot.docs.map((doc) => doc.data());
        setTemplateData(data);
        setLoading(false);  // Stop loading once data is fetched
      } catch (err) {
        console.error("Error fetching template data:", err); // Logs the error
        setError("Error fetching template data");  // Display a user-friendly error
        setLoading(false);  // Stop loading in case of an error
      }
    };
  
    fetchTemplateData();
  }, []);  // Empty dependency array ensures this runs only once after component mounts
  

  return (
    <div className="production-wrapper">
      <div className="production-container">
        {loading ? (
          <>
            <CircularProgress />
            <Typography className="production-status" variant="body1">
              Loading template data...
            </Typography>
          </>
        ) : error ? (
          <Typography className="production-status error" variant="body1">
            {error}
          </Typography>
        ) : (
          <>
            <Typography variant="h4" className="production-header" gutterBottom>
              Production Run Template
            </Typography>
            {templateData.length > 0 ? (
              <PrintLabel templateData={templateData} />
            ) : (
              <Typography className="production-status" variant="body1">
                No template data available.
              </Typography>
            )}
            <button
              className="production-print-button"
              onClick={() => window.print()}
            >
              Print Template Manually
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductionTemplate;
