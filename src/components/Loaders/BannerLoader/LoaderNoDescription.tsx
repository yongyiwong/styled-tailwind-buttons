import tw from 'twin.macro';
import styled from 'styled-components';
import { SVGWrapper, LoaderCard } from '../LoaderCard';
import { BannerLoaderFullCard, BannerLoaderOneThirdCard, BannerLoaderWrapper } from './BannerLoaderCommon';

const LoaderFullWrapper = styled.div`
  top: calc(50% - 10vh);
  ${tw`
    w-full absolute px-12
  `}
`;

const LoaderFullCard1 = () => {
  return (
    <BannerLoaderFullCard>
      <LoaderCard
        height={63}
        backgroundColor='#c7c7c7'
        foregroundColor='#d4d4d4'
      />
    </BannerLoaderFullCard>
  );
};

const LoaderFullCard3 = () => {
  return (
    <BannerLoaderOneThirdCard>
      <LoaderCard
        height={45}
        backgroundColor='#c1c1c1'
        foregroundColor='#d2d2d2'
      />      
    </BannerLoaderOneThirdCard>
  );
};

export const LoaderNoDescription: React.FC = () => {
  return (
    <BannerLoaderWrapper>
      <LoaderFullWrapper>
        <SVGWrapper>
          <LoaderFullCard1 />
          <LoaderFullCard3 />
        </SVGWrapper>
      </LoaderFullWrapper>
    </BannerLoaderWrapper>
  );
};
