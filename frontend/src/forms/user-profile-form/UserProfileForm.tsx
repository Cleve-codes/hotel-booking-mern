import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod"

const formSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(1, "name is required"),
  addressLine1: z.string().min(1, "addressLine1 is required"),
  city: z.string().min(1, "city is required"),
  country: z.string().min(1, "country is required"),
})

type UserFormData = z.infer<typeof formSchema>

type Props = {
  onSave: (userProfileData: UserFormData) => void;
  isLoading: boolean;
}

const UserProfileForm = ({ onSave, isLoading }: Props) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema)
  })

  return (
    <Form></Form>
  )
}

export default UserProfileForm;