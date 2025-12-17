export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
            <div>My app</div>
            {children}
            <div>2025 @ My app</div>
        </section>
    );
}