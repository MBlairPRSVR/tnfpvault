// PrintLabel.jsx

import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { Button, Paper } from '@mui/material';

const PrintLabel = ({ templateData }) => {
  const componentRef = useRef();

  return (
    <div>
      {/* Content to be printed */}
      <div ref={componentRef}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <h3>Production Run Template</h3>
          <table>
            <thead>
              <tr>
                <th>Pans</th>
                <th>Quantities</th>
                <th>Items</th>
              </tr>
            </thead>
            <tbody>
              {templateData.map((row, index) => (
                <tr key={index}>
                  <td>{row.pans}</td>
                  <td>{row.quantities}</td>
                  <td>{row.items}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Paper>
      </div>

      {/* Print Button */}
      <ReactToPrint
        trigger={() => <Button variant="contained" color="primary">Print Template</Button>}
        content={() => componentRef.current}
      />
    </div>
  );
};

export default PrintLabel;
