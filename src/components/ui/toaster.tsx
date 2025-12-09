import React, { useState, useEffect, useCallback } from "react";
import clsx from "clsx";
import { X, CheckCircle, AlertCircle, Info, Loader2 } from "lucide-react";

export type ToastType = "success" | "error" | "info" | "loading";

export interface Toast {
    id: string;
    message: string;
    type: ToastType;
    duration?: number;
}

// Simple event emitter for toasts
const toastEventManager = {
    listeners: [] as ((toast: Toast) => void)[],
    emit(toast: Toast) {
        this.listeners.forEach((listener) => listener(toast));
    },
    subscribe(listener: (toast: Toast) => void) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter((l) => l !== listener);
        };
    },
};

export const toast = {
    success: (message: string, duration = 3000) =>
        toastEventManager.emit({ id: Math.random().toString(36), message, type: "success", duration }),
    error: (message: string, duration = 4000) =>
        toastEventManager.emit({ id: Math.random().toString(36), message, type: "error", duration }),
    info: (message: string, duration = 3000) =>
        toastEventManager.emit({ id: Math.random().toString(36), message, type: "info", duration }),
    loading: (message: string, duration = 0) =>
        toastEventManager.emit({ id: Math.random().toString(36), message, type: "loading", duration }),
};

export default function Toaster() {
    const [toasts, setToasts] = useState<Toast[]>([]);

    useEffect(() => {
        return toastEventManager.subscribe((newToast) => {
            setToasts((prev) => [...prev, newToast]);
            if (newToast.duration && newToast.duration > 0) {
                setTimeout(() => {
                    removeToast(newToast.id);
                }, newToast.duration);
            }
        });
    }, []);

    const removeToast = useCallback((id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    if (toasts.length === 0) return null;

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
            {toasts.map((t) => (
                <div
                    key={t.id}
                    className={clsx(
                        "flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border transition-all animate-in slide-in-from-right-full",
                        {
                            "bg-green-50 border-green-200 text-green-800": t.type === "success",
                            "bg-red-50 border-red-200 text-red-800": t.type === "error",
                            "bg-blue-50 border-blue-200 text-blue-800": t.type === "info",
                            "bg-gray-50 border-gray-200 text-gray-800": t.type === "loading",
                        }
                    )}
                >
                    {t.type === "success" && <CheckCircle className="w-5 h-5 text-green-600" />}
                    {t.type === "error" && <AlertCircle className="w-5 h-5 text-red-600" />}
                    {t.type === "info" && <Info className="w-5 h-5 text-blue-600" />}
                    {t.type === "loading" && <Loader2 className="w-5 h-5 text-gray-600 animate-spin" />}

                    <span className="text-sm font-medium">{t.message}</span>

                    <button
                        onClick={() => removeToast(t.id)}
                        className="ml-auto hover:opacity-70"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            ))}
        </div>
    );
}
