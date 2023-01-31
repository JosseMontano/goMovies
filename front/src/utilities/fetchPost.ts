import { url } from "@/pages/config";

export const fetchPost = async <T>(
  body: T,
  path: string
): Promise<{ data: T[]; error: string }> => {
  let error = "";

  const response = await fetch(`${url + path}`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      ...body,
    }),
  });

  if (response.ok) {
    const result = await response.json();
    return {
      data: result,
      error: "",
    };
  }

  const resError = await response.json();
  error = resError.Message;

  return {
    data: [],
    error: error,
  };
};
