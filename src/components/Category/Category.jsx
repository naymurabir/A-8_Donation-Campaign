import PropTypes from 'prop-types';

const Category = ({ category }) => {

    const { picture, title, category_type, card_bg, text_color, category_bg } = category

    return (
        <div>
            <div style={{ backgroundColor: card_bg }} className='mt-10 rounded-md' >
                <img className='w-full' src={picture} alt="" />

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