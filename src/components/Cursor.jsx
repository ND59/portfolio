import { useCursor } from '../hooks/useCursor';

export default function Cursor() {
  const { x, y } = useCursor();

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          transform: `translate(${x - 4}px, ${y - 4}px)`,
        }}
      />
      <div
        className="cursor-outline"
        style={{
          transform: `translate(${x - 20}px, ${y - 20}px)`,
        }}
      />
    </>
  );
}