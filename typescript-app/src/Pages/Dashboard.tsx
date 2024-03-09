import Calendar from "../Components/Dashboard/Calendar"
import Chart from "../Components/Dashboard/Chart"
import Country from "../Components/Dashboard/Country"
import InfoCard from "../Components/Dashboard/InfoCard"
import PieChart from "../Components/Dashboard/PieChart"
import { CardInfoType } from "../Types/CardInfoType"

const cardInfo: CardInfoType[] = [
  {
    title: 'Net Income',
    value: '$20.178.00',
    revenue: '23.5',
    success: true
  },
  {
    title: 'Avr. Order Value',
    value: '$896.00',
    revenue: '23.5',
    success: false
  },
  {
    title: 'Orders',
    value: "7,563",
    revenue: '12.5',
    success: true
  },
]

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full m-5">
        <div className="flex gap-4">
          {cardInfo.map((card, index) => (
            <InfoCard key={index} card={card} />
          ))}
        </div>
      </div>
      <h1>Over View</h1>
      <div className="flex">
        <div className="flex">
          <Chart />
          <Country />
        </div>
        <div className="w-1/2">
          <Calendar />
          <PieChart />
        </div>
      </div>

    </div>
  )
}

export default Dashboard