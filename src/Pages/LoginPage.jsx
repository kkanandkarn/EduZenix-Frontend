import React, { useEffect, useState } from "react";

const LoginPage = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeChange = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="min-h-screen dark:text-white text-blue-900 bg-white dark:bg-primary flex flex-col items-center justify-center">
      <p className="mb-4">Theme: {theme}</p>
      <button
        type="button"
        className="border border-blue-400 px-4 py-2 rounded-lg"
        onClick={handleThemeChange}
      >
        Change theme
      </button>
    </div>
  );
};

export default LoginPage;
