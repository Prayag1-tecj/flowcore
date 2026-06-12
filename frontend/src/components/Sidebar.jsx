import {
    LayoutDashboard,
    CheckSquare,
    FileText,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar() {
    function Sidebar() {
        const linkClass = ({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-xl transition ${isActive
                ? "bg-indigo-600 text-white"
                : "text-slate-400 hover:bg-slate-800 hover:text-white"
            }`;

        return (
            <aside className="hidden md:flex w-64 bg-slate-900 border-r border-slate-800 flex-col">

                <nav className="p-4 space-y-2">

                    <NavLink
                        to="/"
                        end
                        className={linkClass}
                    >
                        <LayoutDashboard size={18} />
                        Dashboard
                    </NavLink>

                    <NavLink
                        to="/tasks"
                        className={linkClass}
                    >
                        <CheckSquare size={18} />
                        Tasks
                    </NavLink>

                    <NavLink
                        to="/notes"
                        className={linkClass}
                    >
                        <FileText size={18} />
                        Notes
                    </NavLink>

                </nav>

            </aside>
        );
    }
}

export default Sidebar;