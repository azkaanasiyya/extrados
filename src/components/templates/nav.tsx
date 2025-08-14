import { NavLink } from "react-router-dom";

export default function Navigation() {
    const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
        isActive
            ? "text-[14px] leading-[160%] px-4 py-[7px] bg-white-neutral-900 rounded-[8px] text-base-white cursor-pointer hover:bg-white-neutral-900 hover:rounded-[8px]"
            : "text-[14px] leading-[160%] px-4 py-[7px] text-white-neutral-400 cursor-pointer hover:bg-white-neutral-900 hover:rounded-[8px]";

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="max-w-[1200px] w-full flex flex-row items-center justify-start">
                <NavLink to="/" className={getNavLinkClass}>
                    Overview
                </NavLink>

                <NavLink to="/tokens" className={getNavLinkClass}>
                    Tokens
                </NavLink>

                <NavLink to="/pools" className={getNavLinkClass}>
                    Pools
                </NavLink>

                <NavLink to="/portfolio" className={getNavLinkClass}>
                    Portfolio
                </NavLink>

                <NavLink to="/settings" className={getNavLinkClass}>
                    Settings
                </NavLink>
            </div>
        </div>
    );
}