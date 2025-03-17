import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
    return (
        <header className="w-full sticky top-0 flex h-16 items-center gap-2 md:gap-4 border-b border-foreground bg-background">
            <nav className="w-full flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                <Link
                    href="#"
                    className="flex items-center gap-2 text-lg font-semibold"
                >
                    <span className="">Elite.</span>
                </Link>
                <Link
                    href="#about"
                    className="text-muted-foreground transition-colors hover:text-foreground hidden lg:flex"
                >
                    О нас
                </Link>
                <Link
                    href="#rooms"
                    className="text-muted-foreground transition-colors hover:text-foreground hidden lg:flex"
                >
                    Номера
                </Link>
                <Link
                    href="#price"
                    className="text-muted-foreground transition-colors hover:text-foreground hidden lg:flex"
                >
                    Цены
                </Link>
            </nav>
            <Button className="hidden md:flex" asChild>
                <Link href={"#contacts"}>Контакты</Link>
            </Button>
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="default"
                        size={'default'}
                        className="shrink-0 lg:hidden"
                    >
                        <span className="">Меню</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full">
                    <nav className="flex flex-col gap-6 h-full justify-center items-center text-base px-4 md:px-6">
                        <Link
                            href="#"
                            className="flex items-center gap-2 text-lg font-semibold"
                        >
                            <span className="text-lg">Elite.</span>
                        </Link>
                        <Link href="#about" className="text-muted-foreground hover:text-foreground">
                            О нас
                        </Link>
                        <Link
                            href="#rooms"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Номера
                        </Link>
                        <Link
                            href="#price"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Цены
                        </Link>
                        <Button className="w-full md:hidden" asChild>
                            <Link href={"#contacts"}>Контакты</Link>
                        </Button>
                    </nav>
                </SheetContent>
            </Sheet>
        </header>
    );
}