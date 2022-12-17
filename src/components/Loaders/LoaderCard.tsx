import ContentLoader from 'react-content-loader';
import styled from 'styled-components';
import tw from 'twin.macro';

interface WrapperProps {
  marginVertical?: string;
  marginHorizontal?: string;
  width?: string;
}
const Wrapper = styled.div<WrapperProps>(
  ({ marginVertical = '0', marginHorizontal = '0', width }) => [
    `
    width: ${width};
    margin: ${marginVertical} ${marginHorizontal};
    `,
  ],
);
export interface LoaderCardProps extends WrapperProps {
  height: number;
  backgroundColor: string;
  foregroundColor: string;
}
export interface LoaderCardWrapperProps{
  width?:string;
  height?: string;
  margin?: string;
  padding?: string;
}
export const LoaderCard: React.FC<LoaderCardProps> = ({
  width = '100%',
  height,
  backgroundColor,
  foregroundColor,
  ...props
}) => {
  return (
    <Wrapper width={width} {...props}>
      <ContentLoader
        width={width}
        height={height}
        backgroundColor={backgroundColor}
        foregroundColor={foregroundColor}>
        <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
      </ContentLoader>
    </Wrapper>
  );
};

export const LoaderCardWrapper = styled.div<LoaderCardWrapperProps>(({width = '100%', height = 'auto', margin = '0', padding = '0'}) => [
  `
  width: ${width};
  height: ${height};
  margin:${margin};
  padding: ${padding};
  `
]);

export const SVGWrapper = styled.div`
  ${tw`
    w-full
  `}
  svg {
    ${tw`
      w-full h-full
    `}
  }
`;

