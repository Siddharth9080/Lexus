
import styled from "styled-components";

const section = (props) => {
    return(
        <Wrap image = {props.image}>
            <ItemTop color = {props.color}>
                <h1>Lexus {props.name}</h1>
                <p>{props.description}</p>
            </ItemTop>
            <Buttons>
                <ButtonGrp>
                    <LeftButton>
                        Price Starting At ₹{props.price}
                    </LeftButton>
                    <CentreButton>
                        Buy Now
                    </CentreButton>
                    <RightButton>
                        Book Test Drive
                    </RightButton>
                </ButtonGrp>
            </Buttons>
        </Wrap> 
    )
}

export default section

const Wrap = styled.div`
    margin-left: 0%;
    width : 100vw; 
    height : 100vh;
    display:flex;
    justify-content: space-between;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    background-image:${props => `url('${props.image}')`};
`

const ItemTop = styled.div`
    height:100vh;
    width:42.2433333333333vw;
    position: absolute;
    left:0%;
    color:${props => `${props.color}` };
    padding-top:300px;
    justify-content:center;
    text-align:center;
    
`
const ButtonGrp = styled.div`
    display: flex;
    justify-content: space-around;
    align-items:center;
    width: 20vw;
`
const Buttons = styled.div`
    display: flex;
    justify-content:center;
    width:42.2433333333333vw;
    height:100vh;
    align-items: center;
`
const LeftButton = styled.button`
    width:6vw;
    height:5vh;
    border: transparent;
    border-radius: 13px;
    background-color: rgba(0,0,0,0.5);
    color: #fff;
`
const CentreButton = styled.button`
    width:6vw;
    height:5vh;
    border: transparent;
    border-radius: 13px;
    background-color: rgba(0,0,0,0.5);
    color: #fff;
`
const RightButton = styled.button`
    width:6vw;
    height:5vh;
    border: transparent;
    border-radius: 13px;
    background-color: rgba(0,0,0,0.5);
    color: #fff;
`