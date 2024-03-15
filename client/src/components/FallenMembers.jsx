const TdStyle = {
  ThStyle: `w-1/6 min-w-[160px] border-l border-transparent py-6 px-3 text-lg font-medium text-white lg: py-7 lg:px-4`,
  TdStyle: `text-dark border-t  border-primary bg-base-100 dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-8 px-2 text-center text-base font-medium`,
  TdStyle2: `text-dark border-t border-primary bg-base-100 dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
};

const Table = () => {
  return (
    <section className=' dark:bg-dark lg:py-20 bg-base-200 mx-auto' id='death'>
      <div className='align-element'>
        <div className='flex flex-wrap '>
          <div className='w-full '>
            <div className='max-w-full overflow-x-auto '>
              <h1 className='text-2xl text-center sm:text-5xl py-10 font-bold '>
                Members for whom we are contributing for this month.
              </h1>
              <table className='w-full table-auto'>
                <thead className='text-center bg-primary'>
                  <tr>
                    <th className={TdStyle.ThStyle}> Matriculation </th>
                    <th className={TdStyle.ThStyle}> First Name </th>
                    <th className={TdStyle.ThStyle}> Last Name </th>
                    <th className={TdStyle.ThStyle}> Registration Date </th>
                    <th className={TdStyle.ThStyle}> Date of Death </th>
                    <th className={TdStyle.ThStyle}> Publication Date </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className={TdStyle.TdStyle}>ASANNA234567</td>
                    <td className={TdStyle.TdStyle2}>Manfred</td>
                    <td className={TdStyle.TdStyle}>MANDIN ATOGA</td>
                    <td className={TdStyle.TdStyle2}>3-MAR-2022</td>
                    <td className={TdStyle.TdStyle}>3-MAR-2024</td>
                    <td className={TdStyle.TdStyle}>6-FEB-2024</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>ASANNA234567</td>
                    <td className={TdStyle.TdStyle2}>Manfred</td>
                    <td className={TdStyle.TdStyle}>MANDIN ATOGA</td>
                    <td className={TdStyle.TdStyle2}>3-MAR-2022</td>
                    <td className={TdStyle.TdStyle}>3-MAR-2024</td>
                    <td className={TdStyle.TdStyle}>6-FEB-2024</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>ASANNA234567</td>
                    <td className={TdStyle.TdStyle2}>Manfred</td>
                    <td className={TdStyle.TdStyle}>MANDIN ATOGA</td>
                    <td className={TdStyle.TdStyle2}>3-MAR-2022</td>
                    <td className={TdStyle.TdStyle}>3-MAR-2024</td>
                    <td className={TdStyle.TdStyle}>6-FEB-2024</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>ASANNA234567</td>
                    <td className={TdStyle.TdStyle2}>Manfred</td>
                    <td className={TdStyle.TdStyle}>MANDIN ATOGA</td>
                    <td className={TdStyle.TdStyle2}>3-MAR-2022</td>
                    <td className={TdStyle.TdStyle}>3-MAR-2024</td>
                    <td className={TdStyle.TdStyle}>6-FEB-2024</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>ASANNA234567</td>
                    <td className={TdStyle.TdStyle2}>Manfred</td>
                    <td className={TdStyle.TdStyle}>MANDIN ATOGA</td>
                    <td className={TdStyle.TdStyle2}>3-MAR-2022</td>
                    <td className={TdStyle.TdStyle}>3-MAR-2024</td>
                    <td className={TdStyle.TdStyle}>6-FEB-2024</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>ASANNA234567</td>
                    <td className={TdStyle.TdStyle2}>Manfred</td>
                    <td className={TdStyle.TdStyle}>MANDIN ATOGA</td>
                    <td className={TdStyle.TdStyle2}>3-MAR-2022</td>
                    <td className={TdStyle.TdStyle}>3-MAR-2024</td>
                    <td className={TdStyle.TdStyle}>6-FEB-2024</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>ASANNA234567</td>
                    <td className={TdStyle.TdStyle2}>Manfred</td>
                    <td className={TdStyle.TdStyle}>MANDIN ATOGA</td>
                    <td className={TdStyle.TdStyle2}>3-MAR-2022</td>
                    <td className={TdStyle.TdStyle}>3-MAR-2024</td>
                    <td className={TdStyle.TdStyle}>6-FEB-2024</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>ASANNA234567</td>
                    <td className={TdStyle.TdStyle2}>Manfred</td>
                    <td className={TdStyle.TdStyle}>MANDIN ATOGA</td>
                    <td className={TdStyle.TdStyle2}>3-MAR-2022</td>
                    <td className={TdStyle.TdStyle}>3-MAR-2024</td>
                    <td className={TdStyle.TdStyle}>6-FEB-2024</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;
