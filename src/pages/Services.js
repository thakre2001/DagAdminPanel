import React, { useState, useEffect } from 'react';
import { apiServices } from '../services/apiServices';
import { replace, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import EditServiceModal from '../components/EditService/EditServiceModal';
import Navbar from '../components/Header/Navbar';

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

  // Add state to manage modal visibility and selected service for editing:
  const [selectedService, setSelectedService] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Function to open the edit modal with the selected service
  const openEditModal = (service) => {
    setSelectedService(service);
    setIsEditModalOpen(true);
  };

  // Function to close the edit modal
  const closeEditModal = () => {
    setSelectedService(null);
    setIsEditModalOpen(false);
    navigate('/services')
  };

  // Function to handle saving edits
  const handleEditSave = async (id, payload) => {
    try {
      const response = await apiServices.editService(id, payload);
      // Update the services state with the edited service
      setServices((prevServices) =>
        prevServices.map((service) =>
          service.id === id ? response.data : service
        )
      );
      // Close the modal after a successful update
      closeEditModal();
    } catch (err) {
      setError('Failed to edit service');
      console.error('Error editing service:', err);
    }
  };



  // Delete service
  const handleDeleteService = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this service?");

    if (!confirmDelete) {
      return; // Stop execution if user cancels
    }
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
    <>
      <div className="services-container" 
        style={{ marginLeft: 250, zIndex: 500, marginTop: 50,backgroundColor:'rgb(237, 237, 237)' }}>
        <div className='box-shadow m-5'>
          <div className="header">
            <h1>Services</h1>
          </div>

          <div className="services-content">
            <div className="services-header d-flex justify-content-between">
              <div className="entries-selector">
                <select className="entries-select me-2">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                </select>
                <span>entries</span>
              </div>
              <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addServiceModal">
                <i className="fas fa-plus fs-5"></i>
                Add Service
              </button>
            </div>

            <div className="table-responsive mt-3">
              <table className="table text-center align-middle">
                <thead className="bg-dark text-white">
                  <tr>
                    <th style={{ width: "15%" }}>TITLE</th>
                    <th style={{ width: "25%" }}>DESCRIPTION</th>
                    <th style={{ width: "25%" }}>IMAGE</th>
                    <th style={{ width: "20%" }}>ACTION</th>
                  </tr>
                </thead>
                <tbody className='mt-2'>
                  {services.map((service, index) => (
                    <tr key={index} className="border-bottom">
                      <td className="fw-bold p-3 bg-light shadow">{service.tittle}</td>
                      <td className="p-3 bg-light">{service.discription}</td>
                      <td className="p-3 bg-light">
                        {service.img ? (
                          <img
                            src={`data:image/png;base64,${service.img}`}
                            alt={service.tittle}
                            className="img-fluid rounded shadow-sm"
                            style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "10px" }}
                          />
                        ) : (
                          <span className="text-muted">No Image</span>
                        )}
                      </td>
                      <td className="p-3 bg-light">
                        <div className="d-flex justify-content-center gap-3">
                          <button className="btn btn-sm btn-warning px-4 py-2"
                            onClick={() => openEditModal(service)}>
                            <i className="fas fa-edit"></i> Edit
                          </button>
                          <button className="btn btn-sm btn-danger px-4 py-2"
                            onClick={() => handleDeleteService(service.id)}>
                            <i className="fas fa-trash"></i> Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>

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
          {isEditModalOpen && selectedService && (
            <EditServiceModal
              service={selectedService}
              onSave={handleEditSave}
              onClose={closeEditModal}
            />
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Services;
