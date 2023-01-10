import { ReactNode } from "react";
import Navbar from "./navbar";

interface Props
{
    children: ReactNode;
}

export default function Layout({ children }:Props)
{
    return (
        <div className="font">
            <Navbar/>
            { children }
        </div>
    );
}
