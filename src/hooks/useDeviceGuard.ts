import { useState, useEffect, useCallback } from "react";

// Below this, block regardless of device — sits under real small-laptop
// widths: MacBook Air 13" reports 1280px, HP EliteBook 1366px+
const MIN_WIDTH = 1024;

export type BlockReason =
  | "mobile-os"
  | "touch-input"
  | "narrow-viewport"
  | null;

export interface DeviceGuardState {
  blocked: boolean;
  width: number;
  reason: BlockReason;
}

function detectDevice(): DeviceGuardState {
  const ua: string = navigator.userAgent || navigator.vendor || "";
  const platform: string = navigator.platform || "";
  const maxTouchPoints: number = navigator.maxTouchPoints || 0;

  // 1. Classic phone UA signatures
  const isPhoneUA =
    /Android.*Mobile|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|webOS/i.test(
      ua,
    );

  // 2. iPadOS reports as "MacIntel" but exposes multiple touch points —
  //    a real MacBook trackpad does not
  const isIPad =
    /iPad/i.test(ua) || (platform === "MacIntel" && maxTouchPoints > 1);

  // 3. Android tablets drop "Mobile" from the UA string
  const isAndroidTablet = /Android/i.test(ua) && !/Mobile/i.test(ua);

  const isTabletUA = /Tablet|PlayBook|Silk/i.test(ua);

  const isTouchOS = isPhoneUA || isIPad || isAndroidTablet || isTabletUA;

  // 4. Input signal: touch-primary devices have no fine pointer and no hover.
  //    A laptop with a touchscreen still has a trackpad, so this stays false.
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const noHover = window.matchMedia("(hover: none)").matches;
  const isTouchPrimary = coarsePointer && noHover;

  // 5. Width fallback — catches anything the above misses
  const width = window.innerWidth;
  const isTooNarrow = width < MIN_WIDTH;

  const blocked = isTouchOS || isTouchPrimary || isTooNarrow;

  const reason: BlockReason = isTouchOS
    ? "mobile-os"
    : isTouchPrimary
      ? "touch-input"
      : isTooNarrow
        ? "narrow-viewport"
        : null;

  return { blocked, width, reason };
}

export function useDeviceGuard(): DeviceGuardState {
  const [state, setState] = useState<DeviceGuardState>(detectDevice);

  const recheck = useCallback(() => setState(detectDevice()), []);

  useEffect(() => {
    window.addEventListener("resize", recheck);
    window.addEventListener("orientationchange", recheck);
    return () => {
      window.removeEventListener("resize", recheck);
      window.removeEventListener("orientationchange", recheck);
    };
  }, [recheck]);

  return state;
}
