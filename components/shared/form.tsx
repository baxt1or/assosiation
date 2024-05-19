"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"


import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { formSchema, Schema } from "@/lib/schema"
import { useTransition } from "react"
import { createRequest } from "@/actions/request"
import { useRouter } from "next/navigation"
import { Label } from "../ui/label"
import { Loader2 } from "lucide-react"



export function FormRequest() {


    const [pending, setIsPending] = useTransition()
    const router = useRouter()

    const form = useForm<formSchema>({
        resolver: zodResolver(Schema),
        defaultValues: {
            fullName: "",
            position: "",
            email: "",
            companyName: '',
            phoneNumber: ""
        },
    })

    function onSubmit(values: formSchema) {

        setIsPending(() => {
            createRequest(values).then((data) => {

                form.reset()
                router.refresh()

            })
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                <Label className="text-3xl text-center text-black font-bold">
                    Оставить заявку
                </Label>

                <FormField
                    disabled={pending}
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                        <FormItem>

                            <FormControl>
                                <Input placeholder="Ф.И.О" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    disabled={pending}
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                        <FormItem>

                            <FormControl>
                                <Input placeholder="Должность" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    disabled={pending}
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                        <FormItem>

                            <FormControl>
                                <Input placeholder="Компания" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    disabled={pending}
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>

                            <FormControl>
                                <Input placeholder="Email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    disabled={pending}
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                        <FormItem>

                            <FormControl>
                                <Input placeholder="Номер телефона" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full" disabled={pending}>
                    {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Отпрпавить"}
                </Button>
            </form >
        </Form >
    )
}

