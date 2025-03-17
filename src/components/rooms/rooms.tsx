import Image from "next/image";

const rooms = [
    {
        image: "/family.png",
        title: "2 семейных номера",
        description: "для пар и семей с детьми"
    },
    {
        image: "/women.png",
        title: "3 женских номера",
        description: "уединённая и спокойная атмосфера"
    },
    {
        image: "/men.png",
        title: "7 мужских номеров",
        description: "удобное пространство для проживания"
    },
    {
        image: "/bath.png",
        title: "Раздельные душевые и санузлы",
        description: "для женщин и мужчин"
    },
]

export default function Rooms() {
    return (
        <section className="w-full grid gap-6 lg:gap-8 scroll-mt-16" id="rooms">
            <div className="max-w-xl grid gap-4">
                <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
                    Наши номера – комфорт для каждого гостя
                </h2>
                <p className="text-base">
                    Мы предлагаем удобные номера для разных типов гостей. В нашем хостеле есть отдельные мужские, женские и семейные комнаты. У нас чисто, уютно и безопасно – раздельные санузлы и душевые обеспечивают комфортное пребывание.
                </p>
            </div>
            <div className="grid gap-6 lg:gap-8 lg:grid-cols-2">
                {rooms.map((room, index) => (
                    <RoomCard key={index} {...room} />
                ))}
            </div>
        </section>
    );
}

function RoomCard({ image, title, description }: { image: string, title: string, description: string }) {
    return (
        <div className="grid gap-4">
            <Image src={image} alt={title} width={1920} height={1080} className="object-cover aspect-video" />
            <div className="grid gap-1">
                <h4 className="font-medium text-lg md:text-xl lg:text-2xl">
                    {title}
                </h4>
                <p className="text-base">
                    {description}
                </p>
            </div>
        </div>
    )
}