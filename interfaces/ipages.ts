import { INavigation } from './inavigation';
import { ISection } from './isection';

export interface IPage {
  ver: string;
  title: string;
  description: string;
  logoUrl: string;
  navigationMenus: INavigation[];
  sections: ISection[];
}
