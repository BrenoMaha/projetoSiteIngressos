import { createContext, useState } from "react";

export const TemaContex = createContext();
export function TemaProvider({children}) {
  const [tema, setTema] = useState("white");

  function mudarTema() {
    if (tema === "white") {
      setTema("dark");
    }
    if (tema === "dark") {
      setTema("white");
    }
  }
  return (
    <TemaContex.Provider value={{ tema, mudarTema }}>
      {children}
    </TemaContex.Provider>
  );
}
