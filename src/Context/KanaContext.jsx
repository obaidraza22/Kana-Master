import { createContext, useState } from "react";

export const KanaContext = createContext();

export function KanaProvider({ children }) {
  const [selectedKana, setSelectedKana] = useState(null);

  return (
    <KanaContext.Provider value={{ selectedKana, setSelectedKana }}>
      {children}
    </KanaContext.Provider>
  );
}
