import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Inquiry = () => {
    const [inquiries, setInquiries] = useState([]);
    // const [editingCareerId, setEditingCareerId] = useState(null);

    // Fetch careers from the backend

    const serverURL = "http://localhost:8080";
    useEffect(() => {
        axios.get(`${serverURL}/getAllInquiry`) // Update with your backend endpoint
            .then((response) => {
                setInquiries(response.data)
            })
            .catch((error) => {
                console.error("Error fetching careers:", error);
            });
    }, []);

    // Function to export inquiries to CSV
    const exportToCSV = () => {
        if (setInquiries.length === 0) {
            alert("No inquiries available to export.");
            return;
        }

        const csvHeaders = ["Name", "Email", "Mobile Number", "Message", "CreatedAt"];
        const csvRows = inquiries.map((inquiry) =>
            [inquiry.name, inquiry.email, inquiry.phoneNumber, inquiry.message, inquiry.createdAt].join(",")
        );

        const csvContent = [csvHeaders.join(","), ...csvRows].join("\n");
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");

        link.href = URL.createObjectURL(blob);
        link.setAttribute("download", "inquiries.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Handle delete inquiry
    const handleDelete = async (id) => {
        const isConfirmed=window.confirm("Are you sure you want to delete");
        if(!isConfirmed) return;
        
        try {
            const response=await axios.delete(`${serverURL}/deleteInquiry/${id}`) // Delete request to backend
            alert("Inquiry deleted successfully!");
            setInquiries(inquiries.filter((inquiry) => inquiry.id !== id));
        } catch (error) {
            console.error("Error deleting Inquiry:", error);
            alert("Not delete")
        }
    };


    return (
        <>
            <div className="wrapper bg-light" style={{ marginLeft: 250, zIndex: 500, marginTop: 80, fontFamily: "'Public Sans', sans-serif" }}>
                <div className="main-panel box-shadow bg-white" >
                    <div className="container">
                        <h1 className='text-center text-success'>Inquiries</h1>
                        <div className="page-inner">
                            <button onClick={exportToCSV} className="btn btn-primary mb-3">
                                Export to CSV
                            </button>

                            {/* Inquiry Table */}
                            <table className="table table-hover">
                                <thead>
                                    <tr className='text-center'>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Mobile Number</th>
                                        <th>Message</th>
                                        <th>CreatedAt</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {inquiries.map((inquiry) => (
                                        <tr key={inquiry.id}>
                                            <td className='p-2 bg-light col-md-1'>{inquiry.name}</td>
                                            <td className='p-2 bg-light col-md-2'>{inquiry.email}</td>
                                            <td className='p-2 bg-light col-md-2 text-center'>{inquiry.phoneNumber}</td>
                                            <td className='p-2 bg-light col-md-3'>{inquiry.message}</td>
                                            <td className='p-2 bg-light col-md-2'>{inquiry.createdAt}</td>
                                            <td className='p-2 bg-light col-md-1'>
                                                <button className='delete-btn btn text-danger' onClick={() => { handleDelete(inquiry.id) }}>
                                                    <i className='fa fa-trash fs-4'></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Inquiry
