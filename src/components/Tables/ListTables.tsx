import React from 'react';
import { Table } from '../../pages/RestaurantPages/Tables/tablesSlice';
import ListTablesItem from './ListTablesItem';

interface ListTablesProps {
  tables: Table[];
  isCallTable: number;
}

const ListTables: React.FC<ListTablesProps> = ({
  tables,
  isCallTable,
}) => {
  const styleSizeCell = 'w-[170px] text-center font-medium';
  return (
    <div className="flex items-center justify-center mt-[96px]">
      {/* Start tables */}
      <ul >
        <li className="flex justify-between items-center bg-[#FAFAFA]  border-b-[1px] border-b-[#EEEEEE] h-[48px]">
          <span className="w-[120px] text-center font-medium">Table №</span>
          <span className={`${styleSizeCell} font-medium `}>Order</span>
          <span className={`${styleSizeCell} font-medium `}>Table Status</span>
          <span className={`${styleSizeCell} font-medium `}>Call</span>
        </li>
        {tables.map((item) => (
          <ListTablesItem
            key={item.id}
            item={item}
            isCallTable={isCallTable}
            styleSizeCell={styleSizeCell}
          />
        ))}
      </ul>
      {/* END Tables */}
    </div>
  );
};

export default ListTables;
