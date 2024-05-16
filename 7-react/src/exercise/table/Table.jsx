export default function Table({ data, columns, rowKey }) {
  return (
    <table border={1}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.dataIndex}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((record) => (
          <tr
            key={typeof rowKey === "function" ? rowKey(record) : record[rowKey]}
          >
            {columns.map((column) => (
              <td key={column.dataIndex}>
                {column.render
                  ? column.render(record[column.dataIndex], record)
                  : record[column.dataIndex]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
