import { useDispatch, useSelector } from 'react-redux';
import { initializeTables } from './tablesSlice';
import { useEffect, useState } from 'react';
import ListTables from '../../../components/Tables/ListTables';


const Tables: React.FC = () => {
  const [isCallTable, setIsCallTable] = useState<number>(1);
  const data = new Date().toLocaleDateString('en-US', {
    month: '2-digit',
    year: 'numeric',
    day: '2-digit',
  });

  const dispatch = useDispatch();
  const { tables } = useSelector((state) => state.tables);

  useEffect(() => {
    dispatch(initializeTables(3));
  }, []);

  return (
    <div className="relative w-full">
      <div className="flex items-center justify-between ml-[86px] mt-[48px] mr-[48px]">
        <h1 className="text-[52px] font-semibold  text-[#15C5CE]">Tables</h1>
        <span className=" font-medium">Data: {data}</span>
      </div>
        <ListTables tables={tables} isCallTable={isCallTable} />
    </div>
  );
};

export default Tables;
