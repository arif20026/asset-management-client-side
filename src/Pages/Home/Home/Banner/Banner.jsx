
const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/Twkcq68/62da3ff90f639f2a8f469bf2-Tips-For-Choosing-Asset-Management-Software.jpg" className="w-full" />

          <button className="absolute btn btn-primary right-1/2 bottom-1/2 bg-orange-500">Join as HR/Admin</button>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>

                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/Twkcq68/62da3ff90f639f2a8f469bf2-Tips-For-Choosing-Asset-Management-Software.jpg" className="w-full" />

                <button className="absolute btn btn-primary right-1/2 bottom-1/2 bg-orange-500">Join as Employee</button>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;

<div className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/Twkcq68/62da3ff90f639f2a8f469bf2-Tips-For-Choosing-Asset-Management-Software.jpg)' }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">

            <h1> <span className="font-bold text-4xl">Welcome <br /> to <br />ASSET MANIA</span></h1>
            <h3 className="font-bold text-xl my-6">Your ultimate helper to track assets</h3>

        </div>
    </div>
</div>