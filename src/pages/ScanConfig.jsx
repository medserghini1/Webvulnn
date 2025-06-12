import React, { useState } from "react";
import axios from "axios";

export default function ScanConfig() {
  const [target, setTarget] = useState("");
  const [analysisType, setAnalysisType] = useState("STATIQUE");

  const handleScan = async () => {
    try {
      await axios.post("/api/scan", { target, analysisType });
      alert("Scan lancé !");
    } catch (err) {
      alert("Erreur lors du lancement du scan");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Configurer un scan</h2>
      <input type="text" value={target}
             onChange={(e) => setTarget(e.target.value)}
             placeholder="URL cible" className="border p-2 w-full mb-3" />
      <select value={analysisType}
              onChange={(e) => setAnalysisType(e.target.value)}
              className="border p-2 w-full mb-3">
        <option value="STATIQUE">Statique</option>
        <option value="DYNAMIQUE">Dynamique</option>
      </select>
      <button onClick={handleScan} className="bg-green-600 text-white p-2 rounded">Lancer le scan</button>
    </div>
  );
}
