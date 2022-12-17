export interface StyleObject {
  width?: number;
  height?: number;
  background?: string;
  color?: string;
  margin?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  border?: string;
  bt?: string;
  bb?: string;
  br?: string;
  bl?: string;
  fw?: string;
}

export const deviceSize = {
  mobile: 640,
  tablet: 768,
  laptop: 1025,
  desktop: 1280,
  widescreen: 1536,
};
