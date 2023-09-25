import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Category = ({ category }) => {

    const { id, picture, title, category_type, card_bg, text_color, category_bg } = category

    const navigate = useNavigate()

    const handleDonationDetails = () => {
        navigate(`/details/${id}`)
    }

    return (
        <div>
            <div onClick={handleDonationDetails} style={{ backgroundColor: card_bg }} className='mt-10 rounded-md' >
                <img className='w-full' src={picture} alt="category" />

                <div className='px-4 py-3'>

                    <h3 className='font-bold w-24 text-center rounded-md px-2 py-1' style={{ backgroundColor: category_bg, color: text_color }} >{category_type}</h3>

                    <h2 className='font-bold' style={{ color: text_color }} >{title}</h2>
                </div>
            </div>
        </div >
    );
};

Category.propTypes = {
    category: PropTypes.object.isRequired
}

export default Category;