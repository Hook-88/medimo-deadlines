export default function MainContent({children}) {
    
    return (
        <main className="mx-auto w-full max-w-screen-xl grow gap-2 pt-6 flex justify-between items-start flex-wrap">
            {children}
        </main>
    )
}