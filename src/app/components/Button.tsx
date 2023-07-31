import clsx from 'clsx'

export function Button({ className, ...props }: any) {
  return (
    <button
      className={clsx(
        'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
        'bg-green-600 font-semibold text-zinc-100 hover:bg-green-400 active:bg-green-800 active:text-zinc-100/70',
        className
      )}
      {...props}
    />
  )
}