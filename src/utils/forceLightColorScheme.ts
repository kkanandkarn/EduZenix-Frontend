// Toolpad's AppProvider persists the chosen palette mode in localStorage and
// replays it (via InitColorSchemeScript) before React hydrates. Sessions that
// were switched to dark before the app became light-only would otherwise keep
// stamping `data-toolpad-color-scheme="dark"` on <html>. Clearing the keys and
// pinning the mode makes every visit start light.
const MODE_STORAGE_KEY = "toolpad-mode";
const COLOR_SCHEME_STORAGE_KEY = "toolpad-color-scheme";

export const forceLightColorScheme = (): void => {
  try {
    localStorage.setItem(MODE_STORAGE_KEY, "light");
    localStorage.removeItem(`${COLOR_SCHEME_STORAGE_KEY}-light`);
    localStorage.removeItem(`${COLOR_SCHEME_STORAGE_KEY}-dark`);
  } catch {
    // Private browsing / disabled storage: the theme already defaults to light.
  }

  document.documentElement.setAttribute(
    "data-toolpad-color-scheme",
    "light",
  );
};
