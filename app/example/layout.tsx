export default function ExampleLayout({children}: {children: React.ReactNode}) {
    return (
        <section>
            Example Header
            {children}
            Example Footer
        </section>
    );
}