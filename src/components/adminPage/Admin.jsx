import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../../Redux/local/AdminPage";

import "./admin.css";

import i15 from '../../assets/images/New folder/i15.webp';
import UserTable from "./table/UserTable";

const Admin = () => {
    const dispatch = useDispatch();

    const { status } = useSelector((state) => state.AdminReducer);

    useEffect(() => {
        dispatch(fetchAllUsers());

        if (status == "pending") {
            toast("fetching user details ");
        } else if (status == "fullfilled") {
            toast.success("successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,

                theme: "light",
            });
        } else if (status == "rejected") {
            toast("fetching unsuccessfull ");
        }
    }, []);

    return (
        <>
            <main className="Admin-wrapper">
                <div className="image-wrapper">
                    <img id="image" src={i15} alt="not-found" />
                    <div className="image-overlay">
                        <div className="box-outer" id="colored"></div>
                        <div className="box-outer" id="text">
                            <div className="img-o-c-t ">
                                <span className="overlay-t" id="">
                                    NOTECHAT
                                </span>
                            </div>
                            <div className="img-o-c-t">
                                <h2 id="">
                                    {" "}
                                    <span className="overlay-t-2">FILE APPLICATION</span>
                                </h2>
                            </div>
                            <div className="img-o-c-t">
                                <span id="">Share your content around the world</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="admin-content-wrapper">
                    <div className="left-section"></div>
                    <div className="right-section">
                        {status == "fullfilled" ? <UserTable /> : <h1>loading</h1>}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Admin;
