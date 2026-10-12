function Students() {
  const students = [
    { id: 1, name: "Riya", course: "B.Tech" },
    { id: 2, name: "Amit", course: "BCA" },
    { id: 3, name: "Neha", course: "B.Tech" }
  ];
  return (
    <div>
      <h1>Student List</h1>
      {students.map(student => (
        <p key={student.id}>
          {student.name} - {student.course}
        </p>
      ))}
    </div>
  );
}
export default Students;
