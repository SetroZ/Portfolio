

const CustomButton = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className='button w-40 p-2 rounded-md text-xl bg-purple-500 cursor-pointer select-none
          active:translate-y-2 active:[box-shadow:0_0px_0_0_#9333ea,0_0px_0_0_#9333ea]
          active:border-b-[0px]
          transition-all duration-150 [box-shadow:0_8px_0_0_#9333ea,0_13px_0_0_#9333ea]
          border-[1px] border-purple-500 font-bold'
    >
      {children}
    </button>
  )
}

export default CustomButton
