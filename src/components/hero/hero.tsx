import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="w-full grid gap-6 lg:gap-8">
            <div className="w-full grid gap-6 lg:gap-8 lg:grid-cols-2">
                <div className="w-full md:max-w-xl">
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
                        Добро пожаловать в Elite – уютный отдых по доступной цене!
                    </h1>
                </div>
                <div className="h-full w-full md:max-w-xl flex flex-col gap-6 lg:gap-8">
                    <p className="text-base">
                        Ищете комфортный, недорогой и гостеприимный хостел? Мы предлагаем удобные номера, бесплатный Wi-Fi, кухню и уютную атмосферу в самом сердце города. Останавливайтесь у нас и почувствуйте себя как дома!
                    </p>
                    <Button className="w-full md:w-fit" asChild>
                        <Link href={"#about"}>
                            Подробнее
                        </Link>
                    </Button>
                </div>
            </div>
            <Image src={"/hero.png"} alt={""} width={2400} height={1600} className="aspect-square object-cover md:aspect-video" />
        </section>
    );
}