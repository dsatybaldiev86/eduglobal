// Labelled select with inline error message. Pass <option>s as children.
export default function SelectField({
  id,
  label,
  value,
  onChange,
  error,
  children,
  className = "",
}) {
  const errorId = `${id}-error`;
  return (
    <div className={className}>
      <label htmlFor={id} className="text-sm font-medium text-navy">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`mt-1.5 w-full cursor-pointer rounded-lg border bg-light-grey px-3.5 py-2.5 text-sm text-navy transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
          error ? "border-primary" : "border-navy/15"
        }`}
      >
        {children}
      </select>
      {error ? (
        <p id={errorId} className="mt-1.5 text-xs text-primary">
          {error}
        </p>
      ) : null}
    </div>
  );
}
