import React, { useState } from "react";

export default function Scan() {
  const [target, setTarget] = useState("");
  const [type, setType] = useState("DYNAMIQUE");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulation d'un scan (remplace par appel API réel)
    setTimeout(() => {
      setResult({
        status: "success",
        message: "Scan terminé. 2 vulnérabilités détectées.",
        vulnerabilities: [
          { type: "SQLi", severity: "Critique", description: "Injection SQL détectée sur /login" },
          { type: "XSS", severity: "Moyenne", description: "Cross-site scripting détecté sur /search" },
        ],
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h3 className="mb-4 text-primary text-center">Lancer un scan de sécurité</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Cible (URL ou API)</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="https://exemple.com"
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Type d'analyse</label>
                <select
                  className="form-select"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="DYNAMIQUE">Dynamique</option>
                  <option value="STATIQUE">Statique</option>
                </select>
              </div>
              <button className="btn btn-primary w-100" type="submit" disabled={loading}>
                {loading ? "Analyse en cours..." : "Lancer le scan"}
              </button>
            </form>
            {result && (
              <div className="alert alert-success mt-4">
                <strong>{result.message}</strong>
                <ul className="mt-2">
                  {result.vulnerabilities.map((v, i) => (
                    <li key={i}>
                      <b>{v.type}</b> ({v.severity}) : {v.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}