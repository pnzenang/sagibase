import { LiaUsersCogSolid } from 'react-icons/lia';
import { LiaClipboardListSolid } from 'react-icons/lia';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { LuGroup } from 'react-icons/lu';
import RegistrationFaqs from './RegistrationFaqs';

const Registration = () => {
  return (
    <>
      <section className='pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]'>
        <div className=' mx-auto'>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4'>
              <div className='mx-auto mb-[60px] max-w-[510px] text-center lg:mb-[90px]'>
                <h2 className='mb-3 text-3xl font-bold leading-[1.2] text-base-content sm:text-4xl md:text-[40px]'>
                  What is the SAGI registration process?
                </h2>
                <p className='text-base-content '>
                  Your registration depend on the type of member you want to be,
                  as you may already know, SAGI has two types of membership: the
                  traditional membership and the Pool membership.
                </p>
              </div>
            </div>
          </div>

          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4 md:w-1/2 xl:w-1/4 hover:bg-base-200'>
              <div className='relative mx-auto mb-10 max-w-[370px] text-center'>
                <div className='absolute -right-4 top-12 hidden h-1 w-16 border-t-2 border-dashed border-primary xl:block 2xl:w-[75px]'></div>
                <div className='relative mx-auto mb-8 flex h-[100px] w-[100px] items-center justify-center rounded-[20px] bg-primary text-white'>
                  <LiaUsersCogSolid className='w-10 h-10' />
                </div>
                <h3 className='mb-5 text-2xl font-semibold text-primary'>
                  Individuals
                </h3>
                <p className='text-base-content text-left'>
                  If your association is already member of SAGI, and already has
                  a 4-letter code.
                  <br />
                  <br />
                  <span className='font-bold text-primary'>1</span>- The
                  delegate should Fill out this mandatory form:
                  <br />
                  <a
                    href='https://docs.google.com/forms/d/e/1FAIpQLSdGmkYyHR03aV9otU2Z7I1rvtP3pbDHJBzGmCamqDvOmvQTMg/viewform?usp=sf_link'
                    className='text-cyan-600 font-bold '
                  >
                    SAGI INTRODUCTORY FORM
                  </a>
                  <br />
                  <br />
                  <span className='font-bold text-primary'>2</span>-One delegate
                  (the main delegate) should register their association by
                  clicking the register button (top right of the screen), and
                  log in to his/her dashboard to add and start managing the
                  members.
                  <br />
                  <br /> <span className='font-bold text-primary'>3</span>-If
                  the members are already SAGI members, there is nothing else to
                  do after filing the SAGI mandatory introductory form, SAGI
                  management will render them vested withing 48 hours.
                  <br />
                  <br />
                  <span className='font-bold text-primary'>4</span>-If the
                  members are new, they will have to wait for 90 days, and make
                  sure that their registration fees are received by SAGI
                  administration within 90 days in order to receive their
                  matriculations.
                </p>
              </div>
            </div>
            <div className='w-full px-4 md:w-1/2 xl:w-1/4 hover:bg-base-200'>
              <div className='relative mx-auto mb-10 max-w-[370px] text-center'>
                <div className='absolute -left-4 top-12 hidden h-1 w-16 border-t-2 border-dashed border-primary xl:block 2xl:w-[75px]'></div>
                <div className='absolute right-[-14px] top-12 hidden h-1 w-16 border-t-2 border-dashed border-primary xl:block 2xl:w-[75px]'></div>
                <div className='mx-auto mb-8 flex h-[100px] w-[100px] items-center justify-center rounded-[20px] bg-primary text-white'>
                  <LiaClipboardListSolid className='w-10 h-10' />
                </div>
                <h3 className='mb-5 text-2xl font-semibold text-primary'>
                  Existing associations.
                </h3>
                <p className='text-base-content text-left'>
                  If your association is already member of SAGI, and already has
                  a 4-letter code.
                  <br />
                  <br />
                  <span className='font-bold text-primary'>1</span>- The
                  delegate should Fill out this mandatory form:
                  <a
                    href='https://docs.google.com/forms/d/e/1FAIpQLSdGmkYyHR03aV9otU2Z7I1rvtP3pbDHJBzGmCamqDvOmvQTMg/viewform?usp=sf_link'
                    className='text-cyan-600 font-bold '
                  >
                    <br />
                    SAGI INTRODUCTORY FORM
                  </a>
                  <br />
                  <br />
                  <span className='font-bold text-primary'>2</span>-One delegate
                  (the main delegate) should register their association by
                  clicking the register button (top right of the screen), and
                  log in to his/her dashboard to add and start managing the
                  members.
                  <br />
                  <br /> <span className='font-bold text-primary'>3</span>-If
                  the members are already SAGI members, there is nothing else to
                  do after filing the SAGI mandatory introductory form, they
                  will be rendered vested within 48 hours.
                  <br />
                  <br />
                  <span className='font-bold text-primary'>4</span>-If the
                  members are new, they will have to wait for 90 days, and make
                  sure that their registration fees are received by SAGI
                  administration within 90 days in order to receive their
                  matriculations.
                </p>
              </div>
            </div>

            <div className='w-full px-4 md:w-1/2 xl:w-1/4 hover:bg-base-200'>
              <div className='relative mx-auto mb-10 max-w-[370px] text-center'>
                <div className='absolute -left-4 top-12 hidden h-1 w-16 border-t-2 border-dashed border-primary xl:block 2xl:w-[75px]'></div>
                <div className='absolute right-[-14px] top-12 hidden h-1 w-16 border-t-2 border-dashed border-primary xl:block 2xl:w-[75px]'></div>
                <div className='mx-auto mb-8 flex h-[100px] w-[100px] items-center justify-center rounded-[20px] bg-primary text-white'>
                  <LuGroup className='w-10 h-10' />
                </div>
                <h3 className='mb-5 text-2xl font-semibold text-primary'>
                  New Associations.
                </h3>
                <p className='text-base-content text-left'>
                  If your association is new to SAGI, don't attend to create
                  your own 4-letter code as it will get disregarded voided and
                  deleted with your account all together.
                  <br />
                  <br />
                  <span className='font-bold text-primary'>1</span>- The
                  delegate should Fill out this mandatory form:
                  <a
                    href='https://docs.google.com/forms/d/e/1FAIpQLSdGmkYyHR03aV9otU2Z7I1rvtP3pbDHJBzGmCamqDvOmvQTMg/viewform?usp=sf_link'
                    className='text-cyan-600 font-bold '
                  >
                    <br />
                    SAGI INTRODUCTORY FORM
                  </a>
                  <br />
                  <br />
                  <span className='font-bold text-primary'>2</span>-No more than
                  48 hours after filling the mandatory form above, the main
                  delegate will receive the association 4-letter code witch will
                  allow him to create the association's authentic account. The
                  delegate can then log in and start adding and managing his
                  association's members.
                  <br />
                  <br /> <span className='font-bold text-primary'>3</span>
                  -Members that are already SAGI members will be rendered vested
                  withing 48 hours.
                  <br />
                  new members will wait for 90 days, and make sure that their
                  registration fees are received by SAGI administration within
                  90 days in order to receive their matriculations
                </p>
              </div>
            </div>
            <div className='w-full px-4 md:w-1/2 xl:w-1/4 hover:bg-base-200'>
              <div className='relative mx-auto mb-10 max-w-[370px] text-center'>
                <div className='absolute left-[-14px] top-12 hidden h-1 w-16 border-t-2 border-dashed border-primary xl:block 2xl:w-[75px]'></div>
                <div className='mx-auto mb-8 flex h-[100px] w-[100px] items-center justify-center rounded-[20px] bg-primary text-white'>
                  <MdOutlineAdminPanelSettings className='w-10 h-10' />
                </div>
                <h3 className='mb-5 text-2xl font-semibold text-primary'>
                  Returning Associations.
                </h3>
                <p className='text-base-content text-left'>
                  If your association was member of SAGI, and already has a
                  4-letter code but has not been participating.
                  <br />
                  <br />
                  <span className='font-bold text-primary'>1</span>- The
                  delegate should Fill out this mandatory form:
                  <a
                    href='https://docs.google.com/forms/d/e/1FAIpQLSdGmkYyHR03aV9otU2Z7I1rvtP3pbDHJBzGmCamqDvOmvQTMg/viewform?usp=sf_link'
                    className='text-cyan-600 font-bold'
                  >
                    <br />
                    SAGI INTRODUCTORY FORM
                  </a>
                  <br />
                  <br />
                  <span className='font-bold text-primary'>2</span>-One delegate
                  (the main delegate) should register their association by
                  clicking the register button (top right of the screen), and
                  login to his/her dashboard to add and start managing the
                  members.
                  <br />
                  <br /> <span className='font-bold text-primary'>3</span>-Get
                  in touch with SAGI administration by sending an email to{' '}
                  <span className='text-primary'>info@mySagi.org</span> in order
                  to signal the Admin that your association is returning and
                  receive all the modalities to return in good standing.
                  <br />
                  <br />
                  <span className='font-bold text-primary'>4</span>-the existing
                  members will receive their matriculations as soon as the
                  association comply with all the SAGI requirements to return,
                  while the new members wait for their 90 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RegistrationFaqs />
    </>
  );
};
export default Registration;
