import { Avatar, AvatarImage, AvatarFallback, Button } from "@heroui/react";
import {
  CalendarDays,
  FileText,
  Headset,
  HomeIcon,
  Megaphone,
  Target,
} from "lucide-react";

import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="h-screen sticky top-0 shrink-0 w-1/6 flex flex-col sm:w-1/11 md:w-1/11 lg:w-1/6 justify-between bg-accent-foreground items-center gap-4 border-r z-99 border-border px-2 py-4">
      <div className="flex w-full px-3 gap-2 items-center">
        <Target size={21} className="text-focus sm:justify-center md:justify-center lg:justify-start" />
        <h1 className="text-md font-bold text-focus sm:hidden md:hidden lg:block">Missão em Ação</h1>
      </div>
      <div id="middle-section" className="flex flex-col gap-2 w-full h-full">
        <Link href="/">
          <Button
            variant="ghost"
            className="text-xs w-full flex items-center gap-3 justify-start sm:justify-center md:justify-center lg:justify-start"
          >
            <HomeIcon size={"sm"} />
            <span className="sm:hidden md:hidden lg:block">Painel Geral da Missão</span>
          </Button>
        </Link>
        <Link href="/engajamento">
          <Button
            variant="ghost"
            className="text-xs w-full flex items-center gap-3 justify-start sm:justify-center md:justify-center lg:justify-start"
          >
            <Megaphone size={"sm"} />
            <span className="sm:hidden md:hidden lg:block">Engajamento</span>
          </Button>
        </Link>
        <Link href="/testagem-de-audios">
          <Button
            variant="ghost"
            className="text-xs w-full flex items-center gap-3 justify-start sm:justify-center md:justify-center lg:justify-start"
          >
            <Headset size={"sm"} />
            <span className="sm:hidden md:hidden lg:block">Testagem de Áudios</span>
          </Button>
        </Link>
        <Link href="/agenda-e-gerenciamento">
          <Button
            variant="ghost"
            className="text-xs w-full flex items-center gap-3 justify-start sm:justify-center md:justify-center lg:justify-start"
          >
            <CalendarDays size={"sm"} />
            <span className="sm:hidden md:hidden lg:block">Agenda e Gerenciamento</span>
          </Button>
        </Link>
        <Link href="/relatorios">
          <Button
            variant="ghost"
            className="text-xs w-full flex items-center gap-3 justify-start sm:justify-center md:justify-center lg:justify-start"
          >
            <FileText size={"sm"} />
            <span className="sm:hidden md:hidden lg:block">Relatórios</span>
          </Button>
        </Link>
      </div>
      <div className="flex sm:justify-center md:justify-center lg:justify-start gap-4 items-center w-full">
        <Avatar size="sm" >
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Button variant="primary" size="sm" className="w-full sm:hidden md:hidden lg:block">
          Entrar
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
