import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {

    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <header className="h-16 border-b border-slate-800 bg-slate-900 flex items-center justify-between px-6">

            <h1 className="font-bold text-xl text-white">
                FlowCore
            </h1>

            <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-slate-300 hover:text-white"
            >
                <LogOut size={18} />
                Logout
            </button>

        </header>
    );
}

export default Navbar;