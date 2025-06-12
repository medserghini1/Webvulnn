import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ReportViewer() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios.get("/api/reports").then((res) => setReports(res.data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Rapports de Scan</h2>
      <ul>
        {reports.map((report) => (
          <li key={report.id} className="border p-4 mb-2">
            <p>Cible : {report.target}</p>
            <p>Date : {report.date}</p>
            <a href={report.pdfUrl} className="text-blue-600 underline">Télécharger PDF</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
