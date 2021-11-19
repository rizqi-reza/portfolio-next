import { IImage } from './iimage';
import { ISocialLink } from './ilink';

export interface ISection {
  key: string;
  name: string;
  type: string;
  title: string;
  heading: string;
  description: string;
  mainLink: string;
  image?: IImage[];
  subSections?: ISubSection[];
  socialLinks?: ISocialLink[];
}

export interface ISubSection {
  title: string;
  subTitle: string;
  heading: string;
  subHeading: string;
  url: string;
  description: string;
}
