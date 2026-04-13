import React, { ReactNode } from "react";

interface GenericTableProps {
  data: Record<string, ReactNode>[];
}

export function TableComponent({ data }: GenericTableProps) {
  if (!data || data.length === 0) return null;

  const columns = Object.keys(data[0]).filter((col) =>
    data.some(
      (row) => row[col] !== undefined && row[col] !== "" && row[col] !== "-"
    )
  );

  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block overflow-x-auto mb-8 mt-10">
        <table className="w-full border border-custom-gray text-left text-black leading-[22px]">
          <thead className="bg-custom-gray">
            <tr>
              {columns.map((col) => (
                <th key={col} className="px-4 py-4 font-semibold text-gray-700">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx}>
                {columns.map((col) => (
                  <td key={col} className="px-4 py-2">
                    {row[col]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex flex-col gap-6 mb-8 mt-10">
        {data.map((row, idx) => (
          <div key={idx} className="border border-custom-gray p-4 rounded-md">
            {columns.map((col) => (
              <p key={col}>
                <span className="font-semibold">{col}:</span> {row[col]}
              </p>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
