import { createContext, useState } from "react";

export const LoginContext = createContext()

export const LoginProvider = ({children}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false) 

    return(
        <LoginContext.Provider value={{open, handleOpen,handleClose}}>
            {children}
        </LoginContext.Provider>
    )

}