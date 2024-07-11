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
                Members for whom we are contributing this July 24.
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
                    <td className={TdStyle.TdStyle}>LEBASAGI103</td>
                    <td className={TdStyle.TdStyle2}>SUZANNE</td>
                    <td className={TdStyle.TdStyle}>MEFOKO EPSE ZANGUE</td>
                    <td className={TdStyle.TdStyle2}>25-Oct-19</td>
                    <td className={TdStyle.TdStyle}>6-May-24</td>
                    <td className={TdStyle.TdStyle}>New Jersey</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>CCMWSAGI018</td>
                    <td className={TdStyle.TdStyle2}>ANASTASIA</td>
                    <td className={TdStyle.TdStyle}>PAPI</td>
                    <td className={TdStyle.TdStyle2}>25-Jan-14</td>
                    <td className={TdStyle.TdStyle}>13-May-24</td>
                    <td className={TdStyle.TdStyle}>Wisconsin</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>LBLMSAGI123</td>
                    <td className={TdStyle.TdStyle2}>MARTIN</td>
                    <td className={TdStyle.TdStyle}>MORFAW </td>
                    <td className={TdStyle.TdStyle2}>31-May-21</td>
                    <td className={TdStyle.TdStyle}>15-May-24</td>
                    <td className={TdStyle.TdStyle}>MAryland</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>MICASAGI159</td>
                    <td className={TdStyle.TdStyle2}>PATIENCE</td>
                    <td className={TdStyle.TdStyle}>LUMA GWANYAMA EPSE NDI</td>
                    <td className={TdStyle.TdStyle2}>25-Jun-21</td>
                    <td className={TdStyle.TdStyle}>25-May-24</td>
                    <td className={TdStyle.TdStyle}>TEXAS</td>
                  </tr>

                  <tr>
                    <td className={TdStyle.TdStyle}>LEBOSAGI183</td>
                    <td className={TdStyle.TdStyle2}>MARIA </td>
                    <td className={TdStyle.TdStyle}>NJINKENG NKWETTA</td>
                    <td className={TdStyle.TdStyle2}>1-Mar-24</td>
                    <td className={TdStyle.TdStyle}>8-Jun-24</td>
                    <td className={TdStyle.TdStyle}>TEXAS</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>MBCASAGI066</td>
                    <td className={TdStyle.TdStyle2}> JOSEPHIA </td>
                    <td className={TdStyle.TdStyle}>FRI AKUM </td>
                    <td className={TdStyle.TdStyle2}>25-May-14</td>
                    <td className={TdStyle.TdStyle}>10-Jun-24</td>
                    <td className={TdStyle.TdStyle}>Maryland</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>FTNISAGI009</td>
                    <td className={TdStyle.TdStyle2}>FREDERIC</td>
                    <td className={TdStyle.TdStyle}>TCHELIEBOU</td>
                    <td className={TdStyle.TdStyle2}>23-May-12</td>
                    <td className={TdStyle.TdStyle}>12-Jun-24</td>
                    <td className={TdStyle.TdStyle}>District of Columbia</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>SOBASAGI116</td>
                    <td className={TdStyle.TdStyle2}> MARGARET </td>
                    <td className={TdStyle.TdStyle}>LITUMBE</td>
                    <td className={TdStyle.TdStyle2}>25-Feb-20</td>
                    <td className={TdStyle.TdStyle}>14-Jun-24</td>
                    <td className={TdStyle.TdStyle}>CALIFORNIA</td>
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
