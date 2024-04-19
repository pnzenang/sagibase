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
                Members for whom we are contributing this month.
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
                    <td className={TdStyle.TdStyle}>VDCASAGI056</td>
                    <td className={TdStyle.TdStyle2}>GUITINYI</td>
                    <td className={TdStyle.TdStyle}>KOMETA</td>
                    <td className={TdStyle.TdStyle2}>20-OCT-20</td>
                    <td className={TdStyle.TdStyle}>11-DEC-2024</td>
                    <td className={TdStyle.TdStyle}>Maryland</td>
                  </tr>

                  <tr>
                    <td className={TdStyle.TdStyle}>AKUMSAGI130</td>
                    <td className={TdStyle.TdStyle2}>ROSE</td>
                    <td className={TdStyle.TdStyle}>
                      SHURI MATOH EPSE FOSSUOUO
                    </td>
                    <td className={TdStyle.TdStyle2}>25-Nov-18</td>
                    <td className={TdStyle.TdStyle}>15-Jan-2024</td>
                    <td className={TdStyle.TdStyle}>Maryland</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>COTBSAGI087</td>
                    <td className={TdStyle.TdStyle2}>WILLIAM</td>
                    <td className={TdStyle.TdStyle}>NDIFOR NGANG</td>
                    <td className={TdStyle.TdStyle2}>1-Jan-2024</td>
                    <td className={TdStyle.TdStyle}>21-Jan-2024</td>
                    <td className={TdStyle.TdStyle}>Florida</td>
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
                    <td className={TdStyle.TdStyle}>CMSRSAGI047</td>
                    <td className={TdStyle.TdStyle2}>ANDOSON</td>
                    <td className={TdStyle.TdStyle}>WEYGANG</td>
                    <td className={TdStyle.TdStyle2}>1-SEP-2023</td>
                    <td className={TdStyle.TdStyle}>23-FEV-2024</td>
                    <td className={TdStyle.TdStyle}>VIrginia</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>MDFWSAGI056</td>
                    <td className={TdStyle.TdStyle2}>ROSE</td>
                    <td className={TdStyle.TdStyle}>NGOH BARIKA</td>
                    <td className={TdStyle.TdStyle2}>3-MAR-2023</td>
                    <td className={TdStyle.TdStyle}>3-MAR-2024</td>
                    <td className={TdStyle.TdStyle}>Texas</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>LBLMSAGI125</td>
                    <td className={TdStyle.TdStyle2}>MEOTO</td>
                    <td className={TdStyle.TdStyle}>GOBINA OTTO</td>
                    <td className={TdStyle.TdStyle2}>31-Jul-2021</td>
                    <td className={TdStyle.TdStyle}>6-Mar-2024</td>
                    <td className={TdStyle.TdStyle}>Oregon</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>MICASAGI062</td>
                    <td className={TdStyle.TdStyle2}>ROSE</td>
                    <td className={TdStyle.TdStyle}>ABWA AKOTA</td>
                    <td className={TdStyle.TdStyle2}>21-Oct-2013</td>
                    <td className={TdStyle.TdStyle}>21-MAR-2024</td>
                    <td className={TdStyle.TdStyle}>Minnesota</td>
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
