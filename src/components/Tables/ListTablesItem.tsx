import React, { useState } from 'react';
import infoIcon from '@/assets/Tables/svg/info.svg';
import downIcon from '@/assets/Tables/svg/down.svg';
import Popup from '@/components/UI/Popup';
import TablesPopupOrder from './TablesPopupOrder';

interface ListTablesItemProps {
  item: any;
  isCallTable: number;
  styleSizeCell: string;
}

const ListTablesItem: React.FC<ListTablesItemProps> = ({
  item,
  isCallTable,
  styleSizeCell,
}) => {
  const [activeStatus, setActiveStatus] = useState<number>(0);
  const [isActiveStatusPopup, setIsActiveStatusPopup] = useState(false);
  return (
    <li
      className={`${isCallTable === item.id && 'bg-[#D0EEF1]'} flex justify-between items-center border-b-[1px] border-b-[#EEEEEE] h-[48px] `}
      key={item.id}
    >
      <div className="text-center w-[120px]">
        <span className='font-[500]'>{item.id}</span>
      </div>
      <div className={`${styleSizeCell} flex justify-center `}>
        <img
          src={infoIcon}
          alt="icon"
          className="p-2 cursor-pointer hover:shadow-xl rounded-full transition"
          onClick={() => setIsActiveStatusPopup(true)}
        />
        {isActiveStatusPopup ? (
          <div className="absolute z-10 left-0 right-0 top-[182px]  flex justify-center ">
            <Popup
              className="min-w-[500px] min-h-[300px] bg-white rounded-[12px] text-center "
              setIsActivePopup={setIsActiveStatusPopup}
              activePopup={isActiveStatusPopup}
            >
              <TablesPopupOrder />
            </Popup>
          </div>
        ) : (
          ''
        )}
      </div>
      <div
        className={`${styleSizeCell} flex justify-end relative cursor-pointer gap-[40px] px-[10px]`}
      >
        {isCallTable === item.id && <span className=" text-gray-400 text-[14px] font-normal">Select</span>}
        <img
          src={downIcon}
          alt="icon"
          onClick={() => setActiveStatus(item.id)}
        />
        <Popup
          className=" bg-white absolute rounded-md left-0 w-full z-50 font-normal"
          setIsActivePopup={setActiveStatus}
          activePopup={activeStatus === item.id}
        >
          <div className="flex flex-col py-2  w-[90%] gap-2">
            <span className="hover:text-gray-600  transition ">
              {item.status}
            </span>
            <span className="hover:text-gray-600 transition">id:{item.id}</span>
          </div>
        </Popup>
      </div>
      <div className={`${styleSizeCell} flex justify-center`}>
        {isCallTable === item.id && (
          <span className="w-[16px] h-[16px] bg-[#26D353] rounded-full"></span>
        )}
      </div>
    </li>
  );
};

export default ListTablesItem;
