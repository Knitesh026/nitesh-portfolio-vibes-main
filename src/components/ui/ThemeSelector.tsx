
import { useTheme, ColorTheme } from '@/contexts/ThemeContext';
import { Paintbrush } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const ThemeSelector = () => {
  const { currentTheme, setTheme } = useTheme();

  // Define available themes with their colors
  const themes: { name: ColorTheme; color: string }[] = [
    { name: 'purple', color: 'bg-purple-500' },
    { name: 'blue', color: 'bg-blue-500' },
    { name: 'green', color: 'bg-green-500' },
    { name: 'orange', color: 'bg-orange-500' },
    { name: 'pink', color: 'bg-pink-500' },
    { name: 'teal', color: 'bg-teal-500' },
    { name: 'red', color: 'bg-red-500' },
    { name: 'yellow', color: 'bg-yellow-500' },
    { name: 'offwhite', color: 'bg-neutral-100' },
    { name: 'slate', color: 'bg-slate-500' },
    { name: 'lavender', color: 'bg-violet-300' },
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button 
          className="flex items-center justify-center w-8 h-8 rounded-full glass-card shadow-md hover:shadow-lg transition-all"
          aria-label="Change color theme"
        >
          <Paintbrush size={16} className="text-primary" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-2 glass-card border-white/20" sideOffset={5}>
        <div className="space-y-1">
          <p className="text-xs text-center text-muted-foreground mb-1">Choose Theme</p>
          <div className="flex flex-wrap gap-1.5 justify-center">
            {themes.map((theme) => (
              <button
                key={theme.name}
                className={`w-6 h-6 rounded-full ${theme.color} ${
                  currentTheme === theme.name ? 'ring-2 ring-white ring-offset-1 ring-offset-background' : ''
                } transition-all hover:scale-110`}
                onClick={() => setTheme(theme.name)}
                aria-label={`Switch to ${theme.name} theme`}
              />
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ThemeSelector;
