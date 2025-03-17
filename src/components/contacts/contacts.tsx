import Image from "next/image";
import Link from "next/link";

export default function Contacts() {
    return (
        <section className="w-full grid gap-6 lg:gap-8 scroll-mt-16" id="contacts">
            <div className="grid gap-6 lg:gap-8 lg:grid-cols-2">
                <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
                    Контакты
                </h2>
                <div className="grid gap-6 md:gap-8 lg:justify-end">
                    <div className="grid gap-1">
                        <p className="font-medium text-lg">
                            Адрес
                        </p>
                        <p className="text-base">
                            улица Уалиханова 9/2, город Астана
                        </p>
                    </div>
                    <div className="grid gap-1">
                        <p className="font-medium text-lg">
                            Телефон
                        </p>
                        <a href={"tel:+77750075777"}>
                            +7 775 007 57 77
                        </a>
                        <a href={"tel:+77711010916"}>
                            +7 771 101 09 16
                        </a>
                        <a href={"tel:+7(7172)336518"}>
                            +7 (7172) 33 65 18
                        </a>
                    </div>
                    <div className="grid gap-1">
                        <p className="font-medium text-lg">
                            WhatsApp
                        </p>
                        <Link href={"https://api.whatsapp.com/send/?phone=77711010916&text=Здравствуйте%21%0A%0AПишу+из+приложения+2ГИС.%0A%0A&type=phone_number&app_absent=0"}>
                            +7 (771) 101 0916
                        </Link>
                    </div>
                    <div className="grid gap-1">
                        <p className="font-medium text-lg">
                            Instagram
                        </p>
                        <Link href={"https://www.instagram.com/elite_hostel.kz/"}>@elite_hostel.kz</Link>
                    </div>
                </div>
            </div>
            <Image src="/map.png" alt="hero" width={1920} height={1080} className="object-cover aspect-video" />
        </section>
    );
}