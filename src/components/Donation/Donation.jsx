import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../LocalStorage/LocalStorage";
import MakeDonation from "../makeDonation/makeDonation";


const Donation = () => {


    const donations = useLoaderData()
    const [donated, setDonated] = useState([])

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

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
            {
                donated.map((donate, idx) => <MakeDonation key={idx} donate={donate}></MakeDonation>)
            }
        </div>
    );
};

export default Donation;