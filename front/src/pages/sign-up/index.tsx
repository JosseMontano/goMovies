import React, { useState } from "react";
import { Icon, Title, BtnSocialMedia } from "@/components/loginRegister";
import { Footer } from "./components/footer";
import SingUpType from "./interfaces/signUp";
import { IndexForm } from "./components/form";
import { useRouter } from "next/navigation";
import { useUser } from "@/store/user";
import { signUpApi } from "./services/auth";
import UserType from "@/interfaces/user";

type PageProps = {};

const Page = ({}: PageProps) => {
  const router = useRouter();
  const { loginUser } = useUser();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>("");
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (val: SingUpType) => {
    setSuccess(false)
    setLoading(true);
    const { accept_conditions: _, ...newObj } = val;
    const { data, error } = await signUpApi<SingUpType>(newObj);
    console.log(data)
    if(error == "") setSuccess(true)
    
    
    setError(error);

    setLoading(false);
    /* 
            loginUser(data);
        push("/home");
    */
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
