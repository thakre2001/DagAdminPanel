// const API_URL = 'https://www.directadmissionguideline.com/api';

import axios from "axios"

// const api = {
//   // Get all services
//   // getServices: () => axios.get(`${this.API_URL}/getAllServices`),

//   static getAllService(){
//     const dataURL=`${this.API_URL}/getAllServices`
//     return axios.get
//   }
  
//   // Add new service
//   addService: (service) => axios.post(`${API_URL}/services`, service),
  
//   // Update service
//   updateService: (id, service) => axios.put(`${API_URL}/services/${id}`, service),
  
//   // Delete service
//   deleteService: (id) => axios.delete(`${API_URL}/services/${id}`)
// };

// export default api;

export class apiServices{

  
  static serverURL="https://www.directadmissionguideline.com/api"
  // static serverURL="http://localhost:8080"

  static async getAllServices(){
    const dataURL=`${this.serverURL}/getAllServices`
    const response=await axios.get(dataURL)
    return response
  }

  static async addService(payload){
    const dataURL=`${this.serverURL}/addservices`
    const response=await axios.post(dataURL,payload)
    return response
  }

  static async editService(id,payload){
    const dataURL=`${this.serverURL}/updateService/${id}`
    const response=await axios.put(dataURL,payload)
    return response
  }

  static async deleteService(id){
    const dataURL=`${this.serverURL}/deleteServices/${id}`
    const response=await axios.delete(dataURL)
    return response
  }

}