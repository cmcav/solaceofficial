import type { FC, SVGAttributes } from "react";
import { useId } from "react";

export type SolaceAILogoProps = SVGAttributes<SVGSVGElement>;

export default function SolaceAILogo(props: SolaceAILogoProps) {
  const id = useId();

  const gradientId = `solace-ai-logo-gradient-${id}`;

  return (
    <svg
      width="130"
      height="25"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 130 25"
      {...props}
    >
      <path
        fill="#FFB5D6"
        d="M1.76295,12.58019c-1.2313,0.2827-1.99753,1.4471-1.69806,2.6952
	c0.28273,1.248,1.48057,1.9808,2.69515,1.698c1.2313-0.2827,1.98079-1.4471,1.69806-2.6951
	C4.17537,13.02859,2.97753,12.29749,1.76295,12.58019z"
      />
      <path
        fill="#D2A7E9"
        d="M2.82613,7.87019c0.98203,0.78295,2.36223,0.64911,3.1619-0.34966
	c0.79801-0.99876,0.61566-2.37895-0.34964-3.1619S3.27448,3.70951,2.47648,4.70828C1.67847,5.70704,1.86083,7.08724,2.82613,7.87019
	z"
      />
      <path
        fill="#FFDCDC"
        d="M8.78445,19.70239c-1.14765-0.5487-2.46261-0.0836-3.01134,1.049
	c-0.54873,1.1309-0.10037,2.4459,1.04896,3.0113c1.14765,0.5488,2.4626,0.0837,3.01134-1.0489
	C10.3654,21.56609,9.93378,20.25119,8.78445,19.70239z"
      />
      <path
        fill="#FFD1A4"
        d="M15.7065,19.70139c-1.1476,0.5487-1.5977,1.8804-1.0489,3.0113c0.5487,1.131,1.8469,1.6145,3.0113,1.049
	c1.1477-0.5487,1.5977-1.8804,1.049-3.0113C18.1691,19.61939,16.8559,19.13589,15.7065,19.70139z"
      />
      <linearGradient
        id={gradientId}
        gradientUnits="userSpaceOnUse"
        x1="21.58783"
        y1="6.94375"
        x2="22.83713"
        y2="11.14995"
        gradientTransform="matrix(1 0 0 -1 1.324843e-07 23.88861)"
      >
        <stop offset="0.2656" stopColor="#FFB7B2" />
        <stop offset="0.5781" stopColor="#AB9EFC" />
      </linearGradient>
      <path
        fill={`url(#${gradientId})`}
        d="M22.7303,12.58009c-1.2313-0.2827-2.4124,0.4501-2.6951,1.6981
	c-0.2828,1.248,0.4667,2.4291,1.698,2.6951c1.2313,0.2828,2.4124-0.45,2.6952-1.698
	C24.7111,14.02729,23.9616,12.86289,22.7303,12.58009z"
      />
      <path
        fill="#A0B0F6"
        d="M21.981,7.87218c0.9821-0.78295,1.1477-2.16316,0.3497-3.16192s-2.1799-1.13092-3.1619-0.34964
	c-0.9821,0.78295-1.1477,2.16314-0.3497,3.1619C19.6188,8.52128,20.999,8.65345,21.981,7.87218z"
      />
      <path
        fill="#BBABED"
        d="M12.246,0c-1.2983,0-2.26358,0.99876-2.26358,2.26352c0,1.26477,0.96528,2.26353,2.26358,2.26353
	c1.2814,0,2.2635-0.99876,2.2635-2.26353C14.5078,0.99708,13.5274,0,12.246,0z"
      />
      <path
        fill="currentColor"
        d="M40,7h-6v18h6v-6h7v6h6V7h-6v6h-7V7z"
      />
      <path
        fill="currentColor"
        d="M68,7h-6v18h6v-6h7v6h6V7h-6v6h-7V7z"
      />
      <path
        fill="currentColor"
        d="M95,7h-6v18h6v-6h7v6h6V7h-6v6h-7V7z"
      />
    </svg>
  );
}
