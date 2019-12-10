import React from 'react';

import { NavLink } from "react-router-dom";

export const Reminders = () => {
    return (
        <div>
            <h3><NavLink to="/reminders"> Add Reminders </NavLink></h3>
        </div>
    )
}