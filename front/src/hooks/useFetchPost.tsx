import { useState } from "react";

type Params<T, S> = {
  api: (val: T) => Promise<{ data: S | null; error: string }>;
};

export const UseFetchPost = <T,S>({ api }: Params<T, S>) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>("");
  const [success, setSuccess] = useState(false);

  const post = async (val: T) => {
    setSuccess(false);
    setLoading(true);
    const { data, error } = await api(val);
    if (error == "") {
      setSuccess(true);
    }
    setError(error);
    setLoading(false);
    return data;
  };
  return {
    loading,
    error,
    success,
    post,
  };
};
