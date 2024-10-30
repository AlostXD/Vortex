import Image from "next/image";

export default function Navbar() {
    return (
        <>
            <nav className="bg-black">
                <div>
                    <Image src="/favicon.ico" alt="Vortex" width={100} height={100} />
                    <h1>Vortex</h1>
                </div>
            </nav>
        </>
    )
}