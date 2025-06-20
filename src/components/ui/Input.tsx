import { InputHTMLAttributes, ReactNode, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      icon,
      iconPosition = "left",
      fullWidth = false,
      className = "",
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    const baseInputClasses =
      "block px-3 py-2 bg-white border rounded-lg text-sm placeholder-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed";

    const errorClasses = error
      ? "border-error focus:ring-error focus:border-error"
      : "border-gray-300 hover:border-gray-400";

    const iconClasses = icon
      ? iconPosition === "left"
        ? "pl-10"
        : "pr-10"
      : "";

    const widthClass = fullWidth ? "w-full" : "";

    const inputClasses = `${baseInputClasses} ${errorClasses} ${iconClasses} ${widthClass} ${className}`;

    return (
      <div className={fullWidth ? "w-full" : ""}>
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
          </label>
        )}

        <div className="relative">
          {icon && (
            <div
              className={`absolute inset-y-0 ${
                iconPosition === "left" ? "left-0 pl-3" : "right-0 pr-3"
              } flex items-center pointer-events-none text-gray-400`}
            >
              {icon}
            </div>
          )}

          <input ref={ref} id={inputId} className={inputClasses} {...props} />
        </div>

        {error && (
          <div className="mt-1 flex items-center text-sm text-error">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {error}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
