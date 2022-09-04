import React from 'react'
import "./SidebarOp.css";

const SidebarOp = ({ title, Icon }) => {
    return (
        <div className="sidebar-op">
            {Icon && <Icon className="Icon" />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SidebarOp