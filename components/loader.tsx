import Image from "next/image"

export const Loader = () => {

    return (
        <div className="h-full flex flex-col gap-y-4 items-center justify-center">
            <div className="w-10 h-10 relative animate-spin">
            <Image
                    alt="Logo"
                    fill
                    src="/logo.png"
                    sizes="200px"
                    placeholder="blur"
                    blurDataURL={'/logo.png'}
                />
            </div>
            <p className="text-sm muted text-foreground">
                Genius is thinking...
            </p>
        </div>
    )
}