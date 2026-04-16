// Root layout with Navbar and global providers
export default function RootLayout({ children }) {
    return (
        <html>
            <head>
                <link rel="stylesheet" href="/globals.css" />
            </head>
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}