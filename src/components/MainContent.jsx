export default function MainContent({children}) {
    
    return (
        <main className="mx-auto w-full max-w-screen-xl grow pt-6 flex gap-4">
            {children}
        </main>
    )
}