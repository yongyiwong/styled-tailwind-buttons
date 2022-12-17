import tw from 'twin.macro';
import styled from 'styled-components';
import { SVGWrapper, LoaderCard } from '../LoaderCard';
import { BannerLoaderFullCard, BannerLoaderHalfCard, BannerLoaderOneThirdCard, BannerLoaderWrapper } from './BannerLoaderCommon';

const LoaderFullWrapper = styled.div`
  top: calc(50% - 11vh);
  ${tw`
    w-full absolute px-12
  `}
`;

const LoaderFullCard1 = () => {
  return (
    <BannerLoaderFullCard>
      <LoaderCard
        height={45}
        backgroundColor='#c0c0c0'
        foregroundColor='#c4c4c4'
      />
    </BannerLoaderFullCard>
  );
};

const LoaderFullCard2 = () => {
  return (
    <BannerLoaderHalfCard>
      <LoaderCard
        height={24}
        backgroundColor='#d8d8d8'
        foregroundColor='#cacaca'
      />
    </BannerLoaderHalfCard>
  );
};

const LoaderFullCard3 = () => {
  return (
    <BannerLoaderOneThirdCard>
      <LoaderCard
        height={45}
        backgroundColor='#c0c0c0'
        foregroundColor='#c4c4c4'
      />      
    </BannerLoaderOneThirdCard>
  );
};

export const LoaderFull: React.FC = () => {
  return (
    <BannerLoaderWrapper>
      <LoaderFullWrapper>
        <SVGWrapper>
          <LoaderFullCard1 />
          <LoaderFullCard2 />
          <LoaderFullCard3 />
        </SVGWrapper>
      </LoaderFullWrapper>
    </BannerLoaderWrapper>
  );
};
