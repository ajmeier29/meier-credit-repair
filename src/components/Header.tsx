import Navbar from "./Navbar";


export default function Header() {
    return (
        <>
            <div className="relative z-50 flex md:items-center md:justify-center slideUpFromBottomSlow">
                <Navbar />
            </div>
        </>
    )
}