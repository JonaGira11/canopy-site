import { createFileRoute } from '@tanstack/react-router'
import ContactForm from "@/components/Contact"
import { MailsIcon } from "lucide-react"

export const Route = createFileRoute('/contact')({
  component: () => <div>
    <section className='min-h-screen mx-auto p-4 md:p-2 '>

    <div className='flex flex-col items-center justify-center mt-[6rem]'>
      <h1 className='font-bold text-3xl md:text-4xl my-2 '>Get in Touch</h1>
      <p className='text-muted-foreground py-1 '>Contact us through our email or fill out the form below</p>
      <div className='flex py-1 my-2'>
        
        <MailsIcon className=''/>
        <p className='pl-2'>info@canoyinc.co.uk</p>
        </div>
     
    </div> 
    <ContactForm />
    </section>
  </div>,
})
