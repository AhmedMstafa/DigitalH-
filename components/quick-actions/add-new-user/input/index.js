export default function Input({ title, name }) {
  return (
    <div className="flex my-5">
      <label>{title}</label>
      <input
        required
        type="text"
        name={name}
        className="bg-white ms-auto text-black outline-1 border border-black"
      />
    </div>
  );
}
