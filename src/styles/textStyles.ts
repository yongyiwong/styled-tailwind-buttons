import tw from 'twin.macro';
import styled from 'styled-components';

interface ITextProps {
  color?: string;
  textAlign?: string;
}

const H1 = styled.h1<ITextProps>(
  ({ color = '#201547', textAlign = 'left' }) => [
    tw`
  font-BigCaslon
  align-top
  text-h1
  leading-h1
  tracking-wide
`,
    `
  color: ${color};
  text-align:${textAlign}
  `,
  ],
);

const H2 = styled.h2<ITextProps>(
  ({ color = '#201547', textAlign = 'left' }) => [
    tw`
  font-BigCaslon
  align-top
  text-h2
  leading-h2
`,
    `
  color: ${color};
  text-align:${textAlign}
  `,
  ],
);

const H3 = styled.h3<ITextProps>(
  ({ color = '#201547', textAlign = 'left' }) => [
    tw`
  font-BigCaslon
  align-top
  text-h3
  leading-h3
`,
    `
  color: ${color};
  text-align:${textAlign}
  `,
  ],
);

const H4 = styled.h4<ITextProps>(
  ({ color = '#201547', textAlign = 'left' }) => [
    tw`
  font-BigCaslon
  align-top
  text-h4
  leading-h4
`,
    `
  color: ${color};
  text-align:${textAlign}
  `,
  ],
);

const H5 = styled.h5<ITextProps>(
  ({ color = '#201547', textAlign = 'left' }) => [
    tw`
  font-BigCaslon
  align-top
  text-h5
  leading-h5
`,
    `
  color: ${color};
  text-align:${textAlign}
  `,
  ],
);

const H6 = styled.h6<ITextProps>(
  ({ color = '#201547', textAlign = 'left' }) => [
    tw`
  font-BigCaslon
  align-top
  text-h6
  leading-h6
`,
    `
  color: ${color};
  text-align:${textAlign}
  `,
  ],
);

const XLarge = styled.p<ITextProps>(
  ({ color = '#201547', textAlign = 'left' }) => [
    tw`
  font-SohneBuch
  font-thin
  align-top
  text-xl
  leading-xl
`,
    `
  color: ${color};
  text-align:${textAlign}
  `,
  ],
);

const XLargeBold = tw(XLarge)`
  font-SohneHalbfett
  font-bold
`;

const Large = styled.p<ITextProps>(
  ({ color = '#201547', textAlign = 'left' }) => [
    tw`
  font-SohneBuch
  font-thin
  align-top
  text-lg
  leading-lg
`,
    `
  color: ${color};
  text-align:${textAlign}
  `,
  ],
);

const LargeBold = tw(Large)`
  font-SohneHalbfett
  font-bold
`;

const Medium = styled.p<ITextProps>(
  ({ color = '#201547', textAlign = 'left' }) => [
    tw`
  font-SohneBuch
  font-thin
  align-top
  text-md
  leading-md
`,
    `
  color: ${color};
  text-align:${textAlign}
  `,
  ],
);

const MediumBold = tw(Medium)`
  font-SohneHalbfett

`;

const Normal = styled.p<ITextProps>(
  ({ color = '#201547', textAlign = 'left' }) => [
    tw`
  font-SohneBuch
  font-thin
  align-top
  text-base
`,
    `
  color: ${color};
  text-align:${textAlign}
  `,
  ],
);

const NormalBold = tw(Normal)`
  font-SohneHalbfett
  font-bold
`;

const Small = styled.p<ITextProps>(
  ({ color = '#201547', textAlign = 'left' }) => [
    tw`
  font-SohneBuch
  font-thin
  align-top
  text-sm
  leading-sm
`,
    `
  color: ${color};
  text-align:${textAlign}
  `,
  ],
);

const SmallBold = tw(Small)`
  font-SohneHalbfett
  font-bold
`;

const XSmall = styled.p<ITextProps>(
  ({ color = '#201547', textAlign = 'left' }) => [
    tw`
  font-SohneBuch
  font-thin
  align-top
  text-xs
  leading-sm
`,
    `
  color: ${color};
  text-align:${textAlign}
  `,
  ],
);

const XSmallBold = tw(XSmall)`
  font-SohneHalbfett
  font-bold
`;
const XXSmall = styled.p<ITextProps>(
  ({ color = '#201547', textAlign = 'left' }) => [
    tw`
  font-SohneBuch
  font-thin
  align-top
`,
    `
  font-size:0.6875rem;
  color: ${color};
  text-align:${textAlign}
  `,
  ],
);

const Text = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  XLarge,
  XLargeBold,
  Large,
  LargeBold,
  Medium,
  MediumBold,
  Normal,
  NormalBold,
  Small,
  SmallBold,
  XSmall,
  XSmallBold,
  XXSmall,
};

export default Text;
