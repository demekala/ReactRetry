import React from "react";

const InfoCard = ({
  card,
}: {
  card: { title: string; value: string; revenue: string; success: boolean };
}) => {
  return (

    <a href="#" className="block w-[18vw] p-6 bg-white">
      <h1 className="border-b-2">{card.title}</h1>
      <h5 className="mb-2 text-2xl font-bold">{card.value}</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{card.revenue} From Last Period</p>
    </a>

  );
};

export default InfoCard;
