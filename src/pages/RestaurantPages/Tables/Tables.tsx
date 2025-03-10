import { useDispatch, useSelector } from 'react-redux';
import { initializeTables } from './tablesSlice';
import { useEffect, useState } from 'react';
import Popup from '@/components/UI/Popup';
import TablesPopup from '@/components/Tables/TablesPopup';
import ListTables from './ListTables';

const Tables: React.FC = () => {
  const [isCallTable, setIsCallTable] = useState<number>(1);
  const [isActivePopup, setIsActivePopup] = useState<boolean>(false);
  const [isActiveStatus, setIsActiveStatus] = useState<number>(0);

  const dispatch = useDispatch();
  const { tables } = useSelector((state) => state.tables);

  useEffect(() => {
    dispatch(initializeTables(3));
  }, []);

  return (
    <div className="relative">
      <h1 className="text-[52px] font-semibold ml-[86px] mt-[48px] text-[#15C5CE]">
        Tables
      </h1>
      <ListTables
        tables={tables}
        isCallTable={isCallTable}
        isActivePopup={isActivePopup}
        setIsActivePopup={setIsActivePopup}
        isActiveStatus={isActiveStatus}
        setIsActiveStatus={setIsActiveStatus}
      />
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
