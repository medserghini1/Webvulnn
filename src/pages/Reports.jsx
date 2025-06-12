import React from "react";
import { Link } from "react-router-dom";

const fakeReports = [
  {
    id: 1,
    target: "https://exemple.com",
    date: "2024-06-10",
    status: "Terminé",
    vulnCount: 2,
  },
  {
    id: 2,
    target: "https://test.com",
    date: "2024-06-09",
    status: "Terminé",
    vulnCount: 1,
  },
];

export default function Reports() {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-primary">Liste des rapports</h2>
      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Cible</th>
              <th>Date</th>
              <th>Statut</th>
              <th>Vulnérabilités</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {fakeReports.map((r) => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.target}</td>
                <td>{r.date}</td>
                <td>
                  <span className="badge bg-success">{r.status}</span>
                </td>
                <td>{r.vulnCount}</td>
                <td>
                  <Link to={`/reports/${r.id}`} className="btn btn-sm btn-outline-primary">
                    Voir détail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}