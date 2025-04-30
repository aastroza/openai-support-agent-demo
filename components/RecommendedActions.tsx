import useConversationStore from "@/stores/useConversationStore";
import Action from "./Action";
import { ToolName } from "@/lib/tools/tools-handling";

export default function RecommendedActions() {
  const { recommendedActions } = useConversationStore();

  // Translation mapping for action names
  const translateActionName = (action: string) => {
    const translations: Record<string, string> = {
      "reset_password": "Restablecer contraseña",
      "create_ticket": "Crear ticket",
      // Add more translations as needed if you re-enable other actions
    };
    
    return translations[action] || action.replace(/_/g, " ");
  };

  const formatName = (action: string) => {
    const translated = translateActionName(action);
    return translated.charAt(0).toUpperCase() + translated.slice(1);
  };

  return (
    <div className="flex gap-2">
      {recommendedActions.map((action) => (
        <Action
          key={action.name}
          functionName={action.name as ToolName}
          name={formatName(action.name)}
          parameters={action.parameters}
        />
      ))}
    </div>
  );
}
