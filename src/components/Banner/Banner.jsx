import PropTypes from 'prop-types';


const Banner = ({ handleSearchCategory }) => {
    return (

        <div className="hero h-[400px]" style={{ backgroundImage: 'url(https://i.ibb.co/6nMKLGW/team.jpg)' }}>
            <div className="hero-overlay bg-opacity-80 bg-white"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-2xl font-bold text-black">I Grow By Helping People In Need</h1>

                    <input id='search' className="px-2 py-1 bg-white border border-gray-300 rounded-md" type="text" placeholder="Search Here..." />

                    <button onClick={handleSearchCategory}
                        className="text-white bg-red-500 font-bold, px-2 py-1 rounded-md">Search</button>
                </div>
            </div>
        </div>
    );

};
Banner.propTypes = {
    handleSearchCategory: PropTypes.func.isRequired
}

export default Banner;