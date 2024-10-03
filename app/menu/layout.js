
 import React from 'react';

 export const metadata = {
    title: "Menu",
    description: "This is a food menu page",
  };

  
  function MenuLayout({children}) {
    return (
      <div>
        {children}
      </div>
    )
  }
  
  export default MenuLayout
  
  