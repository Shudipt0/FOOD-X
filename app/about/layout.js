
import React from 'react';

export const metadata = {
   title: "About",
   description: "This is a about page",
 };

 
 function AboutLayout({children}) {
   return (
     <div>
       {children}
     </div>
   )
 }
 
 export default AboutLayout
 
 