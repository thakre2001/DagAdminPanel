import React, { useState, useEffect } from 'react';
import { apiServices } from '../services/apiServices';
import { replace, useNavigate } from 'react-router-dom';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    tittle: '',
    discription: '',
    img: ''
  });

  const navigate = useNavigate()
  // Fetch services
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await apiServices.getAllServices();
        console.log('API Response:', response.data);

        if (Array.isArray(response.data)) {
          setServices(response.data);
          response.data.forEach((service, index) => {
            console.log(`Service ${index}:`, service);
          });
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
    const { name, value, files } = e.target;
    if (name === 'img') {
      setFormData({
        ...formData,
        img: files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  // Add new service
  const handleAddService = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append('tittle', formData.tittle);
    payload.append('discription', formData.discription);
    if (formData.img) {
      payload.append('file', formData.img);
    }
  
    try {
      const response = await apiServices.addService(payload);
      setFormData({ tittle: '', discription: '', img: '' });
      setServices([...services, response.data]); // Add the new service to the state
  
      const modalElement = document.getElementById('addServiceModal');
      const modalInstance =
        window.bootstrap.Modal.getInstance(modalElement) ||
        new window.bootstrap.Modal(modalElement);
  
      modalElement.addEventListener(
        'hidden.bs.modal',
        () => {
          // Clean up any lingering modal backdrop if necessary
          const backdrop = document.querySelector('.modal-backdrop');
          if (backdrop) backdrop.remove();
          document.body.classList.remove('modal-open');
  
          navigate('/services', { replace: true });
        },
        { once: true }
      );
  
      modalInstance.hide();
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

  return (
    <div className="services-container" style={ {marginLeft: 250,zIndex: 500,marginTop:100}}>
      <div className="header">
        <h1>Services</h1>
        <div className="user-profile">
          <span>Hi, Admin</span>
          <i className='fa fa-circle-user fs-3 ms-2'></i>
        </div>
      </div>

      <div className="services-content">
        <div className="services-header d-flex justify-content-between">
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
              <th>IMAGE</th>
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
                    <img className="service-image" width={400} src={`data:image/png;base64,${service.img}`} alt={service.tittle} />
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
      <div className="modal fade" id="addServiceModal" tabIndex="-1" aria-labelledby="addServiceLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addServiceLabel">Add New Service</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleAddService}>
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
                  <label className="form-label">Image</label>
                  <input
                    type="file"
                    className="form-control"
                    name="img"
                    onChange={handleInputChange}
                    required
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
