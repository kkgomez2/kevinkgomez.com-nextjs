export default function Credits({ resume }) {
  return (
    <div className="pb-8">
      <div className="font-bold lowercase text-crimson-c myriad-pro-bold text-lg pb-4">
        {resume.name}
      </div>
      <table className="table-fixed">
        <thead className="font-bold lowercase text-crimson-c myriad-pro-bold text-left">
          <tr>
            <th className="w-1/3">Title</th>
            <th className="w-1/3">Role</th>
            <th className="w-1/3">Production</th>
          </tr>
        </thead>
        <tbody>
          {resume.credits.map((credit, i) => {
            if (credit.display !== false) {
              return (
                <tr key={i} className="uppercase text-sm">
                  <td>{credit.title}</td>
                  <td>{credit.role}</td>
                  <td>{credit.production}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}
