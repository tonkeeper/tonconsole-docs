import { useEffect, useState } from 'react';

interface CodeLoaderProps {
  url: string;
}

export function CodeLoader({ url }: CodeLoaderProps) {
  const [code, setCode] = useState<string>('');

  useEffect(() => {
    fetch(url)
      .then((response) => response.text())
      .then((data) => setCode(data))
      .catch((error) => console.error('Error loading code:', error));
  }, [url]);

  return <pre>{code}</pre>;
}