import { sugestionFormSchema } from "@/schemas/sugestionForm";
import { SugestionFormProps } from "@/types/sugestionForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function useSugestionForm() {
  return useForm<SugestionFormProps>({
    resolver: zodResolver(sugestionFormSchema),
    defaultValues: {
      name: "",
      link: "",
      age: "",
      big: "",
      eye: "",
      gender: "",
      hair: "",
      isIntegrated: "",
      nat: "",
      short: "",
      tags: "",
    }
  })
}