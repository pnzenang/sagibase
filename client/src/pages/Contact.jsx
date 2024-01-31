import { IoIosGlobe } from 'react-icons/io';
import { FiPhoneCall } from 'react-icons/fi';
import { FaRegEnvelope } from 'react-icons/fa6';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import ScrollToTop from 'react-scroll-to-top';

import React, { useState } from 'react';

const Contact5 = () => {
  return (
    <section>
      <ScrollToTop smooth color='#0891b2' width='40' />
      <div className='my-10'>
        <h1 className='text-3xl sm:text-6xl text-center font-bold capitalize text-base-content'>
          contact
        </h1>
        <div className='w-28 h-1 mt-3 bg-cyan-600 mx-auto mb-20'></div>
      </div>
      <div className='bg-base-200 rounded-md pb-10 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[110px]'>
        <div className='container mx-auto'>
          <div className='-mx-4 sm:flex '>
            <div className='w-full px-4 md:w-1/3'>
              <div className='mb-10 text-center'>
                <div className='mx-auto mb-5 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-tg-bg text-primary bg-base-300 sm:h-[130px] sm:w-[130px]'>
                  <FiPhoneCall className='w-10 h-10' />
                </div>
                <div className='text-center'>
                  <h4 className='mb-3 text-2xl font-semibold text-base-content '>
                    Phone Number
                  </h4>
                  <p className='text-primary text-body-color dark:text-dark-6'>
                    +88 (800) 123 4567
                  </p>
                </div>
              </div>
            </div>
            <div className='w-full px-4 md:w-1/3'>
              <div className='mb-10 text-center'>
                <div className='mx-auto mb-5 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-tg-bg text-primary bg-base-300 sm:h-[130px] sm:w-[130px]'>
                  <FaRegEnvelope className='w-10 h-10' />
                </div>
                <div className='text-center'>
                  <h4 className='mb-3 text-2xl font-semibold text-base-content'>
                    Email Address
                  </h4>
                  <p className='text-primary text-body-color dark:text-dark-6'>
                    info@mySagi.org
                  </p>
                </div>
              </div>
            </div>

            <div className='w-full px-4 md:w-1/3'>
              <div className='mb-10 text-center'>
                <div className='mx-auto mb-5 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-tg-bg text-primary bg-base-300 sm:h-[130px] sm:w-[130px]'>
                  <HiOutlineBuildingOffice2 className='w-10 h-10' />
                </div>
                <div className='text-center'>
                  <h4 className='mb-3 text-2xl font-semibold text-dark dark:text-base-content'>
                    Our Address
                  </h4>
                  <p className='text-primary text-body-color dark:text-dark-6'>
                    82 12th Street, Office 14,
                  </p>
                  <p className='text-primary text-body-color dark:text-dark-6'>
                    Edinburgh, UK
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-tg-bg py-20 dark:bg-dark-2 lg:py-[120px]'>
        <div className='container mx-auto'>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4'>
              <div className='mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20'>
                <h2 className='mb-4 text-3xl font-bold text-base-content dark:text-base-content sm:text-4xl md:text-[40px]'>
                  How Can We Help ?
                </h2>
                <p className='text-base text-body-color dark:text-dark-6'>
                  Leave us a message and we will contact you within 24 to 48
                  hours.
                </p>
              </div>
            </div>
          </div>
          <div>
            <form>
              <div className='-mx-4 flex flex-wrap justify-center'>
                <InputBox labelTitle='Your Name' type='text' name='name' />
                <InputBox labelTitle='Your Email' type='email' name='email' />
                <TextArea
                  labelTitle='Message'
                  row='4'
                  placeholder=''
                  name='details'
                />

                <div className='w-full px-4 sm:w-8/12 lg:w-4/12'>
                  <div className='text-center'>
                    <button
                      type='submit'
                      className='block w-full rounded-md bg-primary px-10 py-5 text-center text-base font-medium text-white transition hover:bg-opacity-90'
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact5;

const InputBox = ({ type, placeholder, name, labelTitle }) => {
  return (
    <div className='w-full px-4 md:w-1/2'>
      <div className='mb-7 lg:mb-9'>
        <label className='mb-3 block text-base-content font-medium text-dark  md:mb-5'>
          {labelTitle}
          <span className='text-red-500'> * </span>
        </label>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className='w-full rounded border border-stroke bg-base-200 px-[14px] py-3 text-base leading-relaxed text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark dark:text-dark-6 md:px-[18px] md:py-4'
        />
      </div>
    </div>
  );
};

const TextArea = ({ row, placeholder, name, defaultValue, labelTitle }) => {
  return (
    <div className='w-full px-4'>
      <div className='mb-7 lg:mb-9'>
        <label className='mb-3 block text-base font-medium text-dark dark:text-base-content md:mb-5'>
          {labelTitle} <span className='text-red-500'>*</span>
        </label>
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className='w-full resize-none rounded border border-stroke bg-base-200 px-[14px] py-3 text-base leading-relaxed text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark dark:text-dark-6 md:px-[18px] md:py-4'
          defaultValue={defaultValue}
        />
      </div>
    </div>
  );
};
