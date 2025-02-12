import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  NavItem,
  NavLink,
  Row,
  InputGroup,
  TabContent,
  TabPane,
  Button,

} from "reactstrap";

const DescriptionContactInfo = ({toggleTab, activeTab}) => {
    const [data_attr, setData_attr] = useState(0);
  return (
  <>
     <Row className="justify-content-center">
                    <Col xl="8" sm="8">
                      <Card>
                        <CardBody>
                          <Form>
                            <Row>
                              <Col lg="12">
                                <h4 className="fw-normal">
                                  Genral Information
                                </h4>
                              </Col>
                              <Col lg="6">
                                <div className="mb-3">
                                  <Label for="basicpill-firstname-input1">
                                    Type of home
                                  </Label>
                                  <span className="input-group-text bg-white">
                                  {/* <img src={Appertment} style={{height:"25px",width:"25px"}}/>{" "} */}
                                    <Input
                                      type="text"
                                      className="form-control border-0"
                                      id="basicpill-firstname-input1"
                                      placeholder="Apartment"
                                    />
                                  </span>
                                </div>
                              </Col>
                              <Col lg="6">
                                <div className="mt-2">
                                  <Label for="basicpill-firstname-input1"></Label>

                                  <span className="input-group-text bg-white">
                                  {/* <img src={Newhome} style={{height:"25px",width:"25px"}}/>{" "} */}
                                    <Input
                                      type="text"
                                      className="form-control border-0"
                                      id="basicpill-firstname-input1"
                                      placeholder="House"
                                    />
                                  </span>
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="6">
                                <div className="mb-3">
                                  <Label for="basicpill-phoneno-input3">
                                    Project address
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-phoneno-input3"
                                    placeholder="Text here..."
                                  />
                                </div>
                              </Col>
                              <Col lg="6">
                                <div className="mb-3">
                                  <Label>City</Label>
                                  <select
                                    className="form-select"
                                    placeholder="Text here..."
                                  >
                                    <option defaultValue>indore</option>
                                    <option value="AE">pune</option>
                                    <option value="VI">Visa</option>
                                    <option value="MC">MasterCard</option>
                                    <option value="DI">Discover</option>
                                  </select>
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="12">
                                <div className="mb-3">
                                  <Label for="basicpill-address-input1">
                                    General comment
                                  </Label>
                                  <textarea
                                    id="basicpill-address-input1"
                                    className="form-control"
                                    rows=""
                                    placeholder="Text here..."
                                  />
                                </div>
                              </Col>
                            </Row>
                          </Form>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col xl="8" sm="8">
                      <Card>
                        <CardBody>
                          <div class="mb-2">
                            <div className="d-flex">
                              <div>
                                <img
                                //   src={Kitchen}
                                  className="ms-0 me-2 h-75 w-75"
                                />
                              </div>
                              <div>
                                <h5 className="d-flex gap-2 fw-normal">
                                  Kitchen
                                </h5>
                              </div>
                            </div>
                          </div>
                          <Form>
                            <Row>
                              <Col lg="12">
                                <div className="mb-3">
                                  <Label for="basicpill-address-input1">
                                    Description
                                  </Label>
                                  <textarea
                                    id="basicpill-address-input1"
                                    className="form-control"
                                    rows="3"
                                    placeholder="Give us brief description of what you need..."
                                  />
                                </div>
                              </Col>
                            </Row>
                            <div class="mb-3">
                              <a
                                href="#"
                                id="attachment"
                                class="btn btn-link"
                              >
                                <i class="bx bx-paperclip"></i> Add Attachment
                              </a>
                            </div>
                            <div className="mb-3">
                              <Label>Room floor</Label>
                              <div className="d-flex border">
                                <span
                                  className="d-flex"
                                  onClick={() => {
                                    setData_attr(data_attr - 1);
                                  }}
                                >
                                  <Button type="button" color="white ">
                                    <i className="mdi mdi-minus" />
                                  </Button>
                                </span>
                                <input
                                  type="number"
                                  className="form-control border-0 text-center"
                                  value={data_attr}
                                  placeholder="number"
                                  readOnly
                                />
                                <span
                                  className=""
                                  onClick={() => {
                                    setData_attr(data_attr + 1);
                                  }}
                                >
                                  <Button type="button" color="white">
                                    <i className="mdi mdi-plus" />
                                  </Button>
                                </span>
                              </div>
                            </div>
                          </Form>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col xl="8" sm="8">
                      <Card>
                        <CardBody>
                          <Col lg="12">
                            <div class="mb-2">
                              <div className="d-flex">
                                <div>
                                  <img
                                    // src={washingroom}
                                    className="h-75 w-100"
                                  />
                                </div>
                                <div>
                                  <h5 className="d-flex gap-2 fw-normal ms-2">
                                    Washing room
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Form>
                            <Row>
                              <Col lg="12">
                                <div className="mb-3">
                                  <Label for="basicpill-address-input1">
                                    Description
                                  </Label>
                                  <textarea
                                    id="basicpill-address-input1"
                                    className="form-control"
                                    rows="3"
                                    placeholder="Give us brief description of what you need..."
                                  />
                                </div>
                              </Col>
                            </Row>
                            <div class="mb-3">
                              <a
                                href="#"
                                id="attachment"
                                class="btn btn-link"
                              >
                                <i class="bx bx-paperclip"></i> Add Attachment
                              </a>
                            </div>

                            <div className="mb-3">
                              <Label>Room floor</Label>
                              <div className="d-flex border">
                                <span
                                  className="d-flex"
                                  onClick={() => {
                                    setData_attr(data_attr - 1);
                                  }}
                                >
                                  <Button type="button" color="white ">
                                    <i className="mdi mdi-minus" />
                                  </Button>
                                </span>
                                <input
                                  type="number"
                                  className="form-control border-0 text-center"
                                  value={data_attr}
                                  placeholder="number"
                                  readOnly
                                />
                                <span
                                  className=""
                                  onClick={() => {
                                    setData_attr(data_attr + 1);
                                  }}
                                >
                                  <Button type="button" color="white">
                                    <i className="mdi mdi-plus" />
                                  </Button>
                                </span>
                              </div>
                            </div>
                          </Form>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col xl="8" sm="8">
                      <Card>
                        <CardBody>
                          <Form>
                            <Row>
                              <Col lg="12">
                                <h4 className="fw-normal">
                                  Contact Information
                                </h4>
                              </Col>
                              <Col lg="6">
                                <div className="mb-3">
                                  <Label for="basicpill-firstname-input1">
                                    Name
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input1"
                                    placeholder="Text here..."
                                  />
                                </div>
                              </Col>
                              <Col lg="6">
                                <div className="mb-3">
                                  <Label for="basicpill-lastname-input2">
                                    Surname
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-lastname-input2"
                                    placeholder="Text here..."
                                  />
                                </div>
                              </Col>
                            </Row>

                            <Row>
                              <Col lg="6">
                                <div className="mb-3">
                                  <Label for="basicpill-phoneno-input3">
                                    Phone
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-phoneno-input3"
                                    placeholder="Text here..."
                                  />
                                </div>
                              </Col>
                              <Col lg="6">
                                <FormGroup>
                                  <Label for="basicpill-phoneno-input3">
                                    Phone
                                  </Label>
                                  <div className="d-flex">
                                    <select
                                      className="form-control me-2"
                                      style={{ maxWidth: "100px" }}
                                    >
                                      <option value="+1">+1 (US)</option>
                                      <option value="+91">+91 (India)</option>
                                      <option value="+44">+44 (UK)</option>
                                      <option value="+61">
                                        +61 (Australia)
                                      </option>
                                    </select>
                                    <Input
                                      type="number"
                                      className="form-control"
                                      id="basicpill-phoneno-input3"
                                      placeholder="xxxxxxxxxx"
                                    />
                                  </div>
                                </FormGroup>
                              </Col>
                            </Row>
                          </Form>
                        </CardBody>
                      </Card>
                      {/* <div className="actions clearfix text-end">
                        <button
                          style={{ width: "100px" }}
                          className={` btn btn-primary p-2 text-white (activeTab === 3 ? "next disabled" : "next" )`}
                        >
                          Send
                        </button>
                      </div> */}

                     <div className="d-flex flex-wrap">
                       <div className="actions clearfix text-start" style={{width:"50%"}}>
                       <button
                            style={{ width: '100px',backgroundColor:"#41619A", color:"#fff" }}
                            className={` btn p-2`}
                            onClick={() => {
                                toggleTab(activeTab - 1);
                            }}>
                         Previous
                        </button>
                        </div>
                        <div className="actions clearfix text-end" style={{width:"50%"}}>
                        <button
                            style={{ width: "100px",backgroundColor:"#41619A", color:"#fff" }}
                            className={` btn btn-primary p-2 text-white (activeTab === 3 ? "next disabled" : "next" )`}>
                         Send
                        </button>
                        
                        </div>
                    </div>
                    </Col>
                  </Row></>
  )
}

export default DescriptionContactInfo