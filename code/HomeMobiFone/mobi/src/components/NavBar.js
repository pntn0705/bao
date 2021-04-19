import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <header>
            <div>
                <nav>
                    <NavLink to="/" exact>
                        Trang Chủ
                    </NavLink>
                    <NavLink to="/gioithieu">
                        Giới Thiệu
                    </NavLink>
                    <NavLink to="/thietbi">
                        Thiết Bị
                    </NavLink>
                    <NavLink to="/tintuc">
                        Tin Tức
                    </NavLink>
                    <NavLink to=".tuyendung">
                        Tuyển Dụng
                    </NavLink>
                    
                </nav>
            </div>
        </header>
    )
}