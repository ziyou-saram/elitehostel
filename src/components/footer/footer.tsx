export default function Footer() {
    return (
        <section className="w-full grid gap-6 lg:gap-8">
            <div className="flex flex-col justify-between md:items-end md:flex-row gap-6 lg:gap-8">
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
                    Elite.
                </h1>
                <small className="text-sm text-muted-foreground">2025. Все права защищены</small>
            </div>
        </section>
    );
}