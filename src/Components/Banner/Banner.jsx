
const Banner = () => {
    const coverImg = 'https://i.ibb.co.com/hyzJB9Z/cover.png'
    return (
        <div className="relative">
            <div>
                <img className="w-full h-auto" src={coverImg} alt="Cover Pic" />
            </div>
            <div className="text-center w-2/3 absolute m-auto left-0 right-0 top-1/3 bottom-0">
                <div className="font-extrabold text-5xl text-white pb-3">
                    <h2>Discover an exceptional cooking class tailored for you!</h2>
                </div>

                <div className="text-sm text-white py-2">
                    <p>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                </div>

                <div className="pt-3">
                    <button className="bg-green-500 hover:bg-transparent text-white font-bold py-2 px-4 rounded-full mr-2 border-2 border-white">Explore Now</button>
                    <button className="bg-transparent hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full ml-2 border-2 border-white">Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;