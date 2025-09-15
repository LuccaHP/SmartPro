import React from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop: React.FC = () => {
    const { pathname, search, hash } = useLocation();

    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, [pathname, search, hash]);

    return null;
};


