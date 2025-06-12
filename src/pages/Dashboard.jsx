import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">Bienvenue sur la plateforme VulnScan</h1>
        <p className="lead">Analysez vos applications web et consultez les rapports de vulnérabilité.</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-3">
          <div className="card shadow h-100">
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
              <h5 className="card-title">Lancer un scan</h5>
              <p className="card-text text-center">Configurez et lancez une analyse de sécurité sur une cible web.</p>
              <Link to="/scan" className="btn btn-primary mt-2 w-100">
                Démarrer un scan
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow h-100">
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
              <h5 className="card-title">Consulter les rapports</h5>
              <p className="card-text text-center">Visualisez les résultats détaillés de vos analyses précédentes.</p>
              <Link to="/reports" className="btn btn-outline-primary mt-2 w-100">
                Voir les rapports
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}