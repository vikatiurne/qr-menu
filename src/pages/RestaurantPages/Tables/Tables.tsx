import { useDispatch, useSelector } from 'react-redux';
import { initializeTables } from './tablesSlice';
import { useEffect, useState } from 'react';
import infoIcon from '@/assets/Tables/svg/info.svg';
import downIcon from '@/assets/Tables/svg/down.svg';
import Popup from '@/components/UI/Popup';
import TablesPopup from '@/components/Tables/TablesPopup';
import { useParams } from 'react-router-dom';

const Tables: React.FC = () => {
  const [isCallTable, setIsCallTable] = useState(1);
  const [isActivePopup, setIsActivePopup] = useState(false);
  // const [isActivePopupTableStatus , setIsActivePopupTableStatus] = useState(false)
  const [isActiveStatus, setIsActiveStatus] = useState(0);

  const dispatch = useDispatch();
  const { tables } = useSelector((state) => state.tables);

  const styleSizeCell = 'w-[170px] text-center ';

  useEffect(() => {
    dispatch(initializeTables(3));
  }, []);

  return (
    <div className="relative">
      <h1 className="text-[52px] font-semibold ml-[86px] mt-[48px] text-[#15C5CE]">
        Tables
      </h1>
      <div className="flex items-center justify-center">
        <ul className="">
          <li className="flex justify-between items-center bg-[#FAFAFA]  border-b-[1px] border-b-[#EEEEEE] h-[48px]">
            <span className="w-[120px] text-center font-medium">Table №</span>
            <span className={`${styleSizeCell} font-medium `}>Order</span>
            <span className={`${styleSizeCell} font-medium `}>
              Table status
            </span>
            <span className={`${styleSizeCell} font-medium `}>Call</span>
          </li>
          {tables.map((item) => (
            <li
              className={`${isCallTable === item.id && 'bg-[#D0EEF1]'} flex justify-between items-center border-b-[1px] border-b-[#EEEEEE] h-[48px] `}
              key={item.id}
            >
              <div className="text-center w-[120px]">
                <span>{item.id}</span>
              </div>
              <div className={`${styleSizeCell} flex justify-center `}>
                <img
                  src={infoIcon}
                  alt="icon"
                  className="p-2 cursor-pointer hover:shadow-xl rounded-full transition"
                  onClick={() => setIsActivePopup(!isActivePopup)}
                />
              </div>
              <div
                className={`${styleSizeCell} flex justify-end relative cursor-pointer`}
              >
                <img
                  src={downIcon}
                  alt="icon"
                  onClick={() => setIsActiveStatus(item.id)}
                />
                {isActiveStatus === item.id && (
                  <Popup className=" bg-white absolute rounded-md left-0 w-full z-50">
                    <div className='flex flex-col py-2  w-[90%] gap-2' onMouseLeave={() => setIsActiveStatus(0)}>
                      <span className="hover:text-gray-600  transition ">
                        {item.status}
                      </span>
                      <span className="hover:text-gray-600 transition">
                        id:{item.id}
                      </span>
                    </div>
                  </Popup>
                )}
              </div>
              <div className={`${styleSizeCell} flex justify-center`}>
                {isCallTable === item.id && (
                  <span className="w-[16px] h-[16px] bg-[#26D353] rounded-full"></span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      {isActivePopup && (
        <div className="absolute left-0 right-0 top-[182px] flex justify-center ">
          <Popup className="min-w-[500px] min-h-[300px] bg-white rounded-[12px] text-center">
            <TablesPopup
              setIsActivePopup={setIsActivePopup}
              isActivePopup={isActivePopup}
            />
          </Popup>
        </div>
      )}
    </div>
  );
};

export default Tables;
