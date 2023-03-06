import './globals.css'
import {AnalyticsWrapper} from './analytics';
// import Navbar from "@/app/navbar";
// import Alert from "@/app/Components/alert";


export const metadata = {
    title: 'GFG GLAU',
    description: 'Official Website of GFG GLAU',
    creator: 'Aman Varshney',
    keywords: ['geeksforgeeks', 'gla university', 'gfg glau', "geeksforgeeks student chapter gla university"],
    // url: 'https://gfg-glau.vercel.app/',
    icons: {
        icon: '/gfgglau.png'
    },
    category: 'technology',
    appLinks: {
        web: {
            url: 'https://gfg-glau.vercel.app/',
        }
    }
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
                  rel="stylesheet"/>
        </head>
        <body className={"relative"}>
        {/*<Alert  text={"Register Now! Entrevista: Mock placement Drive"}/>*/}
        {children}
        <AnalyticsWrapper/>
        </body>
        </html>
    )
}
