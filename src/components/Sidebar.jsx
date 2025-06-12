import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <nav className="flex flex-col gap-4">
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/scan" className="hover:underline">Lancer un Scan</Link>
        <Link to="/reports" className="hover:underline">Rapports</Link>
        <Link to="/users" className="hover:underline">Utilisateurs</Link>
      </nav>
    </aside>
  );
}
