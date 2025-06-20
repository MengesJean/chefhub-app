import { ReactNode, useState } from "react";

interface Step {
  id: string;
  title: string;
  description?: string;
  icon?: ReactNode;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function Stepper({
  steps,
  currentStep,
  orientation = "horizontal",
  className = "",
}: StepperProps) {
  const isHorizontal = orientation === "horizontal";

  return (
    <div className={`${isHorizontal ? "w-full" : "h-full"} ${className}`}>
      {/* Progress Bar (only for horizontal) */}
      {isHorizontal && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">
              Étape {currentStep + 1} sur {steps.length}
            </span>
            <span className="text-sm text-gray-500">
              {Math.round(((currentStep + 1) / steps.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-primary h-2 rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${((currentStep + 1) / steps.length) * 100}%`,
              }}
            />
          </div>
        </div>
      )}

      {/* Steps */}
      <div
        className={`flex ${
          isHorizontal
            ? "flex-row items-center justify-between"
            : "flex-col space-y-4"
        }`}
      >
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;

          return (
            <div
              key={step.id}
              className={`flex ${
                isHorizontal ? "flex-col items-center" : "flex-row items-start"
              } relative`}
            >
              {/* Step Circle */}
              <div
                className={`
                  flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300
                  ${
                    isCompleted
                      ? "bg-primary-600 border-primary-600 text-white"
                      : isActive
                      ? "bg-primary-100 border-primary-600 text-primary-600 ring-4 ring-primary-100"
                      : "bg-gray-100 border-gray-300 text-gray-400"
                  }
                `}
              >
                {isCompleted ? (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : step.icon ? (
                  step.icon
                ) : (
                  <span className="text-sm font-medium">{index + 1}</span>
                )}
              </div>

              {/* Step Content */}
              <div
                className={`${
                  isHorizontal
                    ? "mt-3 text-center max-w-[120px]"
                    : "ml-4 flex-1"
                }`}
              >
                <h3
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-primary-600"
                      : isCompleted
                      ? "text-gray-900"
                      : "text-gray-400"
                  }`}
                >
                  {step.title}
                </h3>
                {step.description && (
                  <p
                    className={`text-xs mt-1 transition-colors duration-200 ${
                      isActive
                        ? "text-primary-500"
                        : isCompleted
                        ? "text-gray-600"
                        : "text-gray-400"
                    }`}
                  >
                    {step.description}
                  </p>
                )}
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div
                  className={`
                    ${
                      isHorizontal
                        ? "absolute top-5 left-full w-full h-0.5 -translate-y-0.5"
                        : "absolute top-12 left-5 w-0.5 h-6 -translate-x-0.5"
                    }
                    transition-colors duration-300
                    ${index < currentStep ? "bg-primary-600" : "bg-gray-300"}
                  `}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Hook helper pour gérer le stepper
export function useStepper(totalSteps: number) {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (step: number) => {
    if (step >= 0 && step < totalSteps) {
      setCurrentStep(step);
    }
  };

  return {
    currentStep,
    nextStep,
    prevStep,
    goToStep,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === totalSteps - 1,
    progress: ((currentStep + 1) / totalSteps) * 100,
  };
}

// Il faut importer useState
