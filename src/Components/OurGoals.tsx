import { TypeAnimation } from "react-type-animation"

const OurGoals:React.FC =()=>{
    const displayTime:number = 1000
    const ourGoalsArray=['"Cel nr1"','"Cel nr2"','"Cel nr3"','"Cel nri"']
    return(
        
        <TypeAnimation 
            sequence={[
            ourGoalsArray[0],
            displayTime,
            ourGoalsArray[1],
            displayTime,
            ourGoalsArray[2],
            displayTime

        ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{position:"absolute",color:'white',top:'35%',left:'32%'}}
            
        />
    )
}
export default OurGoals