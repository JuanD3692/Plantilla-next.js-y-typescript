import { FiCheck, FiX, FiAlertCircle, FiInfo } from "react-icons/fi";

interface SnackbarProps {
  open: boolean;
  message: string;
  type?: "success" | "error" | "warning" | "info";
  onClose: () => void;
}

const typeConfig = {
  success: {
    color: "#66cdaa",
    icon: FiCheck,
    title: "¡Éxito!",
  },
  error: {
    color: "#ff6b6b",
    icon: FiX,
    title: "¡Error!",
  },
  warning: {
    color: "#ffd93d",
    icon: FiAlertCircle,
    title: "¡Advertencia!",
  },
  info: {
    color: "#4dabf7",
    icon: FiInfo,
    title: "Información",
  },
};

export function Snackbar({
  open,
  message,
  type = "error",
  onClose,
}: SnackbarProps) {
  if (!open) return null;

  const config = typeConfig[type];

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-slide-in">
      <div className="flex w-[380px] h-24 bg-white rounded-xl overflow-hidden shadow-lg">
        <svg width="16" height="96" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 8 0 Q 4 4.8, 8 9.6 T 8 19.2 Q 4 24, 8 28.8 T 8 38.4 Q 4 43.2, 8 48 T 8 57.6 Q 4 62.4, 8 67.2 T 8 76.8 Q 4 81.6, 8 86.4 T 8 96 L 0 96 L 0 0 Z"
            fill={config.color}
            stroke={config.color}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        <div className="mx-2.5 overflow-hidden w-full">
          <p
            className="mt-1.5 text-xl font-bold leading-8 mr-3 overflow-hidden text-ellipsis whitespace-nowrap"
            style={{ color: config.color }}
          >
            {config.title}
          </p>
          <p className="overflow-hidden leading-5 break-all text-zinc-400 max-h-10">
            {message}
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-16 cursor-pointer focus:outline-none hover:opacity-80 transition-opacity"
        >
          <config.icon className="w-7 h-7" style={{ color: config.color }} />
        </button>
      </div>
    </div>
  );
}
