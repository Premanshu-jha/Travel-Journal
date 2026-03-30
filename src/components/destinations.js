import fuji from '../assets/MountFuji.png'
import sydney from '../assets/Sydney.png'
import gieran from '../assets/Gieranjar.png'
const destinations = [
  {
    id: 1,
    title: "Mount Fuji",
    location: "JAPAN",
    coordinates: "35.3606, 138.7274",
    startDate: "12 Jan, 2023",
    endDate: "24 Jan, 2023",
    description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    imageUrl: fuji
  },
  {
    id: 2,
    title: "Sydney Opera House",
    location: "AUSTRALIA",
    coordinates: "-33.8568, 151.2153",
    startDate: "27 May, 2023",
    endDate: "8 Jun, 2023",
    description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.",
    imageUrl: sydney
  },
  {
    id: 3,
    title: "Geirangerfjord",
    location: "NORWAY",
    coordinates: "62.1015, 7.0941",
    startDate: "01 Oct, 2024",
    endDate: "18 Nov, 2024",
    description: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
    imageUrl: gieran
  }
];

export default destinations;