"use client";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Surface,
  TextField,
} from "@heroui/react";
import { Check } from "lucide-react";
import axios from "axios";

const LoginPage = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    const response = await axios.post("http://localhost:3000/api/login", data);

    console.log(response.data);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Surface className="flex w-2/5 mx-auto flex-col gap-4 p-8 shadow-xl border border-border rounded-2xl">
        <div className="flex flex-col gap-1 justify-center w-full">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-focus">Login</h1>
          </div>
          <span className="text-sm text-muted">
            Faça login para acessar o painel
          </span>
        </div>
        <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              return null;
            }}
          >
            <Label>Senha</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Deve ter pelo menos 8 caracteres
            </Description>
            <FieldError />
          </TextField>
          <div className="flex gap-2">
            <Button type="submit">
              <Check />
              Entrar
            </Button>
            <Button type="reset" variant="secondary">
              Resetar
            </Button>
          </div>
        </Form>
      </Surface>
    </div>
  );
};

export default LoginPage;
