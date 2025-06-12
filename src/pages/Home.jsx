import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="fw-bold text-primary mb-3">Bienvenue sur VulnScan</h1>
          <p className="lead">
            VulnScan est une plateforme moderne de détection automatique des vulnérabilités web.<br />
            Analysez, sécurisez et améliorez la robustesse de vos applications en quelques clics.<br />
            <span className="fw-semibold">Simple, rapide et efficace pour tous vos besoins en cybersécurité applicative.</span>
          </p>
          <div className="mt-4">
            <Link to="/login" className="btn btn-primary me-2">
              Se connecter
            </Link>
            <Link to="/register" className="btn btn-outline-primary">
              Créer un compte
            </Link>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="/istockphoto-1412282189-612x612.jpg"
            alt="Sécurité web"
            className="img-fluid rounded shadow"
            style={{ maxHeight: 320 }}
          />
        </div>
      </div>
    </div>
  );
}