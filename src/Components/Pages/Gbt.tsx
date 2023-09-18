import react from "react"
import styled from "styled-components"


interface iButton{
  text:string,
  pd:string,
  br:string
}
const Gbt:React.FC<iButton> = ({text, pd, br }) =>{
   return(
    <div>
        <Gbutton pd="" br="">{text}</Gbutton>
    </div>
   )
}
export default Gbt;
const Gbutton = styled.div<{pd:string, br:string}>`
padding:${({pd})=>pd};
font-size:17px;
color:white;
background-color:black;
border-radius:${({br})=>br};

&:hover{
    color:black;
    background-color:white;
}
`