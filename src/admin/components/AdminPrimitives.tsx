import { AnimatePresence, motion } from 'motion/react';

export function Panel({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={`rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5 shadow-[0_20px_40px_rgba(0,0,0,0.18)] ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="mb-2 text-[11px] uppercase tracking-[0.3em] text-[#C6A66B]">{eyebrow}</p>
        <h1 className="font-['Playfair_Display'] text-3xl text-[#F7F1E8] sm:text-4xl">{title}</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-[#D9CFBF]/70">{description}</p>
      </div>
      {action}
    </div>
  );
}

export function StatCard({
  label,
  value,
  delta,
  hint,
}: {
  label: string;
  value: string;
  delta: string;
  hint?: string;
}) {
  return (
    <Panel>
      <p className="text-sm text-[#D9CFBF]/60">{label}</p>
      <div className="mt-4 flex items-end justify-between gap-3">
        <div className="text-3xl font-semibold text-[#F7F1E8]">{value}</div>
        <span className="rounded-full bg-[#C6A66B]/10 px-3 py-1 text-xs font-medium text-[#C6A66B]">{delta}</span>
      </div>
      {hint ? <p className="mt-4 text-sm text-[#D9CFBF]/55">{hint}</p> : null}
    </Panel>
  );
}

export function Badge({
  children,
  tone = 'default',
}: {
  children: React.ReactNode;
  tone?: 'default' | 'gold' | 'green' | 'red' | 'blue';
}) {
  const tones = {
    default: 'bg-white/8 text-[#D9CFBF]',
    gold: 'bg-[#C6A66B]/15 text-[#E4C58E]',
    green: 'bg-[#184d37]/45 text-[#9be8c6]',
    red: 'bg-[#5a1b16]/50 text-[#f0b8ae]',
    blue: 'bg-[#142b46]/55 text-[#a6d4ff]',
  } as const;

  return <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${tones[tone]}`}>{children}</span>;
}

export function Modal({
  open,
  title,
  description,
  children,
  onClose,
}: {
  open: boolean;
  title: string;
  description?: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#05070B]/70 p-4 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 18, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="max-h-[90vh] w-full max-w-5xl overflow-auto rounded-[30px] border border-white/10 bg-[#11151d] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6">
              <h2 className="font-['Playfair_Display'] text-3xl text-[#F7F1E8]">{title}</h2>
              {description ? <p className="mt-2 text-sm text-[#D9CFBF]/65">{description}</p> : null}
            </div>
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.24em] text-[#D9CFBF]/55">{label}</span>
      {children}
    </label>
  );
}

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-[#F7F1E8] outline-none transition focus:border-[#C6A66B]/50 ${props.className ?? ''}`}
    />
  );
}

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`min-h-[120px] w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-[#F7F1E8] outline-none transition focus:border-[#C6A66B]/50 ${props.className ?? ''}`}
    />
  );
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={`w-full rounded-2xl border border-white/10 bg-[#11151d] px-4 py-3 text-sm text-[#F7F1E8] outline-none transition focus:border-[#C6A66B]/50 ${props.className ?? ''}`}
    />
  );
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' | 'danger' }) {
  const variants = {
    primary: 'bg-[#C6A66B] text-[#171419] hover:brightness-105',
    ghost: 'border border-white/10 bg-white/[0.03] text-[#F7F1E8] hover:border-[#C6A66B]/40 hover:text-[#C6A66B]',
    danger: 'border border-[#9f2d20]/40 bg-[#9f2d20]/10 text-[#f0b8ae] hover:bg-[#9f2d20]/20',
  } as const;

  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium transition ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
