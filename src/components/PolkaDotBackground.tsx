export function PolkaDotBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30">
      {/* Create an offset grid of dots - brick pattern */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            radial-gradient(circle, #000 1px, transparent 1px),
            radial-gradient(circle, #000 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px, 60px 60px',
          backgroundPosition: '0 0, 30px 30px'
        }} 
      />
    </div>
  );
}