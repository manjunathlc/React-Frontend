import React from "react";
import styled from "styled-components";
import { BASE_URL, Button, Container } from "../../App";

const SearchResult = ({ data: foods }) => {
  return (
    <div>
      <FoodContainer>
        <Container>
        <FoodCards>
          {foods?.map(({ name, image, text, price }) => (
            <FoodCard key={name}>
              <div className="food_image">
                <img src={BASE_URL + image} alt="" />
              </div>
              <div className="food_info">
                <div className="info">
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
                <Button>$ {price.toFixed(2)}</Button>
              </div>
            </FoodCard>
          ))}
        </FoodCards>
        </Container>
      </FoodContainer>
    </div>
  );
};

export default SearchResult;

const FoodContainer = styled.section`
  min-height: 672.4px;
  background-image: url("/bg.png");
  background-size: cover;
`;

const FoodCards = styled.div`
display: flex;
flex-wrap: wrap;
row-gap: 32px;
column-gap: 20px;
justify-content: center;
align-items: center;
padding-top: 80px;
`;
const FoodCard = styled.div`
  width: 340px;
  height: 167px;
  gap: 0px;
  border-radius: 19.45px 0px 0px 0px;
  border: 0.66px 0px 0px 0px;
  opacity: 0px;
  rotate: 0 deg;

  border: 0.66px solid;

  border-image-source: radial-gradient(
        80.38% 222.5% at -13.75% -12.36%,
        #98f9ff 0%,
        rgba(255, 255, 255, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    radial-gradient(
        80.69% 208.78% at 108.28% 112.58%,
        #eabfff 0%,
        rgba(135, 38, 183, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;

  /* Rectangle 1 */

  background: url(.png),
    radial-gradient(
        90.16% 143.01% at 15.32% 21.04%,
        rgba(165, 239, 255, 0.2) 0%,
        rgba(110, 191, 244, 0.0447917) 77.08%,
        rgba(70, 144, 213, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 19.4467px;

  display: flex;
  padding: 8px;

  .food_info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    h3{
        margin-top: 8px;
        font-size: 16px;
        font-weight: 500;
    }
    p{
        margin-top: 4px;
        font-size: 12px;
    }
    button{
        font-size: 12px;
    }
}
`;
