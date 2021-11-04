import React from 'react';
import { ContainerCard, DiscountStamp, ProductDescription, Price, PriceDiscount } from './styled'; 

const CardProducts = (props) => {
    return (
        <div>
            <ContainerCard backgroundImage={props.backgroundImage}>
               
               <DiscountStamp>
                    <p>{props.discountStamp}</p>
                    <p>OFF</p>
                </DiscountStamp>

                <ProductDescription>
                    <span>{props.productName} 
                        <strong>{props.productNameBold}</strong>
                    </span>
                    <p>{props.productDescription}</p>
                    
                    <Price>
                        <p>{props.price}</p>
                        <p>{props.priceDetail}</p>
                    </Price>
                    <PriceDiscount>
                        <p>{props.PriceDiscount}</p>
                        <p>{props.priceDiscountBold}</p>
                    </PriceDiscount>
                    <button>Eu Quero!</button>
                </ProductDescription>

            </ContainerCard>
        </div>
    )
}
export default CardProducts;