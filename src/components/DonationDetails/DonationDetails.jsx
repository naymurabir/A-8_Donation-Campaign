import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {

    const donationDetails = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)

    const donationDetail = donationDetails.find(donationDetail => donationDetail.id === idInt)

    const {
        picture,
        title,
        description,
        price,
        button_color
    } = donationDetail

    return (
        <div className="mt-10">
            <div className="relative">

                <img className="w-full h-[450px] rounded-md " src={picture} alt="" />

                <div className="py-6 px-4 bg-opacity-60 bg-black absolute bottom-0 w-full">

                    <button className="text-white font-normal px-3 py-2 rounded " style={{ backgroundColor: button_color }}>Donate ${price}</button>

                </div>
            </div>

            <h2 className="text-2xl font-bold mt-5">{title}</h2>
            <p className="my-4 text-sm text-justify">{description}</p>
        </div>
    );
};

export default DonationDetails;