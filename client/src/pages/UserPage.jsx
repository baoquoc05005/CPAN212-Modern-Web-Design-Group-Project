import React, { useState } from "react";
import "./User.css";

const UserPage = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [isEditing, setIsEditing] = useState(true); 

  const [orders] = useState([
    { id: 1, date: "2025-04-01", total: "$59.99", status: "Delivered" },
    { id: 2, date: "2025-03-22", total: "$120.00", status: "Shipped" },
    { id: 3, date: "2025-03-10", total: "$35.00", status: "Processing" },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="user-container">
      <h2>User Account</h2>

      <div className="user-info">
        <h3>Profile Information</h3>
        {isEditing ? (
          <>
            <label>
              <strong>Name:</strong>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
            </label>
            <label>
              <strong>Email:</strong>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </label>
            <label>
              <strong>Address:</strong>
              <input
                type="text"
                name="address"
                value={user.address}
                onChange={handleChange}
              />
            </label>
            <button className="save-btn" onClick={handleSave}>
              Save Profile
            </button>
          </>
        ) : (
          <>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Address:</strong> {user.address}</p>
            <button className="edit-btn" onClick={handleEdit}>
              Edit Profile
            </button>
          </>
        )}
      </div>

      <div className="order-history">
        <h3>Order History</h3>
        {orders.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Order #</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>{order.total}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default UserPage;
