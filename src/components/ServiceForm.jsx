import React, { useState, useEffect } from "react";

const ServiceForm = ({ serviceData, onSubmit, onCancel }) => {
  // Initialize form state; pre-fill if editing
  const [service, setService] = useState({
    title: "",
    description: "",
    logo: null, // This will hold the logo URL
  });

  useEffect(() => {
    if (serviceData) {
      setService(serviceData);
    } else {
      setService({
        title: "",
        description: "",
        logo: null,
      });
    }
  }, [serviceData]);

  // Handle text changes for title and description
  const handleChange = (e) => {
    const { name, value } = e.target;
    setService({ ...service, [name]: value });
  };

  // Handle file input change for logo
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a temporary URL for preview
      const logoUrl = URL.createObjectURL(file);
      setService({ ...service, logo: logoUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(service);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ background: "white", padding: "20px", borderRadius: "8px", width: "400px" }}>
        <h3>{serviceData ? "Edit Service" : "Add Service"}</h3>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={service.title}
              onChange={handleChange}
              style={{ width: "100%" }}
              required
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Description:</label>
            <textarea
              name="description"
              value={service.description}
              onChange={handleChange}
              style={{ width: "100%" }}
              required
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Logo:</label>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {service.logo && (
              <div style={{ marginTop: "10px" }}>
                <img src={service.logo} alt="Logo Preview" style={{ width: "80px", height: "80px", objectFit: "cover" }} />
              </div>
            )}
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button type="button" onClick={onCancel} style={{ marginRight: "10px" }}>
              Cancel
            </button>
            <button type="submit">{serviceData ? "Update" : "Add"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceForm;
