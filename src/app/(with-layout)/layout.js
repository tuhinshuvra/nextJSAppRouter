import NavbarComponent from "../components/Shared/Navbar";
import FooterComponent from "../components/Shared/footer";

export default function RootLayout({ children }) {
    return (
        <>
            <NavbarComponent></NavbarComponent>
            <div className=' min-h-screen'>
                {children}
            </div>
            <FooterComponent></FooterComponent>
        </>

    )
}
