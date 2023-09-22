import { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [sidebarContent, setSidebarContent] = useState({
    title: '',
    subtitle: '',
    description: '',
  });

  return (
    <SidebarContext.Provider value={{ sidebarContent, setSidebarContent }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  return useContext(SidebarContext);
};
