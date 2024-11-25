 import { Button } from "@/components/ui/button"
 import { Textarea } from "@/components/ui/textarea"
 import { Card } from "./ui/card"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
  
import {z, ZodType} from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"



export default function ContactForm() {

type FormData = {
    ocupation : string,
    name : string,
email: string,
phone: number,
message: string,

}

const formSchema:ZodType<FormData> = z.object({
    ocupation: z.string(),
    name: z.string().min(2).max(30),
    email: z.string().email(),
    phone: z.number().min(11),
    message: z.string().min(3).max(200),
})
const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
})

const onSubmit= (data:FormData) => {
    console.log(data)
}

    return ( 
        <Card className=" max-w-3xl mx-auto">
            <div className="p-2">
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input  {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="ocupation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Ocupation</FormLabel>
            <FormControl>
              <Input  {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input  {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Message</FormLabel>
            <FormControl>
              <Textarea className="resize-none" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit">Submit</Button>
    </form>
  </Form> 
  </div>
  </Card>
  )
}
