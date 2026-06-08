import background from '@/public/background.jpg'
import Image from 'next/image'

export default function Hero() {
    return (
        <div className="hero lg:min-h-[50vh] h-screen hero-bg">
            <Image src={background} alt="" fill className="hero-bg-img" priority />
            {/* mobile: fade from bottom */}
            <div className="absolute inset-x-0 bottom-0 h-[60%] bg-linear-to-t from-background to-transparent z-1  lg:hidden" />
            {/* desktop: fade from left */}
            <div className="absolute inset-y-0 left-0 w-[85%] bg-linear-to-r from-background to-transparent z-1 hidden lg:block" />
            <div className="hero-content mt-auto lg:my-auto px-3 pb-6">
                <div className="container">
                    <div className="columns">
                        <div className="column is-5-desktop">
                            <h1 className="title is-1"><span className="type-title font-black! text-red-800">Bring the Party,</span><br/><span className="type-title font-black!">We'll Bring Everything Else</span></h1>
                            <p className="subtitle mt-3 is-6 type-title ">From tents to tables and everything in between, we have what you need to make your event unforgettable.</p>
                            <div className="buttons mt-4">
                                <button className="button is-danger">Browse Rentals</button>
                                <button className="button is-link">View Packages</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}