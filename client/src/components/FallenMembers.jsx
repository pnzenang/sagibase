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
                Members for whom we are contributing this June 24.
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
                    <td className={TdStyle.TdStyle}>KONISAGI106</td>
                    <td className={TdStyle.TdStyle2}>JOSEPHINE</td>
                    <td className={TdStyle.TdStyle}>NANA WASSO</td>
                    <td className={TdStyle.TdStyle2}>05-Apr-22</td>
                    <td className={TdStyle.TdStyle}>12-Jul-23</td>
                    <td className={TdStyle.TdStyle}>Maryland</td>
                  </tr>

                  <tr>
                    <td className={TdStyle.TdStyle}>LBLMSAGI098</td>
                    <td className={TdStyle.TdStyle2}>ROBINSON</td>
                    <td className={TdStyle.TdStyle}>LAVADA JEAN</td>
                    <td className={TdStyle.TdStyle2}>06-Mar-20</td>
                    <td className={TdStyle.TdStyle}>22-Mar-24</td>
                    <td className={TdStyle.TdStyle}>California</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>MCDASAGI041</td>
                    <td className={TdStyle.TdStyle2}>ELIZABETH</td>
                    <td className={TdStyle.TdStyle}>ENECK MBAH</td>
                    <td className={TdStyle.TdStyle2}>25-May-17</td>
                    <td className={TdStyle.TdStyle}>22-Mar-24</td>
                    <td className={TdStyle.TdStyle}>District Of Columbia</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>BTAHSAGI046</td>
                    <td className={TdStyle.TdStyle2}>JOSEPH</td>
                    <td className={TdStyle.TdStyle}>ACHEM ASHU</td>
                    <td className={TdStyle.TdStyle2}>25-Mar-17</td>
                    <td className={TdStyle.TdStyle}>16-Apr-24</td>
                    <td className={TdStyle.TdStyle}>Texas</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>PCCHSAGI029</td>
                    <td className={TdStyle.TdStyle2}>HANNAH</td>
                    <td className={TdStyle.TdStyle}>MBUA EWENYE</td>
                    <td className={TdStyle.TdStyle2}>26-Jun-15</td>
                    <td className={TdStyle.TdStyle}>16-Apr-24</td>
                    <td className={TdStyle.TdStyle}>Texas</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>CAHASAGI009</td>
                    <td className={TdStyle.TdStyle2}> SARAPHINE</td>
                    <td className={TdStyle.TdStyle}>NKASAR KEKU</td>
                    <td className={TdStyle.TdStyle2}>01-Apr-24</td>
                    <td className={TdStyle.TdStyle}>27-Apr-24</td>
                    <td className={TdStyle.TdStyle}>Texas</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>MMENSAGI071</td>
                    <td className={TdStyle.TdStyle2}>GABRIEL</td>
                    <td className={TdStyle.TdStyle}>MANJE</td>
                    <td className={TdStyle.TdStyle2}>25-Oct-20</td>
                    <td className={TdStyle.TdStyle}>30-Apr-24</td>
                    <td className={TdStyle.TdStyle}>California</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>KUWOSAGI009</td>
                    <td className={TdStyle.TdStyle2}>VERONICA</td>
                    <td className={TdStyle.TdStyle}>BATONG NZAMS</td>
                    <td className={TdStyle.TdStyle2}>25-Oct-20</td>
                    <td className={TdStyle.TdStyle}>25-Jun-21</td>
                    <td className={TdStyle.TdStyle}>Maryland</td>
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
