import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          VulnScan
        </Link>
        <div>
          {isAuthenticated ? (
            <>
              <Link className="btn btn-outline-light me-2" to="/dashboard">
                Dashboard
              </Link>
              <Link className="btn btn-outline-light me-2" to="/scan">
                Lancer un scan
              </Link>
              <Link className="btn btn-outline-light me-2" to="/reports">
                Rapports
              </Link>
              <button className="btn btn-light" onClick={handleLogout}>
                Déconnexion
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-outline-light me-2" to="/login">
                Connexion
              </Link>
              <Link className="btn btn-light" to="/register">
                Inscription
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}