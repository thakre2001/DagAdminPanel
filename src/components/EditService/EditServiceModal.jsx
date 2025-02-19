import React, { useState, useEffect } from 'react';

const EditServiceModal = ({ service, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    tittle: service.tittle || '',
    discription: service.discription || '',
    img: null
  });

  useEffect(() => {
    setFormData({
      tittle: service.tittle || '',
      discription: service.discription || '',
      img: null
    });
  }, [service]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'img') {
      setFormData({ ...formData, img: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append('tittle', formData.tittle);
    payload.append('discription', formData.discription);
    if (formData.img) {
      payload.append('file', formData.img);
    }
    onSave(service.id, payload);
  };

  return (
    <div className="modal fade show d-block bg-secondary" tabIndex="-1" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Service</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
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
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={onClose}>
                  Close
                </button>
                <button type="submit" className="btn btn-primary">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditServiceModal;
