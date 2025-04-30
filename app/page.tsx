"use client";
import { useState } from "react";
import AgentView from "@/components/AgentView";
import UserView from "@/components/UserView";
import { Switch } from "@/components/ui/switch";

export default function Main() {
  const [isAgentView, setIsAgentView] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-[#ED6A5E] p-2">
      {/* Small screens */}
      <div className="flex gap-2 justify-center pt-2 pb-4 md:hidden">
        <div
          className={`text-white font-bold text-sm ${
            isAgentView ? "text-zinc-300" : ""
          }`}
        >
          Customer View
        </div>
        <Switch
          checked={isAgentView}
          onCheckedChange={setIsAgentView}
          className="flex items-center"
          mode="custom"
        />
        <div
          className={`text-white font-bold text-sm ${
            isAgentView ? "" : "text-zinc-300"
          }`}
        >
          Agent View
        </div>
      </div>

      <div className="flex-1 min-h-0 flex gap-1 mb-8 md:mb-0">
        {/* Left column */}
        <div
          className={`
            w-full md:w-1/4 flex flex-col min-h-0 overflow-hidden
            ${isAgentView ? "hidden md:flex" : ""}
          `}
        >
          <div className="text-white font-bold text-xs text-center pt-1 pb-3 hidden md:block">
            Vista del Cliente
          </div>
          <UserView />
        </div>

        {/* Right column */}
        <div
          className={`
            w-full md:w-3/4 flex flex-col min-h-0 overflow-hidden
            ${isAgentView ? "flex" : "hidden md:flex"}
          `}
        >
          <div className="text-white font-bold text-xs text-center pt-1 pb-3 hidden md:block">
            Vista de Agente de Soporte
          </div>
          <AgentView />
        </div>
      </div>
    </div>
  );
}
