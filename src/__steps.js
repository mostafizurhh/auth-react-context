/* 
---------------------------
Basic Context API Setup
---------------------------
1. Context API: Share auth state with other components (accross the application).
2. Crate and export an UserContext component and above it write >>
export const AuthContext = createContext();
3. In UserContext component pass {children} as prop and inside ContextProvider receive this prop >> 
<AuthContext.Provider value={authInfo}>
            {children}
</AuthContext.Provider> 
4. In index.js >> 
<React.StrictMode>
    <UserContext>
      <App />
    </UserContext>
</React.StrictMode>
5. now call/use useContext hook (to get the info in the context) from any other component.
*/

/* 
----------------------
Auth Integration
----------------------
1. create auth in UserContext component
2. set state for user
3.
*/