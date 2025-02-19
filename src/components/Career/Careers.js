import React, { useState, useEffect } from "react";
import axios from "axios";

const Careers = () => {
  const [careers, setCareers] = useState([]);
  const [formData, setFormData] = useState({
    job_name: "",
    qualification: "",
    job_type: "",
    job_experience: "",
    skills: "",
    disc1: "",
    disc2: "",
    disc3: "",
    disc4: "",
    disc5: "",
    disc6: "",
    disc7: "",
    disc8: "",
    disc9: "",
    disc10: ""
  });
  const [editingCareerId, setEditingCareerId] = useState(null);

  // Fetch careers from the backend
  useEffect(() => {
    axios.get("https://www.directadmissionguideline.com/api/getallcarrer") // Update with your backend endpoint
      .then((response) => {
        setCareers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching careers:", error);
      });
  }, []);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission to add a new career
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://www.directadmissionguideline.com/api/addCarrer", formData) // Update with your backend endpoint
      .then((response) => {
        alert("Career added successfully!");
        setCareers([...careers, response.data]); // Add new career to state
      })
      .catch((error) => {
        console.error("Error adding career:", error);
      });
  };

  // Handle career update (edit)
  const handleUpdate = (e) => {
    e.preventDefault();

    axios.put(`https://www.directadmissionguideline.com/api/updateCarrer/${editingCareerId}`, formData) // Update with PUT request
      .then((response) => {
        alert("Career updated successfully!");
        setCareers(
          careers.map((career) =>
            career.id === editingCareerId ? response.data : career
          )
        );
        setEditingCareerId(null); // Reset the editing state
      })
      .catch((error) => {
        console.error("Error updating career:", error);
      });
  };

  // Handle delete career
  const handleDelete = (careerId) => {
    axios.delete(`https://www.directadmissionguideline.com/api/deletecarrer/${careerId}`) // Delete request to backend
      .then(() => {
        alert("Career deleted successfully!");
        setCareers(careers.filter((career) => career.id !== careerId)); // Remove the deleted career from state
      })
      .catch((error) => {
        console.error("Error deleting career:", error);
      });
  };

  // Pre-fill the form with career data when editing
  const handleEdit = (career) => {
    setFormData({
      job_name: career.job_name,
      qualification: career.qualification,
      job_type: career.job_type,
      job_experience: career.job_experience,
      skills: career.skills,
      disc1: career.disc1,
      disc2: career.disc2,
      disc3: career.disc3,
      disc4: career.disc4,
      disc5: career.disc5,
      disc6: career.disc6,
      disc7: career.disc7,
      disc8: career.disc8,
      disc9: career.disc9,
      disc10: career.disc10
    });
    setEditingCareerId(career.id);
  };

  return (
    <>
      <div className="wrapper" style={{ marginLeft: 250, zIndex: 500, marginTop: 50,fontFamily: "'Public Sans', sans-serif"  }}>
        <div className="main-panel" >
          <div className="container">
            <div className="page-inner">
              <div className="page-header">
                <h3 className="fw-bold mb-3">DataTables.Net</h3>
              </div>

              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addworks">
                Add Career
              </button>

              {/* Modal for Add Career */}
              <div className="modal fade" id="addworks" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">Add New Career</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <form className="forms-sample" onSubmit={handleSubmit}>
                        {/* Form fields for adding career */}
                        <div className="form-group">
                          <label htmlFor="">Job Title<span>*</span></label>
                          <input
                            type="text"
                            className="form-control"
                            name="job_name"
                            value={formData.job_name}
                            onChange={handleInputChange}
                            placeholder="Enter a Job Title"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="">Qualification<span>*</span></label>
                          <input
                            type="text"
                            className="form-control"
                            name="qualification"
                            value={formData.qualification}
                            onChange={handleInputChange}
                            placeholder="Enter a Qualification"
                            required
                          />
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="">Job Type<span>*</span></label>
                            <select
                              id="inputState"
                              className="form-control"
                              name="job_type"
                              value={formData.job_type}
                              onChange={handleInputChange}
                              required
                            >
                              <option value="" disabled>Choose...</option>
                              <option value="Full Time">Full Time</option>
                              <option value="Internship">Internship</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="">Experience<span>*</span></label>
                            <input
                              type="text"
                              className="form-control"
                              name="job_experience"
                              value={formData.job_experience}
                              onChange={handleInputChange}
                              placeholder="Enter experience"
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="">Skill<span>*</span></label>
                          <input
                            type="text"
                            className="form-control"
                            name="skills"
                            value={formData.skills}
                            onChange={handleInputChange}
                            placeholder="Enter skills"
                            required
                          />
                        </div>
                        {Array.from({ length: 10 }, (_, i) => (
                          <div key={i} className="form-group">
                            <label htmlFor={`disc${i + 1}`}>Description {i + 1}</label>
                            <textarea
                              className="form-control"
                              name={`disc${i + 1}`}
                              value={formData[`disc${i + 1}`]}
                              onChange={handleInputChange}
                              placeholder={`Enter description ${i + 1}`}
                              rows="5"
                            ></textarea>
                          </div>
                        ))}
                        <button type="submit" className="btn btn-primary mr-2" data-bs-dismiss="modal">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              {/* Career Table */}
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Job Title</th>
                    <th>Qualification</th>
                    <th>Job Type</th>
                    <th>Job Experience</th>
                    <th>Skills</th>
                    <th>Descriptions</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {careers.map((career) => (
                    <tr key={career.id}>
                      <td>{career.job_name}</td>
                      <td>{career.qualification}</td>
                      <td>{career.job_type}</td>
                      <td>{career.job_experience}</td>
                      <td>{career.skills}</td>
                      <td>
                        <ul>
                          {[career.disc1, career.disc2, career.disc3, career.disc4, career.disc5, career.disc6, career.disc7, career.disc8, career.disc9, career.disc10]
                            .filter(desc => desc)
                            .map((desc, index) => <li key={index}>{desc}</li>)}
                        </ul>
                      </td>
                      <td>
                        <button className="btn-success" data-bs-toggle="modal" data-bs-target="#addeditworks" onClick={() => handleEdit(career)}>
                          <i className="fa fa-edit" aria-hidden="true"></i>
                        </button>
                        <button className="btn-danger" onClick={() => handleDelete(career.id)}>
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Modal for Edit Career */}
              <div className="modal fade" id="addeditworks" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Career</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <form className="forms-sample" onSubmit={handleUpdate}>
                        <div className="form-group">
                          <label htmlFor="">Job Title<span>*</span></label>
                          <input
                            type="text"
                            className="form-control"
                            name="job_name"
                            value={formData.job_name}
                            onChange={handleInputChange}
                            placeholder="Enter a Job Title"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="">Qualification<span>*</span></label>
                          <input
                            type="text"
                            className="form-control"
                            name="qualification"
                            value={formData.qualification}
                            onChange={handleInputChange}
                            placeholder="Enter a Qualification"
                            required
                          />
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="">Job Type<span>*</span></label>
                            <select
                              id="inputState"
                              className="form-control"
                              name="job_type"
                              value={formData.job_type}
                              onChange={handleInputChange}
                              required
                            >
                              <option value="" disabled>Choose...</option>
                              <option value="Full Time">Full Time</option>
                              <option value="Internship">Internship</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="">Experience<span>*</span></label>
                            <input
                              type="text"
                              className="form-control"
                              name="job_experience"
                              value={formData.job_experience}
                              onChange={handleInputChange}
                              placeholder="Enter experience"
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="">Skills<span>*</span></label>
                          <input
                            type="text"
                            className="form-control"
                            name="skills"
                            value={formData.skills}
                            onChange={handleInputChange}
                            placeholder="Enter skills"
                            required
                          />
                        </div>

                        {Array.from({ length: 10 }, (_, i) => (
                          <div key={i} className="form-group">
                            <label htmlFor={`disc${i + 1}`}>Description {i + 1}</label>
                            <textarea
                              className="form-control"
                              name={`disc${i + 1}`}
                              value={formData[`disc${i + 1}`]}
                              onChange={handleInputChange}
                              placeholder={`Enter description ${i + 1}`}
                              rows="5"
                            ></textarea>
                          </div>
                        ))}

                        <button type="submit" className="btn btn-primary mr-2" data-bs-dismiss="modal">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
