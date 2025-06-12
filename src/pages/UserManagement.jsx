import React from "react";

export default function UserManagement() {
  const users = [
    { id: 1, email: "admin@example.com", role: "admin" },
    { id: 2, email: "analyste@example.com", role: "analyste" }
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Gestion des utilisateurs</h2>
      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Rôle</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="p-2 border">{user.id}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
