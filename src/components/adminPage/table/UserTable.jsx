import React from "react";
import "./userTable.css";

import { useSelector } from "react-redux";

const UserTable = () => {

    const { res } = useSelector( state => state.AdminReducer )
    const { user , success } = res ;

    return (
        <>
            <div className="user-table-wrapper">
                <table className="user-table">
                    <thead className="user-table-head">
                        <tr>
                            <th> Users </th>
                        </tr>
                    </thead>
                    <tbody className="user-table-body" >
                        {user.map((val, idx) => {
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
    )            
};

export default UserTable;
