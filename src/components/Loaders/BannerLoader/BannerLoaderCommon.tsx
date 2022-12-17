import tw from "twin.macro";
import styled from "styled-components";

export const BannerLoaderWrapper = styled.div`
  background: linear-gradient(#dbdbdb, #b5b5b5);
  @media only screen and (max-width: 800px){

  }  
  ${tw`
    w-full h-full absolute top-0 left-0 overflow-hidden
  `}
`;

export const BannerLoaderFullCard = styled.div`
  ${tw`
    w-full mt-6
  `}
`;

export const BannerLoaderHalfCard = styled.div`
  width: 60%;
  ${tw`
    mt-6
  `}
`;

export const BannerLoaderOneThirdCard = styled.div`
  width: 30%;
  ${tw`
    mt-6
  `}
`;