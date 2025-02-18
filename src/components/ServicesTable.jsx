import React from "react";

const ServicesTable = ({ services, onEdit, onDelete }) => {
  return (
    <div className="ms-5" style={{ marginTop: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3>Services</h3>
        <button onClick={() => onEdit(null)} style={{ padding: "8px 12px", cursor: "pointer" }}>
          + Add Service
        </button>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
        <thead>
          <tr style={{ background: "#f2f2f2" }}>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Title</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Description</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Logo</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{service.title}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{service.description}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>
                {service.logo ? (
                  <img src={service.logo} alt="Logo" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                ) : (
                  "No Logo"
                )}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <button onClick={() => onEdit(service)} style={{ marginRight: "8px", cursor: "pointer" }}>
                  Edit
                </button>
                <button onClick={() => onDelete(service.id)} style={{ cursor: "pointer" }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServicesTable;
