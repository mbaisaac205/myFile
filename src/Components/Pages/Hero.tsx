import react from "react"
import styled from "styled-components";
import { CiSearch } from "react-icons/ci"
import Gbt from "./Gbt"
const Hero = () =>{
  return(
    <div>
      <Container>
        <Dholder>
        <Content>
        <Gbt text="Comedy" pd="9px 13px" br="9px"/>
          <Gbt text="Music" pd="9px 13px" br="9px"/>
          <Gbt text="Fantacy" pd="9px 13px" br="9px"/>
          <Gbt text="Motivation" pd="9px 13px" br="9px"/>
          <Gbt text="Romance" pd="9px 13px" br="9px"/>
          <Gbt text="Myth" pd="9px 13px" br="9px"/>
          <Gbt text="Mystry" pd="9px 13px" br="9px"/>
          <Gbt text="Adventure" pd="9px 13px" br="9px"/>
          <Gbt text="Nature" pd="9px 13px" br="9px"/>
          <Gbt text="Lifstyle" pd="9px 13px" br="9px"/>
          <Gbt text="Science" pd="9px 13px" br="9px"/>
          <Gbt text="Business" pd="9px 13px" br="9px"/>
          <Gbt text="Career" pd="9px 13px" br="9px"/>
          <Gbt text="Tech" pd="9px 13px" br="9px"/>
        </Content>  
        <ScrollBar style={{}}>
        </ScrollBar>
        </Dholder>
        <Widin>
          <span style={{fontSize:"30px", fontWeight:"bold", color:"white"}}>
            Explore the world’s leading Books<br/>
            and Author
          </span>
          <p style={{color:"white"}}>Millions of designers and agencies around the world showcase their portfolio work<br/> on Dribbble - the home to the world’s best design and creative professionals.</p>
          <Sach>
           <Icon>
            <CiSearch style={{height:"25px", width:"25px",margin:"8px"}}/>
           </Icon>
           <input type="text" placeholder="Search By Author Name" style={{border:"none", outline:"none", flex:"1", fontSize:"20px"}}/>
          </Sach>
        </Widin>
      </Container>
      <Time>
        
      </Time>
    </div>
  )
} 
export default Hero;
const Time = styled.div`
height:50px;
`
const Icon = styled.div`

`
const Sach = styled.div`
width:300px;
height:50px;
background-color:white;
display:flex;
justify-content:space-between;
align-items:center;
border-radius:17px
`
const Widin = styled.div`
height:240px;
width:630px;
text-align:center;
display:flex;
justify-content:space-between;
flex-direction:column;
align-items:center;
margin-top:50px
`
const Dholder = styled.div`
width:90%;
height:100px;
background-color:purple;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
overflow:hidden;
`
const Content = styled.div`
// width:90%;
height:60px;
display:flex;
justify-content:center;
align-items:center;
background-color:green;
`
const ScrollBar = styled.div`
width:10000px;
overflow-x:scroll;
// -ms-overflow-style:none;
white-space:nowrap;
scrollbar-width:none;
&::-webkit-scrollbar{
  display:none;
};
background-color:white;
display:flex;
justify-content:center;
align-items:center;

`
const Container = styled.div`
height:84vh;
width:100%;
background-color:blue;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
