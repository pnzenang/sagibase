import React from 'react';

const Mission = () => {
  return (
    <section className='bg-base-100 pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]'>
      <div className='container mx-auto align-element'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4'>
            <div className='mx-auto mb-[60px] max-w-[710px] text-center lg:mb-[70px]'>
              <h2 className='mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]'>
                What SAGI promises its members?
              </h2>
              <p className='text-base text-body-color dark:text-dark-6'>
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className='-mx-4 flex flex-wrap justify-center'>
          <ServiceCard
            number='1'
            title='DEDICATION'
            details='Lorem ipsum dolor amet adipiscing eiusmod.'
          />
          <ServiceCard
            number='2'
            title='FAIRNESS'
            details='Lorem ipsum dolor amet adipiscing eiusmod.'
          />
          <ServiceCard
            number='3'
            title='CONSISTENCY'
            details='Lorem ipsum dolor amet adipiscing eiusmod.'
          />
          <ServiceCard
            number='4'
            title='COMPASSION'
            details='Lorem ipsum dolor amet adipiscing eiusmod.'
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;

const ServiceCard = ({ number, title, details }) => {
  return (
    <div className='w-full px-4 md:w-1/2 xl:w-1/4'>
      <div className='group relative mb-10 overflow-hidden rounded-[10px] border border-stroke bg-base-200 px-6 py-11 text-center duration-200 hover:-translate-y-2 hover:border-transparent hover:shadow-feature border-primary dark:bg-dark-2'>
        <div className='mx-auto mb-9 flex h-20 w-20 items-center justify-center rounded-full border border-stroke border-primary text-3xl font-semibold text-dark drop-shadow-feature group-hover:border-primary group-hover:bg-primary group-hover:text-white dark:border-dark-3 dark:text-white'>
          {number}
        </div>
        <h4 className='mb-[14px] text-lg font-semibold uppercase text-primary'>
          {title}
        </h4>
        <p className='text-base text-body-color dark:text-dark-6'>{details}</p>
        <span className='absolute bottom-0 left-0 block h-2 w-0 bg-primary duration-200 group-hover:w-full'></span>
      </div>
    </div>
  );
};
