import { url } from "@/pages/config";

export const fetchPost = async <T, S>(
  body: T,
  path: string
): Promise<{ data: S | null; error: string }> => {
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
  const result = await response.json();

  if (response.ok) {
    return {
      data: result,
      error: "",
    };
  }

  error = result.Message;

  return {
    data:null,
    error: error,
  };
};
