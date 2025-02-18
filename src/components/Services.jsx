import React, { useState, useEffect } from 'react';
import { apiServices } from '../services/apiServices';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    tittle: '',
    discription: '',
    img: ''
  });

  // Fetch services
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await apiServices.getAllServices();
        console.log('API Response:', response.data);

        if (Array.isArray(response.data)) {
          setServices(response.data);
        } else {
          console.error("Response data is not an array:", response.data);
        }
      } catch (err) {
        setError('Failed to fetch services');
        console.error('Error fetching services:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Add new service
  const handleAddService = async (e) => {
    e.preventDefault();
    try {
      const response = await apiServices.addService(formData);
      setFormData({ name: '', tittle: '', discription: '', img: '' });
      setServices([...services, response.data]); // Add the new service to the state
    } catch (err) {
      setError('Failed to add service');
      console.error('Error adding service:', err);
    }
  };

  // Delete service
  const handleDeleteService = async (id) => {
    try {
      await apiServices.deleteService(id);
      setServices(services.filter((service) => service.id !== id)); // Remove the deleted service from the state
    } catch (err) {
      setError('Failed to delete service');
      console.error('Error deleting service:', err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  useEffect(()=>{
    console.log(`this is service after set${services}`);
  },[services])
  

  return (
    <div className="services-container">
      <div className="header">
        <h1>Services</h1>
        <div className="user-profile">
          <span>Hi, Admin</span>
          <img src="https://ui-avatars.com/api/?name=Admin&background=2563eb&color=fff" alt="Admin Profile" />
        </div>
      </div>

      <div className="services-content">
        <div className="services-header d-flex justify">
          <div className="entries-selector">
            <select className="entries-select">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            <span>entries</span>
          </div>
          <button className="add-service-btn" data-bs-toggle="modal" data-bs-target="#addServiceModal">
            <i className="fas fa-plus"></i>
            Add Service
          </button>
        </div>

        <table className="services-table">
          <thead>
            <tr>
              <th>TITLE</th>
              <th>DESCRIPTION</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={index}>
                <td>{service.tittle}</td> {/* Correct property name */}
                <td>{service.discription}</td> {/* Correct property name */}
                <td>
                  {service.img && (
                    <img className="service-image" src={`data:image/png;base64,${service.img}`} alt={service.tittle} />
                  )}
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="edit-btn">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteService(service.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Service Modal */}
      <div className="modal fade" id="addServiceModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add New Service</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleAddService}>
                <div className="mb-3">
                  <label className="form-label">Service Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="tittle"
                    value={formData.tittle}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    name="discription"
                    value={formData.discription}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Image URL</label>
                  <input
                    type="url"
                    className="form-control"
                    name="img"
                    value={formData.img}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary">Add Service</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
