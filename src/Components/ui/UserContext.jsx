import React, { createContext,useState } from 'react'

export const AuthorizedUserConstext = createContext()
export const userConstextProvider =({children})=> {
    const [authorizedUser, setAuthorizedUser] = useState(false)
    
  return (
    <AuthorizedUserConstext.Provider value={{authorizedUser,setAuthorizedUser}}>
      {children}
    </AuthorizedUserConstext.Provider>
  )
}


