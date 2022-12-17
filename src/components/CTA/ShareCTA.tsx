import tw from 'twin.macro';
import styled from 'styled-components';

export const MemberElement = styled.div`
  ${tw`
    mt-6 bg-primaryPurple block md:flex flex-wrap px-6 md:px-9 pt-9 lg:pt-16 pb-8 items-end h-full mb-4 md:mb-0
  `}
`;

export const LoadMemberElement = styled(MemberElement)`
  ${tw`
        items-center
    `}
`;
