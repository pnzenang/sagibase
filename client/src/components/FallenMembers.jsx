const TdStyle = {
  ThStyle: `w-1/6 min-w-[160px] border-l border-transparent py-4 pl-3 text-lg font-bold text-white lg:py-7 lg:px-4`,
  TdStyle: `text-dark border-b  border-primary bg-base-100  py-5 pl-12 text-left text-base font-medium uppercase`,
  TdStyle2: `text-dark border-b border-primary bg-base-100  py-5 pl-12 text-left text-base font-medium uppercase`,
};

const Table = () => {
  return (
    <section className=' dark:bg-dark lg:py-20 bg-base-200 mx-auto' id='death'>
      <div className='align-element'>
        <div className='flex flex-wrap '>
          <div className='w-full '>
            <div className='max-w-full overflow-x-auto '>
              <h1 className='text-2xl text-center sm:text-5xl py-10 font-bold '>
                Members for whom we are contributing this May 2024.
              </h1>
              <table className='w-full table-auto'>
                <thead className='text-center bg-primary'>
                  <tr>
                    <th className={TdStyle.ThStyle}> Matriculation </th>
                    <th className={TdStyle.ThStyle}> First Name(s) </th>
                    <th className={TdStyle.ThStyle}> Last & Middle Names </th>
                    <th className={TdStyle.ThStyle}> Registration Date </th>
                    <th className={TdStyle.ThStyle}> Date of Death </th>
                    <th className={TdStyle.ThStyle}> Location</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className={TdStyle.TdStyle}>BANESAGI015</td>
                    <td className={TdStyle.TdStyle2}>SAMUEL</td>
                    <td className={TdStyle.TdStyle}>TIAKO</td>
                    <td className={TdStyle.TdStyle2}>25-Dec-19</td>
                    <td className={TdStyle.TdStyle}>30-Jun-23</td>
                    <td className={TdStyle.TdStyle}>Massachusetts</td>
                  </tr>

                  <tr>
                    <td className={TdStyle.TdStyle}>LBLMSAGI143</td>
                    <td className={TdStyle.TdStyle2}>CLARA</td>
                    <td className={TdStyle.TdStyle}>NKEMASONG BEZA,</td>
                    <td className={TdStyle.TdStyle2}>1-Apr-24</td>
                    <td className={TdStyle.TdStyle}>3-Apr-24</td>
                    <td className={TdStyle.TdStyle}>Arizona</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>PCCHSAGI045</td>
                    <td className={TdStyle.TdStyle2}>ROLAND LOUIS</td>
                    <td className={TdStyle.TdStyle}>NJENGE</td>
                    <td className={TdStyle.TdStyle2}>25-Jul-15</td>
                    <td className={TdStyle.TdStyle}>12-Apr-24</td>
                    <td className={TdStyle.TdStyle}>Texas</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>LBLMSAGI090</td>
                    <td className={TdStyle.TdStyle2}>ELIZABETH</td>
                    <td className={TdStyle.TdStyle}>BELL</td>
                    <td className={TdStyle.TdStyle2}>3-MAR-2020</td>
                    <td className={TdStyle.TdStyle}>22-Feb-2024</td>
                    <td className={TdStyle.TdStyle}>California</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>UFSRSAGI042</td>
                    <td className={TdStyle.TdStyle2}>SOPHIE</td>
                    <td className={TdStyle.TdStyle}>MAKWANE</td>
                    <td className={TdStyle.TdStyle2}>25-Mar-18</td>
                    <td className={TdStyle.TdStyle}>15-Apr-24</td>
                    <td className={TdStyle.TdStyle}>Texas</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>BEDOSAGI057</td>
                    <td className={TdStyle.TdStyle2}>MICHAEL</td>
                    <td className={TdStyle.TdStyle}>ETCHU AYUK</td>
                    <td className={TdStyle.TdStyle2}>1-Dec-23</td>
                    <td className={TdStyle.TdStyle}>16-Apr-24</td>
                    <td className={TdStyle.TdStyle}>Massachusetts</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>TKGUSAGI071</td>
                    <td className={TdStyle.TdStyle2}>MARTHA</td>
                    <td className={TdStyle.TdStyle}>MAKOR MEIN</td>
                    <td className={TdStyle.TdStyle2}>8-Apr-23</td>
                    <td className={TdStyle.TdStyle}>30-Apr-24</td>
                    <td className={TdStyle.TdStyle}>Pennsylvania</td>
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
