import Link from "next/link";
import { Button } from "../ui/button";

const beds = [
    {
        title: "Койко-место (верхнее) в мужском / женском номере",
        price: 3000
    },
    {
        title: "Койко-место (нижнее) в мужском / жеском номере",
        price: 3500
    },
    {
        title: "Койко-место в номере для мужчин и женщин.",
        price: 3000
    },
]

const rooms = [
    {
        title: "2-х местный номер",
        price: 10000
    },
]

const months = [
    {
        title: "Верхняя койко-место",
        price: 35000
    },
    {
        title: "Нижняя койко-место",
        price: 45000
    },
]

const tarifs = [
    {
        title: "На 24 часа",
        price: 4000
    },
]

export default function Price() {
    return (
        <section className="w-full grid gap-6 lg:gap-8 scroll-mt-16" id="price">
            <div className="max-w-xl grid gap-4">
                <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
                    Цены
                </h2>
            </div>
            <div className="grid gap-6 lg:gap-8">
                <h3 className="font-semibold text-xl md:text-2xl lg:text-3xl">
                    Койко-место
                </h3>
                <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {beds.map((bed, index) => (
                        <PriceCard key={index} {...bed} />
                    ))}
                </div>
                <h3 className="font-semibold text-xl md:text-2xl lg:text-3xl">
                    Номер
                </h3>
                <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {rooms.map((room, index) => (
                        <PriceCard key={index} {...room} />
                    ))}
                </div>
                <h3 className="font-semibold text-xl md:text-2xl lg:text-3xl">
                    На меясц
                </h3>
                <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {months.map((month, index) => (
                        <PriceCard key={index} {...month} />
                    ))}
                </div>
                <h3 className="font-semibold text-xl md:text-2xl lg:text-3xl">
                    Тарифы
                </h3>
                <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {tarifs.map((tarif, index) => (
                        <PriceCard key={index} {...tarif} />
                    ))}
                </div>
            </div>
            <Button className="w-full md:w-fit" asChild>
                <Link href={"https://otello.ru/hotel/70000001029480338?utm_campaign=book&utm_medium=referral&utm_source=link.2gis.kz&guest_groups=%5B%7B%22adults%22%3A2%7D%5D"}>
                    Забронировать
                </Link>
            </Button>
        </section>
    );
}

function PriceCard({ title, price }: { title: string, price: number }) {
    return (
        <div className="h-fit grid gap-4">
            <h4 className="font-medium text-lg md:text-xl lg:text-2xl">
                {price} ₸
            </h4>
            <p className="text-base">
                {title}
            </p>
        </div>
    );
}