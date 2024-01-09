import axios from "axios";

// for usingn public routes
const PublicHttpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// for using auth route
const PrivateHttpClient = axios.create({
  baseURL: "https://www.sifaris.ktmserver.com/backend/",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiMjY1MzllZDlhNzlmOGVkZTQxNDkxYTMzOTQ2MDBjNDRkODRmYzAyZDYxMzkyOThjZDk2MjcyNmQzNGZjMDNjOTA5OTMxM2RlN2MxNTc4M2MiLCJpYXQiOjE3MDQ2OTQxNjQuNDI1NDIsIm5iZiI6MTcwNDY5NDE2NC40MjU0MjQsImV4cCI6MTcwNDc4MDU2NC4zOTU4MTMsInN1YiI6IjEiLCJzY29wZXMiOlsiKiJdfQ.DWVSDKzJgBtuanf2ILN8LP117OMDDSNs4kvF3e9SYjtZia3QM3cAL7oIcqBs_hgLw8QY_J0IYIastuFMGmhNDX2bMnBkJVB3YT_skr5dREwZC49FphADl7fD7M9po-PNJbw6GNMoewwHImzqjscmFCitwCgYKTCaVdbfzLbz3KVHAJkp1AwM6V-kM5HitFWvFfiHpvtild9RxhHobvOKpTnpgsYSqFIT9wftpgI4YIeD9SknT2-yBVaZEfIrEec3Am1SQcMmHraugZwniaKqI2tuxvavOAUdOCdb6QABJurPBJtE4QmgiYOUuTM9Ew_Bk0C5ugZ8UgTw6NT_vjNoa8gFqa8Hl3VNRfdROpxaneQkKbVMDPy7C4NGQgvSkjMv5b-gPo_slQ4Sb4kbWmu4FYQbuOEyEQNN67DeG7V4ZpgLfPPtrr6zAbdr2msVipqwPP77Ni-JWSs_8yaH-vBBccLodhihZhB8J6OlVnEyp9SxAyn7qHAKtNKUUvg-UsdoMq8i-14JrBGNzz8UmX3KHW4qfdqC-6Jt98vnnYyj71BVoqh2DJtaTWGGIPizZF4x0Pt9IbcYt1g1RrbhYUU4Y7PAFjjKICGfLbtnDNrtP5UFbKz67ReSTmDTOLIBoaRDadawoNkODUuVDLJkIf-6o6VFBogI-ZmCHKPZlCYhed0",
  },
});

export { PublicHttpClient, PrivateHttpClient };
