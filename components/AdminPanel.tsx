"use client";

import { useEffect, useState } from "react";
import { User } from "@/types/User"; // Import the User interface

const AdminPanel = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");
  const [newUserRole, setNewUserRole] = useState("user");
  const [notification, setNotification] = useState("");

  const fetchUsers = async () => {
    try {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setNotification("Error fetching users.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUpdateUserRole = async (userId: string, newRole: string) => {
    try {
      const response = await fetch(`/api/updateUserRole`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, newRole }),
      });
      if (!response.ok) {
        throw new Error(`Error updating user role: ${response.statusText}`);
      }
      const result = await response.json();
      console.log("Update result:", result); // Log the result from the API
      setNotification(result.message);
      fetchUsers(); // Refresh the list
    } catch (error) {
      console.error("Failed to update user role:", error);
      setNotification("Failed to update user role.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: newUserEmail,
        name: newUserName,
        password: newUserPassword,
        role: newUserRole,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      setNotification(result.message);
      fetchUsers();
      setNewUserEmail("");
      setNewUserName("");
      setNewUserPassword("");
      setNewUserRole("user");
    } else {
      setNotification("Failed to create user.");
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Panel</h1>

      {notification && (
        <div className="mb-4 p-3 rounded bg-green-100 text-green-700 border border-green-200">
          {notification}
        </div>
      )}

      {loading ? (
        <p className="text-center">Loading users...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div
              key={user._id}
              className="border border-gray-200 rounded-xl p-4 shadow hover:shadow-lg transition duration-200 bg-white dark:bg-gray-800"
            >
              <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                <span className="font-medium">Email:</span> {user.email}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                <span className="font-medium">Role:</span> {user.role}
              </p>
              <div className="flex items-center space-x-2">
                <select
                  defaultValue={user.role}
                  onChange={(e) => setNewUserRole(e.target.value)}
                  className="border rounded p-1 text-sm dark:bg-gray-700 dark:text-gray-200"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                  <option value="superuser">Superuser</option>
                </select>
                <button
                  onClick={() => handleUpdateUserRole(user._id, newUserRole)}
                  className="bg-blue-500 text-white py-1 px-3 rounded text-sm hover:bg-blue-600 transition"
                >
                  Save
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
      >
        <h2 className="text-2xl font-bold mb-4">Add New User</h2>
        <div className="grid gap-4">
          <input
            type="text"
            placeholder="Name"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            className="border rounded p-2 w-full dark:bg-gray-700 dark:text-gray-200"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={newUserEmail}
            onChange={(e) => setNewUserEmail(e.target.value)}
            className="border rounded p-2 w-full dark:bg-gray-700 dark:text-gray-200"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={newUserPassword}
            onChange={(e) => setNewUserPassword(e.target.value)}
            className="border rounded p-2 w-full dark:bg-gray-700 dark:text-gray-200"
            required
          />
          <select
            value={newUserRole}
            onChange={(e) => setNewUserRole(e.target.value)}
            className="border rounded p-2 w-full dark:bg-gray-700 dark:text-gray-200"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="superuser">Superuser</option>
          </select>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminPanel;
