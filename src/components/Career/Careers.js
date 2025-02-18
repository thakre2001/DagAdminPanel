import React from "react";

const Careers = () => {
  return (
    <>
      <div class="wrapper">
        {/* <!-- Sidebar --> */}
        {/* <app-sidebar></app-sidebar> */}
        {/* <!-- End Sidebar --> */}

        <div class="main-panel">
          {/* <!-- main header -->
          <app-header></app-header> */}


          <div class="container">
            <div class="page-inner">
              <div class="page-header">
                <h3 class="fw-bold mb-3">DataTables.Net</h3>
                <ul class="breadcrumbs mb-3">
                  <li class="nav-home">
                    <a href="#">
                      <i class="icon-home"></i>
                    </a>
                  </li>
                  <li class="separator">
                    <i class="icon-arrow-right"></i>
                  </li>
                  <li class="nav-item">
                    <a href="#">Tables</a>
                  </li>
                  <li class="separator">
                    <i class="icon-arrow-right"></i>
                  </li>
                  <li class="nav-item">
                    <a href="#">Datatables</a>
                  </li>
                </ul>
              </div>

              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addworks">
                Add Career
              </button>

              <div class="modal fade" id="addworks" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Add New Carrer</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <form class="forms-sample">
                        <div class="form-group">
                          <label for="">Job Tittle<span>*</span></label>
                          <input type="text" class="form-control" name="job_name" placeholder="Enter a Job Tittle"
                            required />
                          <small
                            class="required">
                            Tittle is required.
                          </small>
                        </div>
                        <div class="form-group">
                          <label for="">Qualification<span>*</span></label>
                          <input type="text" class="form-control" name="qualification"
                            placeholder="Enter a Qualification" />
                          <small

                            class="required">
                            Qualification is required.
                          </small>
                        </div>
                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label for="">Job Type<span>*</span></label>
                            <select id="inputState" class="form-control"
                              name="job_type">
                              <option disabled>Choose...</option>
                              <option value="Full Time">Full Time</option>
                              <option value="Internship"> Internship</option>
                            </select>
                            <small

                              class="required">
                              Job Type is required.
                            </small>
                          </div>
                          <div class="form-group col-md-6">
                            <label for="">Experience<span>*</span></label>
                            <input type="text" class="form-control" name="job_experience"
                              placeholder="Enter experience" />
                            <small class="required">

                              Experience is required.
                            </small>
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="">Skill<span>*</span></label>
                          <input type="text" class="form-control" name="skills"
                            placeholder="Enter a Qualification" />
                          <small

                            class="required">
                            Skills is required.
                          </small>
                        </div>
                        <div class="form-group">
                          <label for="discription1">Discription 1<span>*</span></label>
                          <textarea class="form-control" placeholder="Enter a Discription"
                            name="disc1" id="discription1" cols="30" rows="5"
                          ></textarea>
                          <small

                            class="required">
                            Discription is required.
                          </small>
                        </div>
                        <div class="form-group" id="discription2-group">
                          <label for="discription2">Discription 2<span>*</span></label>

                          <textarea class="form-control" placeholder="Enter a Discription"
                            name="disc2" id="discription2" cols="30" rows="5"
                          ></textarea>
                          <small

                            class="required">
                            Discription is required.
                          </small >
                        </div >
                        <div class="form-group" id="discription3-group" >
                          <label for="discription3">Discription 3</label>
                          <textarea class="form-control" placeholder="Enter a Discription"
                            name="disc2" id="discription3" cols="30" rows="5"
                          ></textarea>

                        </div >
                        <div class="form-group" id="discription4-group" >
                          <label for="discription4">Discription 4</label>
                          <textarea class="form-control" placeholder="Enter a Discription"
                            name="disc4" id="discription4" cols="30" rows="5"
                          ></textarea>

                        </div >
                        <div class="form-group" id="discription5-group">
                          <label for="discription4">Discription 5</label>
                          <textarea class="form-control" placeholder="Enter a Discription"
                            name="disc5" id="discription5" cols="30" rows="5"
                          ></textarea>

                        </div >
                        <div class="form-group" id="discription6-group" >
                          <label for="discription4">Discription 6</label>
                          <textarea class="form-control" placeholder="Enter a Discription"
                            name="disc6" id="discription6" cols="30" rows="5"
                          ></textarea>

                        </div >
                        <div class="form-group" id="discription7-group" >
                          <label for="discription4">Discription 7</label>
                          <textarea class="form-control" placeholder="Enter a Discription"
                            name="disc7" id="discription7" cols="30" rows="5"
                          ></textarea>

                        </div >
                        <div class="form-group" id="discription8-group" >
                          <label for="discription4">Discription 8</label>
                          <textarea class="form-control" placeholder="Enter a Discription"
                            name="disc8" id="discription8" cols="30" rows="5"
                          ></textarea>

                        </div >

                        <div class="form-group" id="discription9-group" >
                          <label for="discription4">Discription 9</label>
                          <textarea class="form-control" placeholder="Enter a Discription"
                            name="disc9" id="discription9" cols="30" rows="5"
                          ></textarea>

                        </div >
                        <div class="form-group" id="discription10-group" >
                          <label for="discription4">Discription 10</label>
                          <textarea class="form-control" placeholder="Enter a Discription"
                            name="disc10" id="discription10" cols="30" rows="5"
                          ></textarea>

                        </div >

                        <button type="submit" class="btn btn-primary mr-2" data-bs-dismiss="modal"
                        > Submit</button >
                      </form >

                    </div >
                  </div >
                </div >
              </div >


              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Job Tittle</th>
                    <th>Qualification</th>
                    <th>Job Type</th>
                    <th>Job Experience</th>
                    <th>Skills </th>
                    <th>Discription</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr >
                    {/* <td>{{ item.job_name }}</td>
      <td>{{ item.qualification }}</td>
      <td>{{ item.job_type }}</td>
      <td>{{ item.job_experience }}</td>
      <td>{{ item.skills }}</td> */}
                    <td><button class="btn-success" data-bs-toggle="modal"
                      data-bs-target="#addeditworks"><i
                        class="fa fa-edit" aria-hidden="true"></i>
                    </button> <button class="btn-danger" ><i
                      class="fa fa-trash" aria-hidden="true"></i>
                      </button></td>
                  </tr>
                </tbody>
              </table>


              <div class="modal fade" id="addeditworks" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Career Edit Modal</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                      <form class="forms-sample">
                        <div class="form-group">
                          <label for="">Qualification</label>
                          <input type="text" class="form-control" name="qualification"
                            placeholder="Enter a Qualification" />
                          <input type="hidden" name="id" />
                        </div>
                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label for="">Job Type</label>
                            <select id="inputState" class="form-control"
                              name="job_type">
                              <option value="" disabled selected>Choose...</option>
                              <option value="Full Time">Full Time</option>
                              <option value="Internship"> Internship</option>
                            </select>
                          </div>
                          <div class="form-group col-md-6">
                            <label for="">Experience</label>
                            <input type="text" class="form-control" name="job_experience"
                              placeholder="Enter experience" />
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="">Skill</label>
                          <input type="text" class="form-control" name="skills"
                            placeholder="Enter a Qualification" />
                        </div>
                        <div class="form-group">
                          <label for="">Discription 1</label>
                          <textarea class="form-control" placeholder="Enter a Discription"
                            name="disc1" id="" cols="30" rows="5"
                          ></textarea>
                        </div>
                        <div class="form-group" id="">
                          <label for="">Discription 2</label>
                          <textarea class="form-control" placeholder="Enter a Discription"
                            name="disc2" id="" cols="30" rows="5"
                          ></textarea>

                        </div>
                        <div class="form-group" id="">
                          <label for="">Discription 3</label>
                          <textarea class="form-control" placeholder="Enter a Discription"
                            name="disc2" id="" cols="30" rows="5"
                          ></textarea>

                        </div>
                        <div class="form-group">
                          <label for="discription4">Discription 4</label>
                          <textarea class="form-control" placeholder="Enter a Discription"
                            name="disc4" id="" cols="30" rows="5"
                          ></textarea>

                        </div>
                        <div class="form-group">
                          <label for="discription4">Discription 5</label>
                          <textarea class="form-control" placeholder="Enter a Discription"
                            name="disc5" id="" cols="30" rows="5"
                          ></textarea>

                        </div>
                        <div class="form-group">
                          <label for="discription4">Discription 6</label>
                          <textarea class="form-control" placeholder="Enter a Discription"
                            name="disc6" id="" cols="30" rows="5"
                          ></textarea>

                        </div>
                        <div class="form-group">
                          <label for="discription4">Discription 7</label>
                          <textarea class="form-control" placeholder="Enter a Discription"
                            name="disc7" id="" cols="30" rows="5"
                          ></textarea>

                        </div>
                        <div class="form-group">
                          <label for="discription4">Discription 8</label>
                          <textarea class="form-control" placeholder="Enter a Discription"
                            name="disc8" id="" cols="30" rows="5"
                          ></textarea>

                        </div>

                        <div class="form-group">
                          <label for="discription4">Discription 9</label>
                          <textarea class="form-control" placeholder="Enter a Discription"
                            name="disc9" id="" cols="30" rows="5"
                          ></textarea>

                        </div>
                        <div class="form-group">
                          <label for="discription4">Discription 10</label>
                          <textarea class="form-control" placeholder="Enter a Discription"
                            name="disc10" id="" cols="30"
                            rows="5" ></textarea>

                        </div>

                        <button type="submit" class="btn btn-primary mr-2"
                          data-bs-dismiss="modal">Submit</button>
                      </form>


                    </div>
                  </div >
                </div >
              </div >
            </div >
          </div >


          {/* < !--footer -->  */}
          {/* <app-footer></app-footer> */}
        </div >

        {/* < !--Custom template | don't include it in your project! --> */}

        {/* < !--End Custom template-- >/ */}
      </div >
    </>
  );
};

export default Careers;
