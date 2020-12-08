export default function Credits({ resume }) {
  return (
    <div className="pb-6">
      <div className="font-bold lowercase text-crimson-c myriad-pro-bold text-lg pb-2">
        {resume.name}
      </div>
      <table className="table-fixed">
        <thead className="font-bold lowercase text-crimson-c myriad-pro-bold text-left">
          <th className="w-1/3">Title</th>
          <th className="w-1/3">Role</th>
          <th className="w-1/3">Production</th>
        </thead>
        <tbody>
          {resume.credits.map(credit => {
          return (<tr className="uppercase text-sm">
            <td>{credit.title}</td>
            <td>{credit.role}</td>
            <td>{credit.production}</td>
          </tr>)
        })}
        </tbody>
      </table>
    </div>
  )
}