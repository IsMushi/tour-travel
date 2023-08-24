import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'
import ServiceCard from './ServiceCard'
const servicesData = [
{
imgurl: weatherImg,
title: "Calculate Weather",
desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
},
{
imgurl: guideImg,
title: "Best Tour Guide",
desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
},
{
imgurl: customizationImg,
title: "Customization",
desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
}]

export default function ServiceList() {
  return (
    <>
    {
        servicesData.map((item,index)=>(
            <div key={index} className="columns-3xs">
                <ServiceCard items={item}  />
            </div>
        ))
    }
    </>
  )
}
