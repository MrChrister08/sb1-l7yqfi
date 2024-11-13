import { useEffect, useRef, useState } from 'react';
import { CodeBlock } from '../components/CodeBlock';
import { ThemeCustomizer } from '../components/ThemeCustomizer';
import { useThemeCustomization } from '../hooks/useThemeCustomization';

type Command = {
  name: string;
  description: string;
  action: () => void;
};

export function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [matrixActive, setMatrixActive] = useState(false);
  const [partyActive, setPartyActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const { state: customization, dispatch } = useThemeCustomization();

  const commands: Command[] = [
    {
      name: 'help',
      description: 'List all available commands',
      action: () => {
        setHistory(prev => [...prev, 
          'Available commands:',
          'help    - Show this help message',
          'clear   - Clear the terminal',
          'matrix  - Enter the Matrix',
          'party   - Start the party! 🎉',
          'about   - Display information about this terminal',
          'echo    - Repeat your message',
          'date    - Show current date and time',
        ]);
      }
    },
    {
      name: 'clear',
      description: 'Clear the terminal',
      action: () => setHistory([])
    },
    {
      name: 'matrix',
      description: 'Enter the Matrix',
      action: () => {
        setMatrixActive(true);
        setTimeout(() => setMatrixActive(false), 5000);
      }
    },
    {
      name: 'party',
      description: 'Start the party',
      action: () => {
        setPartyActive(true);
        setTimeout(() => setPartyActive(false), 3000);
      }
    },
    {
      name: 'about',
      description: 'About this terminal',
      action: () => {
        setHistory(prev => [...prev, 
          'Interactive Terminal v1.0.0',
          'Created with ❤️ using React and TypeScript',
          'Try running some commands to see what happens!'
        ]);
      }
    },
    {
      name: 'date',
      description: 'Show current date and time',
      action: () => {
        setHistory(prev => [...prev, new Date().toLocaleString()]);
      }
    }
  ];

  const handleCommand = (cmd: string) => {
    const [command, ...args] = cmd.trim().toLowerCase().split(' ');
    
    if (command === 'echo') {
      setHistory(prev => [...prev, args.join(' ')]);
      return;
    }

    const foundCommand = commands.find(c => c.name === command);
    if (foundCommand) {
      foundCommand.action();
    } else if (command) {
      setHistory(prev => [...prev, `Command not found: ${command}`]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setHistory(prev => [...prev, `$ ${input}`]);
    handleCommand(input);
    setInput('');
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    const handleClick = () => inputRef.current?.focus();
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const terminalStyle = {
    '--primary-color': customization.primaryColor,
    fontSize: `${customization.fontSize}px`,
    padding: `${customization.spacing}px`,
    opacity: customization.terminalOpacity,
    fontFamily: customization.fontFamily === 'mono' 
      ? 'JetBrains Mono, monospace'
      : customization.fontFamily === 'sans'
      ? 'system-ui, sans-serif'
      : 'Georgia, serif',
    boxShadow: customization.customGlow 
      ? `0 0 20px ${customization.primaryColor}`
      : 'none',
  } as React.CSSProperties;

  return (
    <div className="max-w-4xl mx-auto">
      <CodeBlock>
        {`const terminal = {
  version: "1.0.0",
  type: "easter-egg",
  commands: ["help", "matrix", "party", ...]
}`}
      </CodeBlock>

      <div className="mt-8 relative">
        {matrixActive && <MatrixEffect />}
        {partyActive && <PartyEffect />}
        
        <div 
          ref={terminalRef}
          className="bg-black rounded-lg h-[60vh] overflow-y-auto text-sm transition-all duration-200"
          style={terminalStyle}
        >
          <div className="mb-4" style={{ color: customization.primaryColor }}>
            Welcome to the Interactive Terminal! Type 'help' to see available commands.
          </div>
          
          {history.map((line, i) => (
            <div 
              key={i} 
              className="mb-1"
              style={{ color: customization.primaryColor }}
            >
              {line}
            </div>
          ))}
          
          <form onSubmit={handleSubmit} className="flex items-center">
            <span 
              className="mr-2"
              style={{ color: customization.primaryColor }}
            >
              $
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none"
              style={{ color: customization.primaryColor }}
              autoFocus
            />
          </form>
        </div>
      </div>

      <ThemeCustomizer 
        customization={customization}
        dispatch={dispatch}
      />
    </div>
  );
}

function MatrixEffect() {
  return (
    <div className="absolute inset-0 bg-black overflow-hidden">
      <div className="matrix-rain">
        {Array.from({ length: 50 }).map((_, i) => (
          <div 
            key={i} 
            className="matrix-column"
            style={{ 
              animationDelay: `${Math.random() * 2}s`,
              left: `${i * 2}%`
            }}
          >
            {Array.from({ length: 30 }).map((_, j) => (
              <span 
                key={j}
                className="matrix-character"
                style={{ 
                  animationDelay: `${Math.random() * 5}s`
                }}
              >
                {String.fromCharCode(0x30A0 + Math.random() * 96)}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function PartyEffect() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="confetti"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`
          }}
        />
      ))}
    </div>
  );
}