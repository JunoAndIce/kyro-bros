import background from '@/public/background.jpg'
import background2 from '@/public/background_2.jpg'
import Image from 'next/image'

export default function Hero() {
    return (
        <div className="hero lg:min-h-[50vh] h-screen hero-bg">
            <div className="absolute inset-0 lg:left-3/5 lg:w-2/5">
                <Image src={background} alt="" fill className=" lg:hidden hero-bg-img" priority />
                <Image src={background2} alt="" fill className="hidden lg:block hero-bg-img" priority />
            </div>
            {/* mobile: fade from bottom */}
            <div className="absolute inset-x-0 bottom-0 h-[60%] bg-linear-to-t from-background to-transparent z-1  lg:hidden" />
            {/* desktop: fade from left */}
            <div className="absolute inset-y-0 left-3/5 w-[85%] bg-linear-to-r from-background to-transparent z-1 hidden lg:block" />
            <div className="hero-content mt-auto lg:my-auto px-3 pb-6">
                <div className="container">
                    <div className="columns">
                        <div className="column is-9-desktop">
                            <h1 className="title is-1 text-4xl! lg:text-8xl!"><span className="type-title font-black! text-red-800">Bring the Party,</span><br/><span className="type-title font-black!">We'll Bring Everything Else</span></h1>
                            <p className="subtitle mt-3 is-6 type-title text-sm! lg:text-xl!">From tents to tables and everything in between, we have what you need to make your event unforgettable.</p>
                            <div className="buttons mt-4">
                                <button className="button is-danger is-medium is-responsive">Browse Rentals</button>
                                <button className="button is-link is-medium is-responsive">View Packages</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}