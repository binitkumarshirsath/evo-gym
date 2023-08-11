import HText from '@/shared/HText';
import { BenefitsTypes, SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import items from './benefitItems';
import Benefit from './Benefit';
import BenefitsPage from '@/assets/BenefitsPageGraphic.png';
import ActionButton from '@/shared/ActionButton';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="#benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        {/* Header */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui atque veritatis provident. Odit inventore
            officiis velit minima doloremque. Omnis aperiam quae nihil, veritatis assumenda voluptatibus.
          </p>
        </motion.div>
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          variants={container}
        >
          {items.map((item: BenefitsTypes) => (
            <Benefit
              key={item._id}
              title={item.title}
              description={item.description}
              icon={item.icon}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* Graphics and description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* img */}
          <img className="mx-auto" alt="benefits-page-graphics" src={BenefitsPage} />

          {/* desc */}
          <div>
            {/* title */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING <span className="text-primary-500">FIT.</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* desc */}
            <motion.div initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}>
              <p className="my-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam reprehenderit beatae libero quis, dolorum
                magnam eius, in cum aperiam, facere excepturi explicabo exercitationem commodi quod voluptas laudantium
                ipsa placeat. Obcaecati, cumque inventore, accusantium fugit laudantium perspiciatis similique dolore
                libero incidunt a fugiat aspernatur ad eum praesentium minima sint, alias asperiores!
              </p>
              <p className="my-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam reprehenderit beatae libero quis, dolorum
                magnam eius, in cum aperiam, facere excepturi explicabo exercitationem commodi quod voluptas laudantium
                ipsa placeat. Obcaecati, cumque inventore, accusantium fugit laudantium perspiciatis similique dolore
              </p>
            </motion.div>

            {/* button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:left-32 before:z-[-1] before:content-sparkles"></div>
              <ActionButton setSelectedPage={setSelectedPage}>JOIN NOW</ActionButton>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
