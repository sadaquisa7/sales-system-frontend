"use client";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@contexts/auth/auth.context";
import { useToast } from "@contexts/toast/toast.context";
import { authService } from "@/services/auth/auth.service";
import { useIdleTimer } from "@hooks/useIdleTimer";
import IdleWarningModal from "./idleWarningModal.component";
import { ENV } from "@/config/env";

export default function IdleGuard({ children }: { children: React.ReactNode }) {
  const [showWarning, setShowWarning] = useState(false);
  const { logout } = useAuth();
  const { success } = useToast();
  const router = useRouter();

  const handleLogout = useCallback(async () => {
    setShowWarning(false);
    await authService.logout();
    logout();
    success("Sesión cerrada por inactividad");
    router.push("/login");
  }, [logout, success, router]);

  const { continueSession } = useIdleTimer({
    idleMinutes: ENV.IDLE_MINUTES,
    warningMinutes: ENV.IDLE_WARNING_MINUTES,
    onWarning: () => setShowWarning(true),
    onIdle: handleLogout,
    onActivity: () => {},
  });

  const handleContinue = () => {
    continueSession();
    setShowWarning(false);
  };

  return (
    <>
      {children}
      <IdleWarningModal
        visible={showWarning}
        countdownSeconds={ENV.IDLE_WARNING_MINUTES * 60}
        onContinue={handleContinue}
        onLogout={handleLogout}
      />
    </>
  );
}
