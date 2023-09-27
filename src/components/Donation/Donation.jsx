import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCardDonate } from "../../utility/localstorage";
import { Link } from 'react-router-dom';

const Donation = () => {
    const donateCards = useLoaderData();

    const [appliedDonation, setAppliedDonation] = useState([]);


    useEffect(() => {
        const storedCardIds = getStoredCardDonate();
        if (donateCards.length > 0) {
            const cardsApplied = donateCards.filter(donateCard => storedCardIds.includes(donateCard.id))
            setAppliedDonation(cardsApplied);
        }
    }, [])

    return (
        <div className="max-w-[1420px] mx-auto pt-20 pb-36 px-5 grid lg:grid-cols-2 gap-6">
            {
                appliedDonation.map(listDonation => <div
                    key={listDonation.id}
                    className={`rounded-lg flex sm:flex-row flex-col bg-[${listDonation.bg}]`}
                >
                    <img className="rounded-lg sm:rounded-none" src={listDonation.pic} alt="" />
                    <div className="p-6 flex items-center">
                        <div className="space-y-2">
                            <span className={`text-sm px-3 py-1 rounded text-[${listDonation.color}] bg-[${listDonation.over}]`}>{listDonation.cate}</span>

                            <h3 className="text-2xl font-semibold text-[#0B0B0B]">{listDonation.title}</h3>

                            <span className={`font-semibold text-[${listDonation.color}]`}>${listDonation.price}.00</span>

                            <div className="sm:pb-0 pb-5 pt-3">
                                <Link to={`/${listDonation.id}`} className={`text-white font-semibold text-lg px-4 py-2 rounded bg-[${listDonation.color}]`}>View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Donation;