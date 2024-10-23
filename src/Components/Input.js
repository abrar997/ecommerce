export default function Input({
  label,
  type,
  placeholder,
  to,
  value,
  setValue,
}) {
  return (
    <div className="grid w-full gap-2">
      <label className="text-gray-500 text-sm" htmlFor={to}>
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
        className="border px-2 w-full rounded bg-slate-50 py-2 text-sm"
        placeholder={placeholder}
        id={to}
      />
    </div>
  );
}
