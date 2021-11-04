import styled from 'styled-components';

export const ContainerCard = styled.div `
    @media(min-width:320px){
        background: transparent url(${props => props.backgroundImage}) 50% 50% no-repeat padding-box;
        background-color: #F3F0F7;
        display: flex;
        item-align: center;
        justify-content: space-between;
        
        top: 423px;
        left: 11px;
        width: 338px;
        height: 154px;
        margin: 16px auto 12px;
        border-radius: 28px;
        top: 674px;
        left: 592px;
        width: 352px;
        height: 228px;
        margin-top:6px;
        margim-bottom: 12px;
    }
    
    @media only screen and (min-width: 361px) {
        margin-right: 10px;
        top: 674px;
        left: 592px;
        width: 352px;
        height: 228px;
        margin-top:6px;
        margim-bottom: 12px;
    }
`
export const DiscountStamp = styled.div `
    margin-left: 9.5px;
    top: 443px;
    left: 20px;
    width: 62px;
    height: 62px;
    margin-top: 20px;
    background: #FD5766 0% 0% no-repeat padding-box;
    opacity: 1;
    text-align: center;
    clip-path: circle();
    color: #FFFFFF;
    text-transform: uppercase;
    p:first-child {
        text-align: center;
        font: normal normal bold 19px/12px Montserrat;
        margin: 21px 9px 0;
    }
    p:last-child {
        text-align: center;
        margin-bottom: 13.73px;
        font: normal normal bold 12px/12px Montserrat;
    }
`
export const ProductDescription = styled.div `
    margin: 16px 5.5px;
    left: 179px;
    width: 174px;
    text-align: center;
    color: #262626;
    span {
        text-align: center;
        font: normal normal normal 20px/14px Montserrat;
    }
    p {
        text-align: center;
        font: normal normal normal 12px/14px Montserrat;
    }
    button {
        text-align: center;
        font: normal normal bold 11px/14px Montserrat;
        text-transform: uppercase;
        opacity: 1;
        border-radius: 18px;
        color: #FFFFFF;
        top: 523px;
        left: 192px;
        width: 137px;
        height: 37px;
        background: #FC525F 0% 0% no-repeat padding-box;
    }
    @media only screen and (min-width: 361px) {
        margin-right: 18px;
        align-self: center;
        button {
            margin-top: 24px;
        }
    }
   
`
export const Price = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    p:first-child {
        margin: 6px 4px 3px;
        text-align: center;
        font: normal normal normal 11px/14px Montserrat;
    }
    p:last-child {
        text-align: center;
        text-decoration: line-through;
        font: normal normal normal 11px/14px Montserrat;
    }
`
export const PriceDiscount = styled.div `
    display: flex;
    align-items: center;
    margin-bottom: 6px;
    justify-content: center;
    p:first-child {
        margin-right: 4px;
        text-align: center;
        font: normal normal normal 11px/14px Montserrat;
    }
    p:last-child {
        text-align: center;
        font: normal normal bold 14px/18px Montserrat;
    }
`