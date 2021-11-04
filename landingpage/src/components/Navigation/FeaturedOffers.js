import React from 'react';
import styled from 'styled-components';
import CardProducts from '../CardProducts/CardProducts';
import img1 from '../../assets/img/Imgfeature.png';
import img2 from '../../assets/img/imgfeat.png';

const CardContainer = styled.div`
	@media only screen and (min-width: 361px) {
		display: flex;
		text-align: center;
		justify-content: center;
		margin-bottom: 30px;
		
}
`

const FeatureOffers = () => {
    return (
        	<CardContainer>
        
        		<CardProducts 
					discountStamp={"XX%"}
					backgroundImage={img1}				 
					productName={"Fotolivro"}
					productNameBold={"Classic"}
					productDescription={"(A5 quadrado)"}
					price={"De"}
					priceDetail={"R$ XX,XX"}
					priceDiscount={"Por"}
					priceDiscountBold={"R$ XX,XX"}
				/>
				<CardProducts 
					discountStamp={"XX%"}
					backgroundImage={img2}
					productName={"Pacote"}
					productNameBold={"100 Fotos"}
					productDescription={"(10cm x 15cm)"}
					price={"De"}
					priceDetail={"R$ XX,XX"}
					priceDiscount={"Por"}
					priceDiscountBold={"R$ XX,XX"}
				/>
        	</CardContainer>
    	)
}
export default FeatureOffers;