import styled from 'styled-components';
import tw from 'twin.macro';
import {
  SVGWrapper,
  LoaderCard,
  LoaderCardWrapper,
} from '../Loaders/LoaderCard';
import { LoadMemberElement } from 'components/CTA/ShareCTA';

export const CTALoaderWrapper = styled.div`
  ${tw`
    w-full bg-primaryPurple mt-6 mb-8
  `}
`;

export const CTALoaderFullCard = styled.div`
  ${tw`
    w-full mt-4
  `}
`;

export const CTALoaderDescriptionWrapper = styled.div`
  ${tw`
    mt-6
  `}
`;

export const CTALoaderButtonCard = styled.div`
  ${tw`
    mt-6
  `}
`;

const LoaderFullCard1 = () => {
  return (
    <LoaderCardWrapper width="100%">
      <LoaderCard
        height={42}
        backgroundColor="#201547"
        foregroundColor="#302653"
      />
    </LoaderCardWrapper>
  );
};

const LoaderFullCard2 = () => {
  return (
    <CTALoaderDescriptionWrapper>
      <LoaderCardWrapper width="50%">
        <LoaderCard
          height={13}
          backgroundColor="#302653"
          foregroundColor="#24194a"
        />
      </LoaderCardWrapper>
    </CTALoaderDescriptionWrapper>
  );
};

const LoaderFullCard3 = () => {
  return (
    <CTALoaderButtonCard>
      <LoaderCardWrapper width="30%">
        <LoaderCard
          height={54}
          backgroundColor="#201547"
          foregroundColor="#302653"
        />
      </LoaderCardWrapper>
    </CTALoaderButtonCard>
  );
};

export const CTALoader: React.FC = () => {
  return (
    <LoadMemberElement>
      <SVGWrapper>
        <LoaderFullCard1 />
        <LoaderFullCard2 />
        <LoaderFullCard3 />
      </SVGWrapper>
    </LoadMemberElement>
  );
};
