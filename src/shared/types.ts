export enum SelectedPage {
  Home = 'home',
  Benefits = 'benefits',
  OurClasses = 'ourclasses',
  ContactUs = 'contactus',
}

export interface BenefitsTypes{
  icon : JSX.Element;
  _id : number;
  title : string;
  description : string;
}