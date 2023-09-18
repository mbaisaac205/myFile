import react from "react"
import styled from "styled-components"
import Upload from "../Pages/Upload";
import pix from "../Asset/bookLogo.jpg"

const Header = () =>{
  return(
    <div>
      <Container>
        <Logo>
            <Dlogo>
              <img src={pix} style={{height:"45px", width:"45px"}}/>
            </Dlogo>
            <H1>BookStore</H1>
        </Logo>
        <Books>
          <Icon></Icon>
          <Text>Upload Books</Text>
        </Books>
      </Container>  
    </div>
  )
} 
export default Header;
const Text = styled.div`
padding:10px 22px;
border:1px solid silver;
border-radius:5px;
background-color:orange;
font-size:19px
`
const Icon = styled.div`

`
const H1 = styled.div`
font-size:26px;
font-weight:bold;

`
const Dlogo = styled.div`
`
const Books = styled.div`
height:70px;
width:300px;
background-color:yellow;
display:flex;
justify-content:space-between;
align-items:center;
margin-right:28px;
`
const Logo = styled.div`
height:70px;
width:190px;
display:flex;
justify-content:space-between;
align-items:center;
margin-left:28px;
`
const Container = styled.div`
height:100px;
width:100%;
background-color:white;
display:flex;
justify-content:space-between;
align-items:center;
`