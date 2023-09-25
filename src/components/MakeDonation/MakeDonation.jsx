import PropTypes from 'prop-types';


const MakeDonation = ({ donate }) => {

    const { picture, category_type, title, price, text_color, category_bg, card_bg } = donate

    return (
        <div>
            <div style={{ backgroundColor: card_bg }} className='flex items-center gap-4 rounded-md'>
                <div>
                    <img className='w-32 md:w-44 h-40 md:h-36 ' src={picture} alt="" />
                </div>

                <div className='p-3 md:p-0'>
                    <h3 className='font-bold w-24 text-center rounded-md px-2 py-1' style={{ backgroundColor: category_bg, color: text_color }}> {category_type} </h3>

                    <h2 className='font-bold' style={{ color: text_color }}> {title} </h2>
                    <h4 className='font-bold mb-1' style={{ color: text_color }}>${price}</h4>

                    <button className='px-2 py-1 rounded text-white' style={{ backgroundColor: text_color }}>View Details</button>
                </div>
            </div>
        </div>
    );
};

MakeDonation.propTypes = {
    donate: PropTypes.object.isRequired
}

export default MakeDonation;