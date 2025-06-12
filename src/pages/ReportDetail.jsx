import React from "react";
import { useParams, Link } from "react-router-dom";

const fakeDetails = {
  1: {
    target: "https://exemple.com",
    date: "2024-06-10",
    vulnerabilities: [
      {
        type: "SQLi",
        severity: "Critique",
        description: "Injection SQL détectée sur /login",
        recommendation: "Utiliser des requêtes préparées.",
      },
      {
        type: "XSS",
        severity: "Moyenne",
        description: "Cross-site scripting détecté sur /search",
        recommendation: "Échapper les entrées utilisateur.",
      },
    ],
  },
  2: {
    target: "https://test.com",
    date: "2024-06-09",
    vulnerabilities: [
      {
        type: "CSRF",
        severity: "Faible",
        description: "CSRF détecté sur /profile",
        recommendation: "Implémenter un token CSRF.",
      },
    ],
  },
};

export default function ReportDetail() {
  const { id } = useParams();
  const report = fakeDetails[id];

  if (!report) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger">Rapport introuvable.</div>
        <Link to="/reports" className="btn btn-primary">
          Retour à la liste
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="mb-3 text-primary">Détail du rapport #{id}</h2>
      <p>
        <b>Cible :</b> {report.target}
        <br />
        <b>Date :</b> {report.date}
      </p>
      <h4 className="mt-4">Vulnérabilités détectées</h4>
      <ul className="list-group mb-4">
        {report.vulnerabilities.map((v, i) => (
          <li key={i} className="list-group-item">
            <b>{v.type}</b> <span className="badge bg-danger">{v.severity}</span>
            <br />
            <span>{v.description}</span>
            <br />
            <span className="text-success">Recommandation : {v.recommendation}</span>
          </li>
        ))}
      </ul>
      <Link to="/reports" className="btn btn-outline-primary">
        Retour à la liste des rapports
      </Link>
    </div>
  );
}