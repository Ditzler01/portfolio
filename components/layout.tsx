import Script from "next/script";
import Head from "next/head";

import { ReactNode } from "react";
import Navbar from "./navbar";

interface Props
{
    children: ReactNode;
}

export default function Layout({ children }: Props)
{
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="shortcut icon" href="./favicon.ico" />
                <title>Portfolio | Ditzler Santos</title>
            </Head>

            <div className="font w-full h-full flex flex-col relative">
                <Navbar/>
                { children }
            </div>
            
            <Script src="../public/js/nav.js"/>
        </>
    );
}
