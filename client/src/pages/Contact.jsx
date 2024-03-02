import { MapComponent } from '../components';
import { FaRegEnvelope } from 'react-icons/fa6';
import { FiPhoneCall } from 'react-icons/fi';
import { GrMapLocation } from 'react-icons/gr';
import { BiBuildingHouse } from 'react-icons/bi';

const Contact10 = () => {
  return (
    <section className='overflow-hidden bg-base-100 py-24 px-2 '>
      <div className='container mx-auto '>
        <div className='flex flex-wrap justify-center '>
          <div className='w-full px-4 xl:w-10/12'>
            <div className='-mx-4 mb-16 sm:flex flex-wrap bg-primary py-14 sm:pl-20 '>
              <div className='w-full px-4 md:w-1/2 lg:w-1/3 mx-auto  '>
                <div className='mb-5 flex lg:mb-0'>
                  <div className='mr-4'>
                    <FaRegEnvelope className='w-9 h-9 text-white' />
                  </div>
                  <div>
                    <h5 className='text-lg font-semibold text-white'>Email</h5>
                    <p className='text-base text-white/70'>info@mySagi.org</p>
                  </div>
                </div>
              </div>
              <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                <div className='mb-5 flex lg:mb-0'>
                  <div className='mr-4'>
                    <FiPhoneCall className='w-9 h-9 text-white ' />
                  </div>
                  <div>
                    <h5 className='text-lg font-semibold text-white'>
                      Phone Number
                    </h5>
                    <p className='text-base text-white/70'>1(804)214-6390</p>
                  </div>
                </div>
              </div>
              <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                <div className='mb-5 flex lg:mb-0'>
                  <div className='mr-4'>
                    <BiBuildingHouse className='w-9 h-9 text-white ' />
                  </div>
                  <div>
                    <h5 className='text-lg font-semibold text-white'>
                      Office Address
                    </h5>
                    <p className='text-base text-white/70'>
                      23612 Public House Rd
                      <br />
                      Clarksburg, Maryland, 20871
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='-mx-4 flex flex-wrap justify-center'>
          <div className='w-full px-4 lg:w-7/12 xl:w-6/12'>
            <div className='mb-12 lg:mb-0 lg:mr-4'>
              <form>
                <div className='-mx-4 flex flex-wrap'>
                  <InputBox
                    type='text'
                    name='firstName'
                    placeholder='Enter your first name'
                  />
                  <InputBox
                    type='text'
                    name='lastName'
                    placeholder='Enter your last name'
                  />
                  <InputBox
                    type='email'
                    name='email'
                    placeholder='Enter your Email'
                  />
                  <InputBox
                    type='text'
                    name='number'
                    placeholder='Enter your number'
                  />
                  <TextArea
                    row='6'
                    placeholder='Type your message here'
                    name='message'
                    defaultValue=''
                  />
                  <div className='w-full px-4'>
                    <div>
                      <button
                        type='submit'
                        className='inline-flex items-center justify-center border border-transparent bg-primary px-7 py-3 text-base font-medium text-white hover:bg-opacity-90'
                      >
                        Submit Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='w-full px-4 lg:w-5/12 xl:w-4/12'>
            <div className='map-container'>
              <MapComponent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact10;

const InputBox = ({ type, placeholder, name, labelTitle }) => {
  return (
    <div className='w-full px-4 md:w-1/2'>
      <div className='mb-7'>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className='w-full border border-stroke bg-transparent px-5 py-[17px] text-body-color outline-none focus:border-primary dark:border-dark-3 dark:text-dark-6'
        />
      </div>
    </div>
  );
};

const TextArea = ({ row, placeholder, name, defaultValue, labelTitle }) => {
  return (
    <div className='w-full px-4'>
      <div className='mb-7'>
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className='w-full resize-none border border-stroke bg-transparent px-5 py-[17px] text-body-color outline-none focus:border-primary dark:border-dark-3 dark:text-dark-6'
          defaultValue={defaultValue}
        />
      </div>
    </div>
  );
};
