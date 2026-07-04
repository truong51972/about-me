import cvSource from "../../Tran_Quoc_Truong_CV.yaml?raw";

export const prerender = true;

export function GET() {
  return new Response(cvSource, {
    headers: {
      "Content-Type": "text/yaml; charset=utf-8"
    }
  });
}
