import { BenefitsTypes } from '@/shared/types';
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
const items: Array<BenefitsTypes> = [
  {
    _id: 1,
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: 'State of the Art Facilities',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque possimus beatae sed sunt tempora illo obcaecati aliquam est, fuga aliquid quia optio. Autem consequuntur id quibusdam. Ex consectetur porro at.',
  },
  {
    _id: 2,
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque possimus beatae sed sunt tempora illo obcaecati aliquam est, fuga aliquid quia optio. Autem consequuntur id quibusdam. Ex consectetur porro at.',
  },
  {
    _id: 3,
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: 'Expert And Pro Trainers',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque possimus beatae sed sunt tempora illo obcaecati aliquam est, fuga aliquid quia optio. Autem consequuntur id quibusdam. Ex consectetur porro at.',
  },
];

export default items;
