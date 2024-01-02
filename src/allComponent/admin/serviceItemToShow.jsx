import { observer } from "mobx-react-lite";
import { useState } from "react"

const ServiceItemToShow = ({ service }) => {

  return (<>
    <p>   id: {service.id}</p>
    <p>   name:{service.name}</p>
    <p>   description:{service.description}</p>
    <p>   price:{service.price}</p>
    <p>   duration:{service.duration}</p>
  </>)
}
export default ServiceItemToShow;