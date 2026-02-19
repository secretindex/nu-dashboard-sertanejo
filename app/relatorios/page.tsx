import Access from "@/components/report/Access";
import { Separator } from "@heroui/react";
import { ClockFading, GraduationCap, Heart, ImagePlus, MapPlus } from "lucide-react";

const RelatoriosPage = () => {
  return (
    <div className="h-min-screen flex flex-col px-8 justify-center items-center">
      <div className="flex flex-col gap-1 py-4 w-full">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold text-focus">Relatorios</h1>
        </div>
        <span className="text-sm text-muted">
          Acesso a formulários e documentos
        </span>
      </div>
      <Separator />
      <div className="flex gap-2 py-4 w-full sm:flex-wrap lg:flex-nowrap">
        <div className="flex flex-col gap-2 w-full">
          <div>
            <h3 className="text-lg font-bold">Relatórios Gerais</h3>
          </div>
          <Access
            title="Relatorio de Treinamentos"
            description="Formulário de treinamentos"
            icon={<GraduationCap className="text-background" />}
            link="#"
          />
          <Access
            title="Histórias de Transformação"
            description="Compartilhe histórias de transformação"
            icon={<ClockFading className="text-background" />}
            link="#"
          />
          <Access
            title="Mapa Geral dos Grupos (Trimestral)"
            description="Relatório Trimestral dos Grupos"
            icon={<MapPlus className="text-background" />}
            link="#"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div>
            <h3 className="text-lg font-bold">Relatórios de Engajamento</h3>
          </div>
          <Access
            title="Momentos"
            description="Momentos em Depoimento Escrito"
            icon={<Heart className="text-background" />}
            link="#"
          />
          <Access
            title="Imagens"
            description="Formulário de Imagens"
            icon={<ImagePlus className="text-background" />}
            link="#"
          />
        </div>
      </div>
    </div>
  );
};

export default RelatoriosPage;
