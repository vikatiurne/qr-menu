import React from 'react';
import infoIcon from '@/assets/Tables/svg/info.svg';
import downIcon from '@/assets/Tables/svg/down.svg';
import Popup from '@/components/UI/Popup';

interface ListTablesItemProps {
  item: any;
  isCallTable: number;
  isActiveStatus: number;
  isActivePopup: boolean;
  setIsActiveStatus: (id: number) => void;
  setIsActivePopup: (boolean) => void;
  styleSizeCell:string
}

const ListTablesItem: React.FC<ListTablesItemProps> = ({
  item,
  isCallTable,
  isActiveStatus,
  isActivePopup,
  setIsActiveStatus,
  setIsActivePopup,
  styleSizeCell
}) => {
  return (
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
            <div
              className="flex flex-col py-2  w-[90%] gap-2"
              onMouseLeave={() => setIsActiveStatus(0)}
            >
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
  );
};

export default ListTablesItem;
