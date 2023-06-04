import React from 'react';
import Papa from 'papaparse';
import * as XLSX from 'xlsx';

export default function UploadButton({ onFileUpload }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file.type === 'application/vnd.ms-excel' || file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      // If file is Excel
      const reader = new FileReader();
      reader.onload = (evt) => {
        const bstr = evt.target.result;
        const wb = XLSX.read(bstr, { type: 'binary' });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
        const headers = data[0] ? Object.keys(data[0]) : [];
        onFileUpload(data, headers);
      };
      reader.readAsBinaryString(file);
    } else if (file.type === 'text/csv') {
      // If file is CSV
      Papa.parse(file, {
        header: true,
        complete: function(results) {
          const headers = results.data[0] ? Object.keys(results.data[0]) : [];
          onFileUpload(results.data, headers);
        }
      });
    } else {
      alert("Unsupported file type. Please upload a CSV or Excel file.");
    }
  }

  return (
    <input type="file" onChange={handleFileChange} />
  );
}
