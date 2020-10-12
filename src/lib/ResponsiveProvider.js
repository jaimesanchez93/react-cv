import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { breakpoints } from '../components/Theme';

const ResponsiveContext = createContext(null);

const ResponsiveProvider = ({ children }) => {
   const hasWindow = typeof window !== 'undefined';

   function getWindowDimensions() {
      const width = hasWindow ? window.innerWidth : null;
      const height = hasWindow ? window.innerHeight : null;
      return {
         width,
         height
      };
   }

   const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

   useEffect(() => {
      const handleResize = () => {
         setWindowDimensions(getWindowDimensions());
      };

      window.addEventListener('resize', handleResize, false);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);


   return (
      <ResponsiveContext.Provider
         value={{
            responsive: !!(windowDimensions.width && windowDimensions.width <= breakpoints.md)
         }}
      >
         {children}
      </ResponsiveContext.Provider>
   );
};

const useResponsive = () => {
   return useContext(ResponsiveContext);
};

ResponsiveProvider.propTypes = {
   children: PropTypes.any
};

export { ResponsiveProvider, useResponsive };
