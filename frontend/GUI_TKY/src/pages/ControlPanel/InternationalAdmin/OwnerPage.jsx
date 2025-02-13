import React, { useEffect, useState, useMemo } from 'react';

import { Col, Row, } from "reactstrap";
import flag from '../../../assets/images/flag-round.png'
import user from '../../../assets/images/user.png'
import location from '../../../assets/images/location.png'
import TableContainer from "../../../components/Common/TableContainer";
import customer from '../../../assets/images/customers.png'
import companies from '../../../assets/images/companies.png'
import product from '../../../assets/images/product.png'
import portaluser from '../../../assets/images/portaluser.png'
import InternationalHeader from "./InternationalHeader";
import active from "../../../assets/images/active.png"
import { getUserDetailsData } from '@/store/actions';
import '../controlpaneladmin.scss';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
const OwnerPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [ActivateLink, setActivateLink] = useState(null);
    const [usersDetailsData, setUsersDetailsData] = useState([]);
    const handleLinkClick = (linkName) => {
        setActivateLink(linkName);
    };
    const [activeTab, setActiveTab] = useState("Super admins"); // Default tab

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    const columns = useMemo(
        () => [

            {
                header: "Name",
                accessorKey: "name",
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: "Main manager",
                accessorKey: "main_manager",
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: "Employees",
                accessorKey: "employees",
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: "Admins",
                accessorKey: "admins",
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: "Customers",
                accessorKey: "customers",
                enableColumnFilter: false,
                enableSorting: true,

            },
            {
                header: 'Actions',
                enableColumnFilter: false,
                enableSorting: false,
                accessorKey: "status",
                cell: (cell) => {
                    return (
                        <div className="text-danger d-flex text-end">
                            <img src={active} alt="" className='h-25 ,w-25' />
                            {/* Vertical Line */}
                            <div
                                style={{
                                    borderLeft: "1px solid #EAEEF4",
                                    height: "20px",
                                    margin: "0 8px",
                                }}
                            ></div>
                            {/* Deactivate Link */}
                            <a
                                href="#"
                                className="mb-0 fs-5 border-bottom deactivate-link"
                                style={{
                                    position: "relative",
                                    textDecoration: "none",
                                    color: "#CA3D35"
                                    // paddingBottom: "2px",
                                }}
                            >
                                Deactivate
                                <span
                                    style={{
                                        position: "absolute",
                                        bottom: "-2px",
                                        left: "0",
                                        width: "100%",
                                        height: "2px",
                                        backgroundColor: "#CA3D35",
                                        content: '""',
                                    }}
                                ></span>
                            </a>
                        </div>
                    );
                }
            },
        ],
        []
    );
    const users = [
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 50,
            "admins": 3,
            "customers": 120,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 30,
            "admins": 2,
            "customers": 75,
            "status": "Deactivate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 75,
            "admins": 5,
            "customers": 200,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 12,
            "admins": 1,
            "customers": 40,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 90,
            "admins": 4,
            "customers": 250,
            "status": "Deactivate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Camilla Larson",
            "employees": 20,
            "admins": 2,
            "customers": 60,
            "status": "Activate"
        },
        {
            "name": "Company G",
            "main_manager": "Christopher Main",
            "employees": 55,
            "admins": 3,
            "customers": 150,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 50,
            "admins": 3,
            "customers": 120,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 30,
            "admins": 2,
            "customers": 75,
            "status": "Deactivate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 75,
            "admins": 5,
            "customers": 200,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 12,
            "admins": 1,
            "customers": 40,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 90,
            "admins": 4,
            "customers": 250,
            "status": "Deactivate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Camilla Larson",
            "employees": 20,
            "admins": 2,
            "customers": 60,
            "status": "Activate"
        },
        {
            "name": "Company G",
            "main_manager": "Christopher Main",
            "employees": 55,
            "admins": 3,
            "customers": 150,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 50,
            "admins": 3,
            "customers": 120,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 30,
            "admins": 2,
            "customers": 75,
            "status": "Deactivate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 75,
            "admins": 5,
            "customers": 200,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 12,
            "admins": 1,
            "customers": 40,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 90,
            "admins": 4,
            "customers": 250,
            "status": "Deactivate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Camilla Larson",
            "employees": 20,
            "admins": 2,
            "customers": 60,
            "status": "Activate"
        },
        {
            "name": "Company G",
            "main_manager": "Christopher Main",
            "employees": 55,
            "admins": 3,
            "customers": 150,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 50,
            "admins": 3,
            "customers": 120,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 30,
            "admins": 2,
            "customers": 75,
            "status": "Deactivate"
        },

        {
            "name": "Company G",
            "main_manager": "Christopher Main",
            "employees": 55,
            "admins": 3,
            "customers": 150,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 50,
            "admins": 3,
            "customers": 120,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 30,
            "admins": 2,
            "customers": 75,
            "status": "Deactivate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 75,
            "admins": 5,
            "customers": 200,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 12,
            "admins": 1,
            "customers": 40,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 90,
            "admins": 4,
            "customers": 250,
            "status": "Deactivate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Camilla Larson",
            "employees": 20,
            "admins": 2,
            "customers": 60,
            "status": "Activate"
        },
        {
            "name": "Company G",
            "main_manager": "Christopher Main",
            "employees": 55,
            "admins": 3,
            "customers": 150,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 50,
            "admins": 3,
            "customers": 120,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 30,
            "admins": 2,
            "customers": 75,
            "status": "Deactivate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 75,
            "admins": 5,
            "customers": 200,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 12,
            "admins": 1,
            "customers": 40,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 90,
            "admins": 4,
            "customers": 250,
            "status": "Deactivate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Camilla Larson",
            "employees": 20,
            "admins": 2,
            "customers": 60,
            "status": "Activate"
        },
        {
            "name": "Company G",
            "main_manager": "Christopher Main",
            "employees": 55,
            "admins": 3,
            "customers": 150,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 50,
            "admins": 3,
            "customers": 120,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 30,
            "admins": 2,
            "customers": 75,
            "status": "Deactivate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 75,
            "admins": 5,
            "customers": 200,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 12,
            "admins": 1,
            "customers": 40,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 90,
            "admins": 4,
            "customers": 250,
            "status": "Deactivate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Camilla Larson",
            "employees": 20,
            "admins": 2,
            "customers": 60,
            "status": "Activate"
        },
        {
            "name": "Company G",
            "main_manager": "Christopher Main",
            "employees": 55,
            "admins": 3,
            "customers": 150,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 50,
            "admins": 3,
            "customers": 120,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 30,
            "admins": 2,
            "customers": 75,
            "status": "Deactivate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 75,
            "admins": 5,
            "customers": 200,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 12,
            "admins": 1,
            "customers": 40,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 90,
            "admins": 4,
            "customers": 250,
            "status": "Deactivate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Camilla Larson",
            "employees": 20,
            "admins": 2,
            "customers": 60,
            "status": "Activate"
        },
        {
            "name": "Company G",
            "main_manager": "Christopher Main",
            "employees": 55,
            "admins": 3,
            "customers": 150,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 50,
            "admins": 3,
            "customers": 120,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 30,
            "admins": 2,
            "customers": 75,
            "status": "Deactivate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 75,
            "admins": 5,
            "customers": 200,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 12,
            "admins": 1,
            "customers": 40,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 90,
            "admins": 4,
            "customers": 250,
            "status": "Deactivate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Camilla Larson",
            "employees": 20,
            "admins": 2,
            "customers": 60,
            "status": "Activate"
        },
        {
            "name": "Company G",
            "main_manager": "Christopher Main",
            "employees": 55,
            "admins": 3,
            "customers": 150,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 50,
            "admins": 3,
            "customers": 120,
            "status": "Activate"
        },

        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 12,
            "admins": 1,
            "customers": 40,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 90,
            "admins": 4,
            "customers": 250,
            "status": "Deactivate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Camilla Larson",
            "employees": 20,
            "admins": 2,
            "customers": 60,
            "status": "Activate"
        },
        {
            "name": "Company G",
            "main_manager": "Christopher Main",
            "employees": 55,
            "admins": 3,
            "customers": 150,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 50,
            "admins": 3,
            "customers": 120,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 30,
            "admins": 2,
            "customers": 75,
            "status": "Deactivate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 75,
            "admins": 5,
            "customers": 200,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 12,
            "admins": 1,
            "customers": 40,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 90,
            "admins": 4,
            "customers": 250,
            "status": "Deactivate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Camilla Larson",
            "employees": 20,
            "admins": 2,
            "customers": 60,
            "status": "Activate"
        },
        {
            "name": "Company G",
            "main_manager": "Christopher Main",
            "employees": 55,
            "admins": 3,
            "customers": 150,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 50,
            "admins": 3,
            "customers": 120,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 30,
            "admins": 2,
            "customers": 75,
            "status": "Deactivate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 75,
            "admins": 5,
            "customers": 200,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 12,
            "admins": 1,
            "customers": 40,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 90,
            "admins": 4,
            "customers": 250,
            "status": "Deactivate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Camilla Larson",
            "employees": 20,
            "admins": 2,
            "customers": 60,
            "status": "Activate"
        },
        {
            "name": "Company G",
            "main_manager": "Christopher Main",
            "employees": 55,
            "admins": 3,
            "customers": 150,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 50,
            "admins": 3,
            "customers": 120,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 30,
            "admins": 2,
            "customers": 75,
            "status": "Deactivate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 75,
            "admins": 5,
            "customers": 200,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 12,
            "admins": 1,
            "customers": 40,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 90,
            "admins": 4,
            "customers": 250,
            "status": "Deactivate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Camilla Larson",
            "employees": 20,
            "admins": 2,
            "customers": 60,
            "status": "Activate"
        },
        {
            "name": "Company G",
            "main_manager": "Christopher Main",
            "employees": 55,
            "admins": 3,
            "customers": 150,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 50,
            "admins": 3,
            "customers": 120,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 30,
            "admins": 2,
            "customers": 75,
            "status": "Deactivate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 75,
            "admins": 5,
            "customers": 200,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 12,
            "admins": 1,
            "customers": 40,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 90,
            "admins": 4,
            "customers": 250,
            "status": "Deactivate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Camilla Larson",
            "employees": 20,
            "admins": 2,
            "customers": 60,
            "status": "Activate"
        },
        {
            "name": "Company G",
            "main_manager": "Christopher Main",
            "employees": 55,
            "admins": 3,
            "customers": 150,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 50,
            "admins": 3,
            "customers": 120,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 30,
            "admins": 2,
            "customers": 75,
            "status": "Deactivate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 75,
            "admins": 5,
            "customers": 200,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 12,
            "admins": 1,
            "customers": 40,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 90,
            "admins": 4,
            "customers": 250,
            "status": "Deactivate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Camilla Larson",
            "employees": 20,
            "admins": 2,
            "customers": 60,
            "status": "Activate"
        },
        {
            "name": "Company G",
            "main_manager": "Christopher Main",
            "employees": 55,
            "admins": 3,
            "customers": 150,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 50,
            "admins": 3,
            "customers": 120,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 30,
            "admins": 2,
            "customers": 75,
            "status": "Deactivate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 75,
            "admins": 5,
            "customers": 200,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 12,
            "admins": 1,
            "customers": 40,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 90,
            "admins": 4,
            "customers": 250,
            "status": "Deactivate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Camilla Larson",
            "employees": 20,
            "admins": 2,
            "customers": 60,
            "status": "Activate"
        },
        {
            "name": "Company G",
            "main_manager": "Christopher Main",
            "employees": 55,
            "admins": 3,
            "customers": 150,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 50,
            "admins": 3,
            "customers": 120,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 30,
            "admins": 2,
            "customers": 75,
            "status": "Deactivate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 75,
            "admins": 5,
            "customers": 200,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 12,
            "admins": 1,
            "customers": 40,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 90,
            "admins": 4,
            "customers": 250,
            "status": "Deactivate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Camilla Larson",
            "employees": 20,
            "admins": 2,
            "customers": 60,
            "status": "Activate"
        },
        {
            "name": "Company G",
            "main_manager": "Christopher Main",
            "employees": 55,
            "admins": 3,
            "customers": 150,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 50,
            "admins": 3,
            "customers": 120,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 30,
            "admins": 2,
            "customers": 75,
            "status": "Deactivate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 75,
            "admins": 5,
            "customers": 200,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 12,
            "admins": 1,
            "customers": 40,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 90,
            "admins": 4,
            "customers": 250,
            "status": "Deactivate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Camilla Larson",
            "employees": 20,
            "admins": 2,
            "customers": 60,
            "status": "Activate"
        },
        {
            "name": "Company G",
            "main_manager": "Christopher Main",
            "employees": 55,
            "admins": 3,
            "customers": 150,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 50,
            "admins": 3,
            "customers": 120,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 30,
            "admins": 2,
            "customers": 75,
            "status": "Deactivate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 75,
            "admins": 5,
            "customers": 200,
            "status": "Activate"
        },
        {
            "name": "Baderom Pluss AS",
            "main_manager": "Camilla Larson",
            "employees": 12,
            "admins": 1,
            "customers": 40,
            "status": "Activate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Christopher Main",
            "employees": 90,
            "admins": 4,
            "customers": 250,
            "status": "Deactivate"
        },
        {
            "name": "Build Forum",
            "main_manager": "Camilla Larson",
            "employees": 20,
            "admins": 2,
            "customers": 60,
            "status": "Activate"
        },
        {
            "name": "Company G",
            "main_manager": "Christopher Main",
            "employees": 55,
            "admins": 3,
            "customers": 150,
            "status": "Activate"
        },

    ]

    useEffect(() => {
        const userId = id;
        dispatch(
            getUserDetailsData({ userId }, (response, error) => {
                if (response?.status === 200) {
                    setUsersDetailsData(response?.data.data);
                } else {
                    setUsersDetailsData([]);
                }
            })
        );
    }, []);
    return (
        <>
            <InternationalHeader />
            <div className="m-5">
                <div className="mt-4">
                    <div className="mb-4">
                        <p>
                            <span className="text-color">Licenses</span>&nbsp;&nbsp;
                            <span className="icon-wrapper">
                                <i className='bx bx-chevron-up fw-bold'></i>&nbsp;&nbsp;
                            </span>
                            <span className="text_light">{usersDetailsData?.country}</span>
                        </p>


                    </div>
                    <Row className="d-flex justify-content ">
                        <Col>
                            <div className="d-flex align-items-center ">
                                <img
                                    src={flag}
                                    alt="Norwegian Flag"
                                    className="me-4"
                                />
                                <div>
                                    <h4 className="mb-1">{usersDetailsData?.country}</h4>
                                    <p className="text-muted">{usersDetailsData?.continent}</p>
                                </div>
                            </div>
                            <div className="mt-4 textContaint">
                                <span className="text-color fw-muted">Language:<span className="ms-2 fw-normal text_light" >{usersDetailsData?.language}</span></span><br />
                                <span className=" text-color fw-muted">Currency:<span className="ms-2 fw-normal text_light ">{usersDetailsData?.currency}</span></span><br />
                                <span className=" text-color fw-muted">Organisation number:<span className="ms-2 fw-normal text_light">{usersDetailsData?.mobile_no}</span></span>
                            </div>
                        </Col>
                        <Col className="justify-content-end">
                            {/* First Row */}
                            <Col className="d-flex gap-4 w-100 justify-content-end">
                                <div className="box-design">

                                    <div className=" border border-2 p-3 d-flex justify-content-between rounded-3 flex-wrap">
                                        <div>
                                            <span className="text-color text-muted">PORTAL USERS</span>
                                            <p className="fs-3 fw-bold text_blue">4,566</p>
                                        </div>
                                        <div className="d-flex justify-content-end ">
                                            <img src={portaluser} alt="" className="me-2 icon-style " />
                                        </div>
                                    </div>
                                </div>
                                <div className="box-design">
                                    <div className=" border border-2 p-3 d-flex justify-content-between rounded-3 flex-wrap">
                                        <div>
                                            <span className="text-color text-muted">CUSTOMERS</span>
                                            <p className="fs-3 fw-bold text_blue" >1,546</p>
                                        </div>
                                        <div className="d-flex justify-content-end ">
                                            <img src={customer} alt="" className="me-2 icon-style  " />
                                        </div>

                                    </div>
                                </div>
                            </Col>
                            <Col className="d-flex gap-4 w-100 justify-content-end mt-3">
                                <div className="box-design">
                                    <div className=" border border-2 p-3  d-flex justify-content-between rounded-3 flex-wrap">
                                        <div>
                                            <span className="text-color text-muted">COMPANIES</span>
                                            <p className="fs-3 fw-bold text_blue" >587</p>
                                        </div>
                                        <div className="d-flex justify-content-end ">
                                            <img src={companies} alt="" className="me-2 icon-style " />
                                        </div>
                                    </div>
                                </div>
                                <div className="box-design">

                                    <div className=" border border-2 p-3  d-flex justify-content-between rounded-3 flex-wrap">
                                        <div>
                                            <span className="text-color text-muted">PRODUCTS</span>
                                            <p className="fs-3 fw-bold text_blue" >5,445</p>
                                        </div>
                                        <div className="d-flex justify-content-end ">
                                            <img src={product} alt="" className="me-2 icon-style" />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Col>
                    </Row>

                    <h5 className="mt-4">Owner</h5>
                    <Row className="my-3 flex-wrap p-3 align-items-center border bg-sky">
                        {/* Left Column: User Image and Details */}
                        <Col xs="12" md="6" className="d-flex align-items-center mb-3 mb-md-0 flex-wrap">
                            {/* User Image */}
                            <img
                                src={user}
                                alt="Owner"
                                className="rounded-circle me-3 owner-img"
                            />
                            {/* User Name and Email */}
                            <div>
                                <h5 className="mb-1 text_light">{usersDetailsData?.name}</h5>
                                <p className="mb-0 text-muted">{usersDetailsData?.email}</p>
                            </div>
                        </Col>

                        {/* Right Column: Address, Phone, and Email */}
                        <Col
                            xs="12"
                            md="6"
                            className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-md-between gap-3 fle-wrap"
                        >
                            {/* Address */}
                            <Col xs="4" md="3" className="d-flex align-items-center">
                                <img
                                    src={location}
                                    alt="Location Icon"
                                    className="me-2 icon-style"
                                />
                                <p className="mb-0  text_light">{usersDetailsData?.address}</p>
                            </Col>

                            {/* Phone Number */}
                            <Col xs="4" md="2 " className="d-flex align-items-center">
                                <i className="bx bx-phone me-2"></i>
                                <p className="mb-0 d text_light">{usersDetailsData?.mobile_no}</p>
                            </Col>
                            {/* Email */}
                            <Col xs="3" md="4" className="d-flex align-items-center col-wrap">
                                <i className="bx bx-envelope me-2"></i>
                                <p className="mb-0  text_light">{usersDetailsData?.email}</p>
                            </Col>
                        </Col>
                    </Row>


                    {/* Tab Navigation */}
                    <Row className="mb-4 mt-5">
                        <Col className="d-flex align-items-center border-bottom">
                            {/* Managers Tab */}
                            <a
                                href="#"
                                className={`me-4 anchor-text ${activeTab === 'Managers' ? 'border-bottom border-primary fw-bold' : ''}`}
                                onClick={() => handleTabClick('Managers')}
                                style={{
                                    textDecoration: "none",
                                    color: activeTab === 'Managers' ? '#41619A' : 'black',
                                }}
                            >
                                Managers
                            </a>

                            {/* Super Admins Tab */}
                            <a
                                href="#"
                                className={`me-4 anchor-text ${activeTab === 'Super admins' ? 'border-bottom border-primary fw-bold' : ''}`}
                                onClick={() => handleTabClick('Super admins')}
                                style={{
                                    textDecoration: "none",
                                    color: activeTab === 'Super admins' ? '#41619A' : 'black',
                                }}
                            >
                                Super admins
                            </a>

                            {/* Admins Tab */}
                            <a
                                href="#"
                                className={`me-4 anchor-text ${activeTab === 'Admins' ? 'border-bottom border-primary fw-bold' : ''}`}
                                onClick={() => handleTabClick('Admins')}
                                style={{
                                    textDecoration: "none",
                                    color: activeTab === 'Admins' ? '#41619A' : 'black',
                                }}
                            >
                                Admins
                            </a>

                            {/* Customers Tab */}
                            <a
                                href="#"
                                className={`me-4 anchor-text ${activeTab === 'Customers' ? 'border-bottom border-primary fw-bold' : ''}`}
                                onClick={() => handleTabClick('Customers')}
                                style={{
                                    textDecoration: "none",
                                    color: activeTab === 'Customers' ? '#41619A' : 'black',
                                }}
                            >
                                Customers
                            </a>
                        </Col>
                    </Row>

                    <div className="tab-content mt-4">
                        {activeTab === "Managers" && <p>No data available for Managers.</p>}
                        {activeTab === "Admins" && <p>No data available for Admins.</p>}
                        {activeTab === "Customers" && <p>No data available for Customers.</p>}
                        {activeTab === "Super admins" && (
                            <TableContainer
                                columns={columns}
                                data={users || []}
                                isGlobalFilter={false}
                                isPagination={true}
                                SearchPlaceholder="Search..."
                                isCustomPageSize={false}
                                isAddButton={false}
                                buttonClass="btn btn-success waves-effect waves-light addContact-modal mb-2"
                                buttonName="New Contact"
                                tableClass=" table-nowrap  dt-responsive nowrap w-100  no-footer dtr-inline"
                                theadClass="table-light"
                                paginationWrapper="dataTables_paginate paging_simple_numbers pagination-rounded"
                                pagination="pagination"
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default OwnerPage