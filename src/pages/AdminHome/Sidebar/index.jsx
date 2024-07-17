import { ChevronFirst, ChevronLast, MoreVertical, LayoutDashboard, Home,ClipboardList,Layers ,Users, LogOut,LifeBuoy, Settings, MessageSquare } from "lucide-react";
import logo from "../../../../public/images/logo.avif";
import profile from "../../../../public/images/profile.png";
import { createContext, useContext, useState } from "react";
import { NavLink } from "react-router-dom";

// Define icons for sidebar items
const icons = {
    dashboard: <LayoutDashboard size={20} />,
    addProducts: <Layers size={20} />,
    customers: <Users size={20} />,
    orders: <ClipboardList size={20} />,
    messages: <MessageSquare size={20} />,
    feedback: <LifeBuoy size={20} />,
    logout: <LogOut size={20} />,
    settings: <Settings size={20} />,
};

const SidebarContext = createContext();

export default function Sidebar() {
    const [expanded, setExpanded] = useState(true);
    return (
        <aside className="h-screen fixed top-0 left-0 z-50">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <img src={logo} className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`} alt="logo" />
                    <button onClick={() => setExpanded((curr) => !curr)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                        {expanded ? <ChevronFirst /> : <ChevronLast />}
                    </button>
                </div>

                <SidebarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3">
                    
                        <NavLink> <SidebarItem icon={icons.addProducts} text="Add Products" /></NavLink>
                        <NavLink> <SidebarItem icon={icons.dashboard} text="Dashboard" active /> </NavLink>
                        
                        <SidebarItem icon={icons.customers} text="Customers" />
                        <SidebarItem icon={icons.orders} text="Orders" />
                        <SidebarItem icon={icons.messages} text="Messages" />
                        <SidebarItem icon={icons.feedback} text="Feedback" />
                        <hr className="my-3" />
                        <SidebarItem icon={icons.settings} text="Settings" />
                        <SidebarItem icon={icons.logout} text="Logout" />
                    </ul>
                </SidebarContext.Provider>

                <div className="border-t flex p-3">
                    <img src={profile} className="w-10 h-10 rounded-md" alt="profile" />
                    <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
                        <div className="leading-4">
                            <h4 className="font-semibold">AdminProfile</h4>
                            <span className="text-xs text-gray-600">@gmail.com</span>
                        </div>
                        <MoreVertical size={20} />
                    </div>
                </div>
            </nav>
        </aside>
    );
}

export function SidebarItem({ icon, text, active, alert }) {
    const { expanded } = useContext(SidebarContext);
    return (
        <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}>
            {icon}
            <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
            {alert && (
                <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`} />
            )}
            {!expanded && (
                <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                    {text}
                </div>
            )}
        </li>
    );
}
