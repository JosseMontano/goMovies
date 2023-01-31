import React, { useState } from "react";
import { Icon, Title, BtnSocialMedia } from "@/components/loginRegister";
import { Footer } from "./components/footer";
import SingUpType from "./interfaces/signUp";
import { IndexForm } from "./components/form";
import { useRouter } from "next/navigation";
import { useUser } from "@/store/user";
import { signUpApi } from "./services/auth";
import { UseFetchPost } from "@/hooks/useFetchPost";
import UserType from "@/interfaces/user";

type PageProps = {};

const Page = ({}: PageProps) => {
  const router = useRouter();
  const { loginUser } = useUser();

  const useFecth = UseFetchPost<SingUpType | null, UserType>(signUpApi);
  const { error, post, loading, success } = useFecth;

  const handleSubmit = async (val: SingUpType) => {
    const { accept_conditions: _, ...newObj } = val;

    const data = await post(newObj);
    if (data) {
      loginUser(data);
    }
    /*     push("/home"); */
  };

  return (
    <div className="container">
      <Icon />

      <Title msg={"Create your Account"} />

      <IndexForm handleSubmit={handleSubmit} isLoading={loading} />

      {error && <p className="error">{error}</p>}

      {success && <p className="success">Proceso exitoso</p>}

      <p className="or">Or continue with</p>

      <BtnSocialMedia />

      <Footer signIn={() => {}} />
      <style jsx>{`
        .container {
          height: 100vh;
          display: grid;
          place-content: center;
          text-align: center;
          form {
            display: grid;
            margin-top: 10px;
            max-width: 300px;
          }
        }
        .or {
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};

export default Page;
