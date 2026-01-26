export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
            Layout Header
            {children}
            Layout Footer
        </section>
    );
}