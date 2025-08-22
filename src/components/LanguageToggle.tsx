import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export const LanguageToggle = () => {
  const [language, setLanguage] = useState("FR");

  const toggleLanguage = () => {
    setLanguage(language === "FR" ? "EN" : "FR");
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Button
        variant="outline"
        size="sm"
        onClick={toggleLanguage}
        className="flex items-center space-x-2 bg-card/95 backdrop-blur-sm border-border shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <Globe className="h-4 w-4" />
        <span className="font-medium">{language}</span>
      </Button>
    </div>
  );
};