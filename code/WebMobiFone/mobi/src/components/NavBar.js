import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import image from "../MBF_QuyChuanLogo_160219-02.png";

export default function NavBar() {
    return (
        <header className="bg-blue-600">
            <div className="container mx-auto flex justify-between">
             
                <nav className="flex">
                    <NavLink 
                        to="/" 
                        exact
                        activeClassName="text-white"
                        className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-blue-700 text-4xl font-bold cursive tracking-widest"
                    >
                        <img
            src={image}
            
            width="150"
            /> 
                    </NavLink>
                    <NavLink 
                        to="/gioithieu"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-800"
                        activeClassName="text-white-100 bg-white-700"
                        >
                        Giới Thiệu
                    </NavLink>
                    <a href="https://www.w3schools.com/"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-800"
                        activeClassName="text-white-100 bg-white-700"
                        >Thiết Bị</a>
                    <NavLink 
                        to="/tintuc"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-800"
                        activeClassName="text-white-100 bg-white-700"
                        >
                        Tin Tức
                    </NavLink>
                    <NavLink
                        to="/post"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                        activeClassName="text-red-100 bg-red-700"
                        >
                        Blog Posts
                    </NavLink>
                    <NavLink 
                        to="/tuyendung"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-800"
                        activeClassName="text-white-100 bg-white-700"
                        >
                        Tuyển Dụng
                        </NavLink>   

                        <NavLink 
                        to="/project"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-800"
                        activeClassName="text-white-100 bg-white-700"
                        >
                        Project
                        </NavLink> 
                        
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://twitter.com/kapehe_ok"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://youtube.com/c/kapehe"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://linkedin.com/in/kapehe"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
            </div>
        </header>
    )
}