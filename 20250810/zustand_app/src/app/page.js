'use client';

import useCounterStore from '../../store/counterStore';

export default function Home() {
  const { count, increase, decrease, reset } = useCounterStore();

  return (
    <main style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{count}</h1>
      <button onClick={increase}>+ 1</button>
      <button onClick={decrease}>- 1</button>
      <button onClick={reset}>Reset</button>
    </main>
  );
}
