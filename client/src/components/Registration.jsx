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
            <div className='w-full px-4 md:w-1/2 xl:w-1/4'>
              <div className='relative mx-auto mb-10 max-w-[370px] text-center'>
                <div className='absolute -right-4 top-12 hidden h-1 w-16 border-t-2 border-dashed border-primary xl:block 2xl:w-[75px]'></div>
                <div className='relative mx-auto mb-8 flex h-[100px] w-[100px] items-center justify-center rounded-[20px] bg-primary text-white'>
                  <LiaUsersCogSolid className='w-10 h-10' />
                </div>
                <h3 className='mb-5 text-3xl font-semibold text-primary'>
                  Individuals
                </h3>
                <p className='text-base-content text-left'>
                  It depend on the type of membership and your role. If you are
                  an individual looking for SAGI coverage, if you want the
                  traditional and the most common type of membership, the only
                  thing you need to do is to enlist with and association-member
                  of SAGI or an association which is ready to register with
                  SAGI, and follow the delegates direction.
                </p>
              </div>
            </div>
            <div className='w-full px-4 md:w-1/2 xl:w-1/4'>
              <div className='relative mx-auto mb-10 max-w-[370px] text-center'>
                <div className='absolute -left-4 top-12 hidden h-1 w-16 border-t-2 border-dashed border-primary xl:block 2xl:w-[75px]'></div>
                <div className='absolute right-[-14px] top-12 hidden h-1 w-16 border-t-2 border-dashed border-primary xl:block 2xl:w-[75px]'></div>
                <div className='mx-auto mb-8 flex h-[100px] w-[100px] items-center justify-center rounded-[20px] bg-primary text-white'>
                  <LiaClipboardListSolid className='w-10 h-10' />
                </div>
                <h3 className='mb-5 text-3xl font-semibold text-primary'>
                  Delegates
                </h3>
                <p className='text-base-content text-left'>
                  If your association is already member of SAGI, and already has
                  a 4-letter code, go straight to register your association by
                  clicking the register button (top left of the screen), then
                  login to your dashboard, add your members, if the members are
                  already SAGI members, there is nothing else to do, the
                  management will make them vested withing 48 hours.
                </p>
              </div>
            </div>
            <div className='w-full px-4 md:w-1/2 xl:w-1/4'>
              <div className='relative mx-auto mb-10 max-w-[370px] text-center'>
                <div className='absolute -left-4 top-12 hidden h-1 w-16 border-t-2 border-dashed border-primary xl:block 2xl:w-[75px]'></div>
                <div className='absolute right-[-14px] top-12 hidden h-1 w-16 border-t-2 border-dashed border-primary xl:block 2xl:w-[75px]'></div>
                <div className='mx-auto mb-8 flex h-[100px] w-[100px] items-center justify-center rounded-[20px] bg-primary text-white'>
                  <LuGroup className='w-10 h-10' />
                </div>
                <h3 className='mb-5 text-3xl font-semibold text-primary'>
                  Associations.
                </h3>
                <p className='text-base-content text-left'>
                  The associations are responsible of making sure that all their
                  members are matriculated, the main delegate create an account
                  on behalf of the association and add their members. The
                  delegate should collect all individual information required in
                  the dashboard link that allow member addition, and the
                  individual registration fee.
                </p>
              </div>
            </div>
            <div className='w-full px-4 md:w-1/2 xl:w-1/4'>
              <div className='relative mx-auto mb-10 max-w-[370px] text-center'>
                <div className='absolute left-[-14px] top-12 hidden h-1 w-16 border-t-2 border-dashed border-primary xl:block 2xl:w-[75px]'></div>
                <div className='mx-auto mb-8 flex h-[100px] w-[100px] items-center justify-center rounded-[20px] bg-primary text-white'>
                  <MdOutlineAdminPanelSettings className='w-10 h-10' />
                </div>
                <h3 className='mb-5 text-3xl font-semibold text-primary'>
                  SAGI Admin.
                </h3>
                <p className='text-base-content text-left'>
                  The role of the administration is to make sure that all the
                  individuals who request to become member accomplish their
                  goals in a timely fashion. We should update members status as
                  soon as as they become vested, and clean up the database as as
                  soon as necessary to avoid confusion in the database, and
                  optimize accuracy of SAGI lists.
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
