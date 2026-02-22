"use client";

import {
  Building,
  Flag,
  Headphones,
  MapPin,
  PersonStanding,
} from "lucide-react";

import { Separator } from "@heroui/react";
import Indicator from "@/components/metrics/Indicator";
import { Users } from "lucide-react";
import ProgressIndicator from "@/components/metrics/ProgressIndicator";
import TotalIndicator from "@/components/metrics/TotalIndicator";

const HomePage = () => {
  return (
    <div className="h-min-screen flex flex-col px-12 justify-center items-center">
      <div className="flex flex-col gap-1 py-4 w-full">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold text-violet-700">
            Painel Geral da Missão
          </h1>
        </div>
        <span className="text-sm text-muted">
          Visão estratégica e indicadores da Missão no Nordeste
        </span>
      </div>
      <Separator />
      <div className="flex gap-2 py-4 w-full sm:flex-wrap md:flex-wrap lg:flex-nowrap">
        <div className="flex flex-col gap-2 w-full bg-card">
          <div>
            <h2 className="text-xl font-bold text-foreground">Engajamento</h2>
          </div>
          <div className="flex justify-between items-center gap-4">
            <Indicator
              title="Estados"
              value="0"
              icon={<MapPin size={28} className="text-sm text-focus" />}
            />
            <Indicator
              title="Cidades"
              value="0"
              icon={<Building size={28} className="text-sm text-focus" />}
            />
            <Indicator
              title="Grupos"
              value="0"
              icon={<Users size={28} className="text-sm text-focus" />}
            />
            <Indicator
              title="Pessoas"
              value="0"
              icon={<PersonStanding size={28} className="text-sm text-focus" />}
            />
          </div>
          <div className="flex gap-2">
            <ProgressIndicator
              title="Estados Alcançados"
              value={0}
              total={9}
              icon={<Flag size={28} className="text-sm" />}
            />
            <TotalIndicator
              title="Grupos Ativos"
              value={0}
              icon={<PersonStanding size={28} className="text-sm" />}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div id="Title">
            <h2 className="text-xl font-bold text-foreground">
              Testagem de Áudios
            </h2>
          </div>
          <div className="flex justify-between items-center gap-4">
            <Indicator
              title="Estados"
              value="0"
              icon={<MapPin size={28} className="text-sm text-focus" />}
            />
            <Indicator
              title="Cidades"
              value="0"
              icon={<Building size={28} className="text-sm text-focus" />}
            />
            <Indicator
              title="Grupos"
              value="0"
              icon={<Users size={28} className="text-sm text-focus" />}
            />
            <Indicator
              title="Pessoas"
              value="0"
              icon={<PersonStanding size={28} className="text-sm text-focus" />}
            />
          </div>
          <div className="flex gap-2">
            <ProgressIndicator
              title="Estados Testados"
              value={0}
              total={9}
              icon={<Flag size={28} className="text-sm" />}
            />
            <TotalIndicator
              title="Grupos Ativos"
              value={0}
              icon={<Headphones size={28} className="text-sm" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
