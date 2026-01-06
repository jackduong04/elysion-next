import { ToggleItem } from './types';

type ToggleGroupProps = {
  items: ToggleItem[];
  activeId: string;
  onSelect: (id: string) => void;
  ariaLabel?: string;
};

export function ToggleGroup({
  items,
  activeId,
  onSelect,
  ariaLabel = 'Toggle options',
}: ToggleGroupProps) {
  return (
    <div
      className="flex flex-wrap gap-3"
      role="group"
      aria-label={ariaLabel}
    >
      {items.map((item) => {
        const isActive = item.id === activeId;
        const baseClasses =
          'rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-elysion-olive focus:ring-offset-2 focus:ring-offset-elysion-cream';
        const activeClasses =
          'border-elysion-forest bg-elysion-forest text-elysion-cream shadow-sm';
        const inactiveClasses =
          'border-elysion-forest text-elysion-forest hover:bg-elysion-forest/10';
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item.id)}
            aria-pressed={isActive}
            className={`${baseClasses} ${
              isActive ? activeClasses : inactiveClasses
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
