import calendar from '../assets/images/calendar.svg';
const MonthAtGlance = () => {
  return (
    <section
      id='timetable'
      className='relative bg-base-200   pb-4 lg:pt-[80px] rounded-xl lg:pb-10'
    >
      <h2 className='text-base-content text-center px-8  pt-12 text-2xl font-bold sm:text-4xl md:text-[40px]'>
        At SAGI, the month is divided into 4 big determining moments
      </h2>
      <div className='container  '>
        <div className='mx-10 mb-10 flex flex-wrap items-center lg:mb-[60px]'>
          <div className='w-full px-4 lg:w-6/12'>
            <div className='mb-[60px] max-w-[500px] xl:mb-[70px]'>
              <h2 className='text-base-content text-3xl font-bold sm:text-4xl md:text-[40px]'></h2>
            </div>
            <div className='flex flex-wrap -mx-4'>
              <div className='w-full max-w-[520px] px-4 py-5'>
                <div className='flex mb-12 group'>
                  <div className='border-primary bg-primary group-hover:text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center rounded-full border-2 text-xl font-semibold text-white group-hover:bg-transparent md:h-[80px] md:max-w-[80px] md:text-4xl'>
                    1
                  </div>
                  <div className='w-full'>
                    <h3 className='text-base-content mb-4 text-xl font-semibold sm:text-4xl '>
                      From the 1st to the 4th:
                    </h3>
                    <p className='text-base-content leading-relaxed '>
                      Lorem ipsum amet consectetur adipiscing do eiusmod tempor
                      incididunt ut labore.
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full max-w-[520px] px-4 py-5'>
                <div className='flex mb-12 group'>
                  <div className='border-primary bg-primary group-hover:text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center rounded-full border-2 text-xl font-semibold text-white group-hover:bg-transparent md:h-[80px] md:max-w-[80px] md:text-4xl'>
                    2
                  </div>
                  <div className='w-full'>
                    <h3 className=' mb-4 text-xl font-semibold sm:text-4xl text-base-content'>
                      From the 5th to the 20ieth:
                    </h3>
                    <p className='text-base-content leading-relaxed '>
                      Lorem ipsum amet consectetur adipiscing do eiusmod tempor
                      incididunt ut labore.
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full max-w-[520px] px-4 py-5'>
                <div className='flex mb-12 group'>
                  <div className='border-primary bg-primary group-hover:text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center rounded-full border-2 text-xl font-semibold text-white group-hover:bg-transparent md:h-[80px] md:max-w-[80px] md:text-4xl'>
                    3
                  </div>
                  <div className='w-full'>
                    <h3 className='text-base-content mb-4 text-xl font-semibold sm:text-4xl'>
                      From the 21st to the End of the month
                    </h3>
                    <p className=' leading-relaxed text-base-content'>
                      Lorem ipsum amet consectetur adipiscing do eiusmod tempor
                      incididunt ut labore.
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full max-w-[520px] px-4 py-5'>
                <div className='flex mb-12 group'>
                  <div className='border-primary bg-primary group-hover:text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center rounded-full border-2 text-xl font-semibold text-white group-hover:bg-transparent md:h-[80px] md:max-w-[80px] md:text-4xl'>
                    4
                  </div>
                  <div className='w-full'>
                    <h3 className=' mb-4 text-xl font-semibold sm:text-4xl text-base-content'>
                      Fully responsive design
                    </h3>
                    <p className='text-base-content leading-relaxed '>
                      Lorem ipsum amet consectetur adipiscing do eiusmod tempor
                      incididunt ut labore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=' w-full px-4   lg:w-6/12 sm:calendar '>
            <div className='right-0 hidden w-1/2  lg:absolute lg:flex lg:-translate-y-1/2 mx-10'>
              <img
                src={calendar}
                alt='calendar'
                className='max-w-full ml-auto'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MonthAtGlance;
