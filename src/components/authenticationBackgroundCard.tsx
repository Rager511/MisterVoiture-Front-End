import React, { ReactNode } from 'react';

const AuthenticationBackgroundCard: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="bg-sign-in">
            {children}
        </div>
    );
};

export default AuthenticationBackgroundCard