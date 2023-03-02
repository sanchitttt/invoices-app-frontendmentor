import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ThemeContext from "./global/contexts/ThemeContext";
import InvoicesPage from "./pages/invoices";
import ViewInvoicePage from './pages/view_invoices'

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    let bodyEle = document.getElementById('body');
    bodyEle.style.background = theme === 'dark' ? "#141625" : "#F8F8FB"
  }, [theme]);
  
  
  return (
    <div className={`App`}>
      <ThemeContext.Provider value={{ themeValue: theme, changeTheme: setTheme }}>
        <Routes>
          <Route path='/' element={<InvoicesPage />} />
          <Route path='/view/:id' element={<ViewInvoicePage />} /> 
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
