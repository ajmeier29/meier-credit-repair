

type CheckProps =
    {
        color: string;
        hHeight: string;
        wWidth: string;
    }
export default function Check({ color, hHeight, wWidth }: CheckProps) {
    const height: string = `h-${hHeight}`
    const width: string = `w-${wWidth}`
    const textColor: string = `text-${color}`
    const style: string = `${height} ${width} ${textColor} text-primary-check`
    console.log(`style: ${style}`)
    return (
        <>
            <svg className={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
        </>
    )
}