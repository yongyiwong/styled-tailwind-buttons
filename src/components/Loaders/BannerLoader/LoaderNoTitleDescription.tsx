import tw from 'twin.macro';
import styled from 'styled-components';
import { SVGWrapper, LoaderCard, LoaderCardWrapper } from '../LoaderCard';
import { BannerLoaderWrapper } from './BannerLoaderCommon';

const LoaderFullWrapper = styled.div`
  top: calc(50% - 2vh);
  ${tw`
    w-full absolute px-12
  `}
`;

const LoaderFullCard3 = () => {
  return (
    <LoaderCardWrapper width = '30%'>
      <LoaderCard
        height={45}
        backgroundColor='#c1c1c1'
        foregroundColor='#d2d2d2'
      />      
    </LoaderCardWrapper>
  );
};

export const LoaderNoTitleDescription: React.FC = () => {
  return (
    <BannerLoaderWrapper>
      <LoaderFullWrapper>
        <SVGWrapper>
          <LoaderFullCard3 />
        </SVGWrapper>
      </LoaderFullWrapper>
    </BannerLoaderWrapper>
  );
};
