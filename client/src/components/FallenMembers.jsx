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
                    <td className={TdStyle.TdStyle}>NMNESAGI043</td>
                    <td className={TdStyle.TdStyle2}>PATRICK</td>
                    <td className={TdStyle.TdStyle}>ASSIBONG AGBOR</td>
                    <td className={TdStyle.TdStyle2}>25-SEP-19</td>
                    <td className={TdStyle.TdStyle}>01-JUL-24</td>
                    <td className={TdStyle.TdStyle}>MASSACHUSETTS</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>METASAGI074</td>
                    <td className={TdStyle.TdStyle2}>TEDDY</td>
                    <td className={TdStyle.TdStyle}>TEBOH BOUDJAY</td>
                    <td className={TdStyle.TdStyle2}>25-AUG-22</td>
                    <td className={TdStyle.TdStyle}>16-JUL-24</td>
                    <td className={TdStyle.TdStyle}>CALIFORNIA</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>CDFCSAGI015</td>
                    <td className={TdStyle.TdStyle2}>BERNARD</td>
                    <td className={TdStyle.TdStyle}>TUKA FRU </td>
                    <td className={TdStyle.TdStyle2}>25-APR-20</td>
                    <td className={TdStyle.TdStyle}>19-JUN-24</td>
                    <td className={TdStyle.TdStyle}>TEXAS</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>HNCASAGI045</td>
                    <td className={TdStyle.TdStyle2}>JEAN BERNARD</td>
                    <td className={TdStyle.TdStyle}>TCHOMOGHO</td>
                    <td className={TdStyle.TdStyle2}>25-APR-21</td>
                    <td className={TdStyle.TdStyle}>29-JUL-24</td>
                    <td className={TdStyle.TdStyle}>MASSACHUSETTS</td>
                  </tr>

                  <tr>
                    <td className={TdStyle.TdStyle}>MANYSAGI044</td>
                    <td className={TdStyle.TdStyle2}>EBOT ESTHER </td>
                    <td className={TdStyle.TdStyle}>MAKIA TABOT</td>
                    <td className={TdStyle.TdStyle2}>25-OCT-18</td>
                    <td className={TdStyle.TdStyle}>29-JUL-24</td>
                    <td className={TdStyle.TdStyle}>CAMEROON</td>
                  </tr>

                  <tr>
                    <td className={TdStyle.TdStyle}>ACGRSAGI009</td>
                    <td className={TdStyle.TdStyle2}>CONSTANTINE </td>
                    <td className={TdStyle.TdStyle}>NDOPING</td>
                    <td className={TdStyle.TdStyle2}>1-Jul-24</td>
                    <td className={TdStyle.TdStyle}>5-Aug-24</td>
                    <td className={TdStyle.TdStyle}>NEW JERSEY</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>MBCASAGI185</td>
                    <td className={TdStyle.TdStyle2}> MARGARET </td>
                    <td className={TdStyle.TdStyle}>IGWACHO MANDA</td>
                    <td className={TdStyle.TdStyle2}>25-May-21</td>
                    <td className={TdStyle.TdStyle}>9-Aug-24</td>
                    <td className={TdStyle.TdStyle}>MARYLAND</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>ACDASAGI133</td>
                    <td className={TdStyle.TdStyle2}> ACHA GRACE </td>
                    <td className={TdStyle.TdStyle}>ANDONG SABUM </td>
                    <td className={TdStyle.TdStyle2}>1-Jan-24</td>
                    <td className={TdStyle.TdStyle}>15-Aug-24</td>
                    <td className={TdStyle.TdStyle}>TEXAS</td>
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
