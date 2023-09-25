import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, } from "recharts";
import { getStoredDonations } from "../LocalStorage/LocalStorage";


const Statistics = () => {

    const statisticsTotal = useLoaderData();
    const [donations, setDonations] = useState([]);

    useEffect(() => {

        const storedDonations = getStoredDonations()

        if (statisticsTotal.length > 0) {

            const exists = [];
            for (const id of storedDonations) {
                const makeDonation = statisticsTotal?.find(
                    (statistics) => statistics.id === id
                );
                exists.push(makeDonation);
            }

            setDonations(exists);
        }
    }, [statisticsTotal]);

    const currentPrice = donations.reduce(
        (previous, current) => previous + current.price,
        0
    );

    const totalPrice = statisticsTotal.reduce(
        (previous, current) => previous + current.price,
        0
    );

    const data = [
        { id: 1, name: "currentPrice", value: currentPrice },
        { id: 2, name: "totalPrice", value: totalPrice },
    ];

    const strokes = ["#00C49F", "#FF444A",];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <div className="flex justify-center items-center">

            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cy="currentPrice"
                    cx="totalPrice"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={strokes[index % strokes.length]} />
                    ))}
                </Pie>
            </PieChart>
        </div>
    );
};

export default Statistics;