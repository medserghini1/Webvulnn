import React from "react";

export default function ScanCard({ scan }) {
  return (
    <div className="border p-4 rounded shadow mb-3 bg-white">
      <p><strong>Cible :</strong> {scan.target}</p>
      <p><strong>Type :</strong> {scan.analysisType}</p>
      <p><strong>Date :</strong> {scan.date}</p>
      <a href={scan.pdfUrl} className="text-blue-500 underline">Télécharger le rapport</a>
    </div>
  );
}
