import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../LocalStorage/LocalStorage";
import MakeDonation from "../makeDonation/makeDonation";


const Donation = () => {

    const donations = useLoaderData()
    const [donated, setDonated] = useState([])
    const [dataLength, setDataLength] = useState(true)

    useEffect(() => {
        const storedDonations = getStoredDonations()
        if (donations.length > 0) {
            const makeDonated = []
            for (const id of storedDonations) {
                const donation = donations.find(donation => donation.id === id)
                if (donation) {
                    makeDonated.push(donation)
                }
                setDonated(makeDonated)
            }
        }
    }, [donations])

    return (

        <div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
                {
                    dataLength ? donated.slice(0, 4).map((donate, idx) => <MakeDonation key={idx} donate={donate}></MakeDonation>) : donated.map((donate, idx) => <MakeDonation key={idx} donate={donate}></MakeDonation>)
                }
            </div>
            <div className={`flex justify-center mt-5 ${dataLength ? 'block' : 'hidden'}`}>
                <button onClick={() => setDataLength(!dataLength)}
                    className='bg-green-700 px-3 py-2 text-white font-semibold rounded-md'>See All</button>
            </div>
        </div>

    );
};

export default Donation;