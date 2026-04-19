function StudentRow({ student, updateScore }) {
  const status = student.score >= 40 ? "Pass" : "Fail";

  return (
    <tr>
      <td>{student.name}</td>

      <td>
        <input
          type="number"
          value={student.score}
          onChange={(e) =>
            updateScore(student.id, e.target.value)
          }
        />
      </td>

      <td style={{ color: student.score >= 40 ? "green" : "red" }}>
        {status}
      </td>
    </tr>
  );
}

export default StudentRow;