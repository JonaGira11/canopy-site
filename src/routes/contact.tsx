import { createFileRoute } from '@tanstack/react-router'
import ContactForm from "@/components/Contact"
import { MailsIcon } from "lucide-react"

export const Route = createFileRoute('/contact')({
  component: () => <div>
    <div className='flex flex-col items-center justify-center'>
      <h2 className='font-bold text-3xl md:text-4xl '>Get in Touch</h2>
      <p className='text-muted-foreground py-1 '>Contact us through our email or fill out the form below</p>
      <div className='flex py-1 '>
        
        <MailsIcon className=''/>
        <p className='pl-2'>info@canoyinc.co.uk</p>
        </div>
     
    </div> 
    <ContactForm />
  </div>,
})
