import Link from "next/link";
import { Button } from "../ui/button";

const testimonials = [
    {
        name: "Мария",
        text: "Отличный хостел! Чисто, уютно, персонал дружелюбный. Понравилось, что есть отдельные женские номера и удобные зоны отдыха."
    },
    {
        name: "Александр",
        text: "Понравилось местоположение – близко к транспорту и центру города. Персонал отзывчивый, кровати удобные. Отличный вариант за свою цену!"
    },
    {
        name: "Динара",
        text: "Очень понравилось, что душевые раздельные и всегда чистые. Атмосфера домашняя, обязательно вернусь!"
    },

]

export default function Testimonials() {
    return (
        <section className="w-full grid gap-6 lg:gap-8">
            <div className="max-w-xl grid gap-4">
                <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
                    Что говорят наши гости?
                </h2>
                <p className="text-base">
                    Наши гости ценят комфорт, чистоту и дружелюбную атмосферу. Вот несколько отзывов от тех, кто уже останавливался у нас:
                </p>
            </div>
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} name={testimonial.name} text={testimonial.text} />
                ))}
            </div>
            <Button className="w-full md:w-fit" asChild>
                <Link href={"https://otello.ru/hotel/70000001029480338?utm_campaign=book&utm_medium=referral&utm_source=link.2gis.kz&guest_groups=%5B%7B%22adults%22%3A2%7D%5D"}>
                    Забронировать
                </Link>
            </Button>
        </section>
    );
}

function TestimonialCard({ name, text }: { name: string, text: string }) {
    return (
        <div className="h-fit grid gap-4">
            <h4 className="font-medium text-lg md:text-xl lg:text-2xl">
                {name}
            </h4>
            <p className="text-base">
                {text}
            </p>
        </div>
    )
}