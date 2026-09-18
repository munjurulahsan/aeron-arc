"use client";

type Props = {
  open: boolean;
  onClose: () => void;
  count: number;
};

export function CartDrawer({ open, onClose, count }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[150] flex justify-end bg-black/70 backdrop-blur-sm transition-opacity">
      <div
        className="h-full w-full max-w-md bg-[#121212] p-8 text-[#F4F3EF] shadow-2xl flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center justify-between border-b border-line pb-6">
            <h3 className="font-mono text-sm tracking-widest uppercase">YOUR CART ({count})</h3>
            <button
              type="button"
              onClick={onClose}
              data-cursor="CLOSE"
              className="font-mono text-xs text-mute hover:text-white"
            >
              [CLOSE]
            </button>
          </div>

          <div className="mt-8 space-y-6">
            {count > 0 ? (
              <div className="flex items-center justify-between border-b border-line/40 pb-6">
                <div>
                  <h4 className="font-sans font-bold">AERON ARC</h4>
                  <p className="font-mono text-xs text-mute">Obsidian Black · Qty: {count}</p>
                </div>
                <span className="font-mono font-bold text-[#D8FF3E]">${249 * count}</span>
              </div>
            ) : (
              <p className="font-mono text-xs text-mute">Your cart is currently empty.</p>
            )}
          </div>
        </div>

        <div className="border-t border-line pt-6">
          <div className="flex justify-between font-mono text-sm mb-4">
            <span>TOTAL</span>
            <span className="font-bold text-[#D8FF3E]">${249 * count}</span>
          </div>
          <button
            type="button"
            disabled={count === 0}
            data-cursor="CHECKOUT"
            className="w-full rounded-full bg-[#D8FF3E] py-4 font-mono text-xs font-bold tracking-widest text-[#080808] disabled:opacity-40"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}
