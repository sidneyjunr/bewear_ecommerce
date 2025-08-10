"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.email("Email Inválido"),
  // password: z
  //   .string()
  //   .min(8, { error: "A senha deve ter pelo menos 8 caracteres" })
  //   .refine((val) => /[a-z]/.test(val), {
  //     error: "A senha deve conter pelo menos uma letra minúscula.",
  //   })
  //   .refine((val) => /[A-Z]/.test(val), {
  //     error: "A senha deve conter pelo menos uma letra maiúscula.",
  //   })
  //   .refine((val) => /\d/.test(val), {
  //     error: "A senha deve incluir pelo menos um número.",
  //   })
  //   .refine((val) => /[!@#$%^&*()_+={}\[\]:;"'<>,.?\/\\|`~-]/.test(val), {
  //     error:
  //       "A senha deve conter caractere especial (por exemplo, @, #, $, etc.).",
  //   })
  //   .refine((val) => !/\s/.test(val), {
  //     error: "A senha não pode conter espaços em branco.",
  // }),
  password:z.string("Senha inválida").min(8,"Senha inválida")
});

type FormValues = z.infer<typeof formSchema>;

const SignInForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    // mode: "onSubmit",
    // reValidateMode:"onSubmit"
  });

  function onSubmit(values: FormValues) {
    console.log("Formulário enviado com sucesso:", values);
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Entrar</CardTitle>
          <CardDescription>Faça login para continuar</CardDescription>
        </CardHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <CardContent className="grid gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu email" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite sua senha"
                        type="password"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit">Entrar</Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </>
  );
};

export default SignInForm;
