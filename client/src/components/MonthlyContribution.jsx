import { TbUsersGroup } from 'react-icons/tb';
import { FaSearchDollar } from 'react-icons/fa';
import { TbUserDollar } from 'react-icons/tb';
import { AiOutlineDollarCircle } from 'react-icons/ai';

let totalContribution = 160000;

let totalVestedMember = 9000;

const Stats2 = () => {
  return (
    <section
      className='min-h-screen  bg-base-200 pb-10 pt-10 dark:bg-dark lg:pb-30 lg:pt-32 rounded-xl mt-32 mb-12'
      id='contribution'
    >
      <div className='mx-auto px-4 sm:container p-32'>
        <div className='mx-auto mb-[70px] max-w-[570px] text-center'>
          <h2 className='mb-3 text-3xl font-bold leading-[1.2] text-base-content md:text-5xl capitalize'>
            Our contribution this month
          </h2>
          <p className='text-base-content'>
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <div className='-mx-4 flex flex-wrap'>
          <StatsItem
            user={totalContribution}
            title='Total Contribution'
            icon={<FaSearchDollar className='w-10 h-10' />}
          />
          <StatsItem
            user='9,000'
            title='Vested Members'
            icon={<TbUsersGroup className='w-10 h-10' />}
          />
          <StatsItem
            user='$17.36'
            title='contribution per member'
            icon={<TbUserDollar className='w-10 h-10' />}
          />
          <StatsItem
            user='$2.17'
            title='contribution per death'
            icon={<AiOutlineDollarCircle className='w-10 h-10' />}
          />
        </div>
      </div>
    </section>
  );
};

export default Stats2;

const StatsItem = ({ user, title, icon }) => {
  return (
    <div className='w-full px-4 sm:w-1/2 lg:w-1/4 '>
      <div className='mb-10 text-center '>
        <div className='mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-[15px] bg-base-300 text-primary shadow-1 dark:bg-dark-2 dark:shadow-box-dark'>
          {icon}
        </div>
        <div className=''>
          <h3 className='mb-[10px] text-3xl font-bold leading-[1.2] text-base-contentxl:text-[40px]'>
            {user}
          </h3>
          <p className='text-lg text-body-color dark:text-dark-6'>{title}</p>
        </div>
      </div>
    </div>
  );
};
