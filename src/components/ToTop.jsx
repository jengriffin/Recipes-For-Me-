import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ToTop =()=>{
const { homeTop } = useLocation()
useEffect(() => {
  document.documentElement.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant"
  })
}, [homeTop])

return null

}
export default ToTop