import { EnvData } from '@/configs/config';
import { getEnv } from '@/configs/env-config';
import { useEffect, useState } from 'react'

export const useEnv = () => {
  const [env, setEnv] = useState<EnvData>();
  useEffect(() => {
    getEnv().then(data => {
      setEnv(data);
    });
  }, [])

  return env;
}
