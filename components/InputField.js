// Labelled text/email input with inline error message.
export default function InputField({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  autoComplete,
  labelRight,
  className = "",
  inputMode,
}) {
  const errorId = `${id}-error`;
  return (
    <div className={className}>
      <div className="flex items-center justify-between gap-2">
        <label htmlFor={id} className="text-sm font-medium text-navy">
          {label}
        </label>
        {labelRight}
      </div>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`mt-1.5 w-full rounded-lg border bg-light-grey px-3.5 py-2.5 text-sm text-navy transition-colors placeholder:text-navy/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
          error ? "border-primary" : "border-navy/15"
        }`}
      />
      {error ? (
        <p id={errorId} className="mt-1.5 text-xs text-primary">
          {error}
        </p>
      ) : null}
    </div>
  );
}
