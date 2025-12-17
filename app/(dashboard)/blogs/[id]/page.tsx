export default async function Page({
    params
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    return (
        <div>
            Blog Detail Page - {id}
        </div>
    );
}