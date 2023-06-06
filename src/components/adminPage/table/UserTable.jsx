import React from "react";
import "./userTable.css";

const UserTable = () => {
    const data = [
        {
            name: "amit",
            email: "amitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "ankit",
            email: "ankitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "amit",
            email: "amitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "amit",
            email: "amitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "ankit",
            email: "ankitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "amit",
            email: "amitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "amit",
            email: "amitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "ankit",
            email: "ankitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "amit",
            email: "amitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "amit",
            email: "amitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "ankit",
            email: "ankitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "amit",
            email: "amitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "amit",
            email: "amitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "ankit",
            email: "ankitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "amit",
            email: "amitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "amit",
            email: "amitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "ankit",
            email: "ankitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "amit",
            email: "amitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "amit",
            email: "amitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "ankit",
            email: "ankitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "amit",
            email: "amitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "amit",
            email: "amitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "ankit",
            email: "ankitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "amit",
            email: "amitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "amit",
            email: "amitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "ankit",
            email: "ankitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "amit",
            email: "amitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "amit",
            email: "amitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "ankit",
            email: "ankitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "amit",
            email: "amitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "amit",
            email: "amitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "ankit",
            email: "ankitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "amit",
            email: "amitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "amit",
            email: "amitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "ankit",
            email: "ankitdubey6261@gmail.com",
            Role : "user"
        },
        {
            name: "amit",
            email: "amitdubey6261@gmail.com",
            Role : "user"
        },
    ];
    return (
        <>
            <div className="user-table-wrapper">
                <table className="user-table">
                    <thead className="user-table-head">
                        <th> Users </th>
                    </thead>
                    <tbody className="user-table-body" >
                        {data.map((val, idx) => {
                            return (
                                <tr key={idx} className="user-table-row">
                                    <td className="t-data id">{idx}</td>
                                    {/* <td className="t-data"><img src={fil} alt="not-f" /></td> */}
                                    <td className="t-data">{val.name}</td>
                                    <td className="t-data">{val.email}</td>
                                    <td className="t-data">{Date.now()}</td>
                                    <td className="t-btn-w "><button className="table-btn edt">edit</button></td>
                                    <td className="t-btn-w "><button className="table-btn del"> delete </button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default UserTable;
