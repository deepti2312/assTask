import { Link, Outlet } from "react-router-dom";
import './Layout.css'
import React from "react";


function Dashboard() {
    const users = [
        {
            details: {
                username: "@deeptii8878",
                name: "deepti Vishwakarma",
                post: 23,
                likes: 222,
                comments: 123
            }
        },
        {
            details: {
                username: "@avani9162",
                name: "avani jain",
                post: 24,
                likes: 252,
                comments: 133
            }
        },
        {
            details: {
                username: "@apurva3921",
                name: "apurva agrawal",
                post: 28,
                likes: 228,
                comments: 183
            }
        },
        {
            details: {
                username: "@shruti99",
                name: "shruti chouhan",
                post: 28,
                likes: 228,
                comments: 183
            }
        }
    ]
    console.log(users)
    return (
        <>
        <div className="fullPage">
        <div className="div0">
                <div className="div1">
                    <b>F-Inst@..!</b>
                </div>
            </div>
            <p className="p1">We have some suggetions for you, may be you know them. 
            You can see more details by Clicking them.</p>
            <ul>
                <li>
                    {
                        users.map((user) => 
                        <Link to="details" state={user.details} >
                        {user.details.username}</Link>)
                    }
                </li>
            </ul>
        </div>
        <Outlet />
    </>
    )
}

export default Dashboard;
