import { useState, useEffect } from 'react';
import { roles } from '../constants';

interface SessionData {
  accessToken: string | null;
  // userId: string;
  // username: string;
  // fullName: string;
  // email: string;
  role: string;
}

const useSession = () => {
  const [sessionData, setSessionData] = useState<SessionData>({
    accessToken: sessionStorage.getItem('token') || null,
    // userId: sessionStorage.getItem('userId') || 'Undefined',
    // username: sessionStorage.getItem('username') || 'Undefined',
    // fullName: sessionStorage.getItem('fullName') || 'Undefined',
    // email: sessionStorage.getItem('email') || 'Undefined',
    role: sessionStorage.getItem('role') || roles.ADMIN,
  });

  return sessionData;
};

export default useSession;
