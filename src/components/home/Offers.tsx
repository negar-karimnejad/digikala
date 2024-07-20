"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Product } from "@prisma/client";
import axios, { AxiosResponse } from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Offers() {
  const [products, setProducts] = useState<Product[]>([]);

  async function getProducts() {
    try {
      const response: AxiosResponse = await axios.get("/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const offerProducts = products
    .slice()
    .sort((a, b) => b.discount - a.discount)
    .slice(0, 12);

  return (
    <div className="bg-rose-600 rounded-xl py-4 mx-3">
      <Carousel
        opts={{
          align: "start",
          direction: "rtl",
        }}
        className="min-w-screen px-4"
      >
        <CarouselContent>
          <div className="pl-6 cursor-pointer flex flex-col items-center justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="110"
              height="110"
              viewBox="0 0 120 120"
              fill="none"
            >
              <path
                d="M77.7524 14.9378C77.8003 15.3691 78.1744 15.7052 78.6289 15.7052H84.8224L84.9185 15.7001C85.3603 15.6533 85.7041 15.2876 85.7041 14.844V12.8462L85.699 12.7524C85.6511 12.3209 85.2769 11.9851 84.8224 11.9851L81.9819 11.9853L81.9811 10.8612L81.9759 10.7673C81.928 10.3358 81.5539 10 81.0991 10H78.6291L78.533 10.0051C78.0912 10.0518 77.7474 10.4172 77.7474 10.8612L77.7472 14.844L77.7524 14.9378Z"
                fill="white"
              />
              <path
                d="M110.254 34.586C110.207 34.1547 109.832 33.8186 109.378 33.8186H103.184L103.088 33.8237C102.647 33.8705 102.303 34.2362 102.303 34.6798V36.6776L102.308 36.7714C102.356 37.2029 102.73 37.5387 103.184 37.5387L106.025 37.5385L106.026 38.6626L106.031 38.7565C106.079 39.188 106.453 39.5238 106.908 39.5238H109.378L109.474 39.5188C109.916 39.472 110.259 39.1066 110.259 38.6626L110.26 34.6798L110.254 34.586Z"
                fill="white"
              />
              <path
                d="M97.2623 33.8399C97.7021 33.8399 98.0262 34.1259 98.0702 34.5371L98.0753 34.6342V37.0171C98.0753 37.4467 97.7827 37.7633 97.3617 37.8063L97.2623 37.8114H90.7581C90.3182 37.8114 89.9942 37.5255 89.9501 37.1141L89.945 37.0171V34.6342C89.945 34.2046 90.2377 33.8879 90.6587 33.8449L90.7581 33.8399H97.2623Z"
                fill="white"
              />
              <path
                d="M59.4446 12.2931C59.4005 11.8819 59.0763 11.5959 58.6367 11.5959H55.7911L55.6917 11.6009C55.2708 11.6439 54.978 11.9607 54.978 12.3902V14.7731L54.9831 14.8702C55.0272 15.2815 55.3514 15.5674 55.7911 15.5674H58.6367L58.736 15.5624C59.1569 15.5193 59.4497 15.2028 59.4497 14.7731V12.3902L59.4446 12.2931Z"
                fill="white"
              />
              <path
                d="M15.1303 15.571C18.502 15.571 20.7273 17.6765 20.8186 20.9224L20.8215 21.1311V25.8969C20.8215 29.1909 18.6664 31.365 15.3439 31.4541L15.1303 31.457H7.81302C7.37382 31.457 7.04926 31.1707 7.00512 30.7597L7 30.6627V28.2798C7 27.8504 7.29319 27.5336 7.71378 27.4905L7.81302 27.4855H15.1303C16.1905 27.4855 16.7102 27.0224 16.7534 26.0348L16.7564 25.8969V21.1311C16.7564 20.0955 16.2827 19.5876 15.2715 19.5454L15.1303 19.5425H7.81302C7.37382 19.5425 7.04926 19.2561 7.00512 18.8452L7 18.7482V16.3653C7 15.9361 7.29319 15.6191 7.71378 15.576L7.81302 15.571H15.1303Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M31.3956 22.7671V27.5547H29.7692C28.4219 27.5547 27.3296 26.4829 27.3296 25.1609V11.5959C27.3296 11.1552 26.9656 10.7979 26.5165 10.7979H24.0769C23.6278 10.7979 23.2637 11.1552 23.2637 11.5959V25.1609C23.2637 28.6864 26.1763 31.5444 29.7692 31.5444H47.2527C48.7276 31.5444 50.0802 31.0307 51.1349 30.1756L51.8581 31.2007C52.01 31.4159 52.2598 31.5444 52.5267 31.5444H57.3863C59.2369 31.5444 60.907 30.7862 62.0916 29.5691L63.2427 31.2007C63.3946 31.4159 63.6444 31.5444 63.9113 31.5444H68.7709C70.3782 31.5444 71.8493 30.9725 72.9844 30.0247L73.8141 31.2007C73.966 31.4159 74.2159 31.5444 74.4827 31.5444H77.7042C79.3185 31.5444 80.7954 30.9675 81.9325 30.0123L82.7709 31.2007C82.9228 31.4159 83.1727 31.5444 83.4395 31.5444H84.2215C85.9164 31.5444 87.4599 30.9084 88.6177 29.8664L89.3082 31.1248C89.45 31.3832 89.725 31.5444 90.0242 31.5444H95.6373C97.2412 31.5444 98.6902 30.8935 99.7249 29.8462L100.681 31.2007C100.832 31.4159 101.082 31.5444 101.349 31.5444H106.209C109.802 31.5444 112.714 28.6864 112.714 25.1609V20.3732C112.714 19.9325 112.35 19.5753 111.901 19.5753H109.462C109.012 19.5753 108.648 19.9325 108.648 20.3732V25.1609C108.648 26.4829 107.556 27.5547 106.209 27.5547H101.094C101.247 27.049 101.33 26.5134 101.33 25.9588V20.3732C101.33 19.9325 100.966 19.5753 100.516 19.5753H98.0769C97.6278 19.5753 97.2637 19.9325 97.2637 20.3732V25.9588C97.2637 26.8402 96.5356 27.5547 95.6373 27.5547H90.7582V20.3732C90.7582 19.9325 90.3941 19.5753 89.945 19.5753H87.4743C87.0252 19.5753 86.6611 19.9325 86.6611 20.3732V25.1609C86.6611 26.4829 85.5688 27.5547 84.2215 27.5547H83.7369C84.0418 26.8155 84.2097 26.0074 84.2097 25.1609V20.3732C84.2097 19.9325 83.8456 19.5753 83.3965 19.5753H80.957C80.5079 19.5753 80.1438 19.9325 80.1438 20.3732V25.1609C80.1438 26.4829 79.0516 27.5547 77.7042 27.5547H74.8035C75.1085 26.8155 75.2764 26.0074 75.2764 25.1609V20.3732C75.2764 19.9325 74.9123 19.5753 74.4632 19.5753H72.0237C71.5745 19.5753 71.2105 19.9325 71.2105 20.3732V25.1609C71.2105 26.4829 70.1182 27.5547 68.7709 27.5547H63.4189C63.7239 26.8155 63.8918 26.0074 63.8918 25.1609V20.3732C63.8918 19.9325 63.5277 19.5753 63.0786 19.5753H60.6391C60.1899 19.5753 59.8259 19.9325 59.8259 20.3732V25.1609C59.8259 26.4829 58.7336 27.5547 57.3863 27.5547H53.0046C53.2293 26.9307 53.3516 26.2593 53.3516 25.5598C53.3516 22.2547 50.6211 19.5753 47.2527 19.5753L43.5363 19.5753C42.4114 17.6673 40.309 16.3835 37.9011 16.3835C34.3082 16.3835 31.3956 19.2415 31.3956 22.7671ZM37.9011 20.3732C36.5538 20.3732 35.4615 21.445 35.4615 22.7671V27.5547H40.3406V22.7671C40.3406 21.445 39.2484 20.3732 37.9011 20.3732ZM44.4066 27.5547V23.565H47.2527C48.3755 23.565 49.2857 24.4581 49.2857 25.5598C49.2857 26.6616 48.3755 27.5547 47.2527 27.5547H44.4066Z"
                fill="white"
              />
              <path
                d="M98.7052 53.1463C98.7538 53.5875 99.1339 53.9314 99.5957 53.9314H105.889L105.986 53.9262C106.435 53.8783 106.784 53.5042 106.784 53.0504V51.0065L106.779 50.9105C106.731 50.4691 106.35 50.1255 105.889 50.1255L103.003 50.1257L103.002 48.9757L102.996 48.8797C102.948 48.4383 102.568 48.0947 102.106 48.0947H99.5958L99.4983 48.0999C99.0494 48.1477 98.7001 48.5216 98.7001 48.9757L98.6999 53.0504L98.7052 53.1463Z"
                fill="white"
              />
              <path
                d="M28.8538 55.3387C28.809 54.918 28.4798 54.6253 28.0329 54.6253H21.4242L21.3233 54.6305C20.8955 54.6745 20.5982 54.9985 20.5982 55.4379V57.8757L20.6034 57.9751C20.6481 58.3959 20.9774 58.6883 21.4242 58.6883H28.0329L28.1339 58.6832C28.5616 58.6392 28.859 58.3153 28.859 57.8757V55.4379L28.8538 55.3387Z"
                fill="white"
              />
              <path
                d="M56.2172 48.0947C56.6639 48.0947 56.9933 48.3874 57.0381 48.8081L57.0433 48.9073V51.3451C57.0433 51.7847 56.7458 52.1086 56.3181 52.1526L56.2172 52.1577H53.3259C52.8792 52.1577 52.5498 51.8652 52.5051 51.4444L52.4998 51.3451V48.9073C52.4998 48.4679 52.7973 48.1439 53.225 48.0999L53.3259 48.0947H56.2172Z"
                fill="white"
              />
              <path
                d="M68.7287 48.0947C68.4737 48.0947 68.233 48.211 68.0765 48.4099L62.8002 55.1123C62.6946 55.2463 62.7913 55.4417 62.9632 55.4417H63.7892C64.0442 55.4417 64.2849 55.3254 64.4414 55.1265L69.7177 48.4241C69.8233 48.2901 69.7266 48.0947 69.5547 48.0947H68.7287Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M61.108 66.8702H74.1047C76.4689 66.8702 78.2351 65.1248 78.2351 62.7886C78.2351 60.4524 76.4689 58.707 74.1047 58.707H64.6048C63.8613 58.707 63.718 58.0486 64.1917 57.4825L71.1489 48.7026C71.4711 48.3177 71.9504 48.0947 72.4557 48.0947H75.6293C76.2678 48.0947 76.6176 48.8294 76.2107 49.3155L72.0395 54.6253H74.1047C78.5618 54.6253 81.9451 57.7084 82.3291 61.9723H82.3655V63.6049H82.3291C82.2215 64.8001 81.8782 65.9025 81.3417 66.8702H90.4057C91.7747 66.8702 92.8844 65.7738 92.8844 64.4213V59.5233C92.8844 59.0725 93.2544 58.707 93.7107 58.707H96.1894C96.6457 58.707 97.0156 59.0725 97.0156 59.5233V64.4213C97.0156 65.2873 96.845 66.114 96.5352 66.8702H99.4824C100.851 66.8702 101.961 65.7738 101.961 64.4213V59.5233C101.961 59.0725 102.331 58.707 102.787 58.707H105.266C105.722 58.707 106.092 59.0725 106.092 59.5233V64.4213C106.092 65.2873 105.922 66.114 105.612 66.8702H106.104C107.473 66.8702 108.583 65.7738 108.583 64.4213V59.5233C108.583 59.0725 108.953 58.707 109.409 58.707H111.888C112.344 58.707 112.714 59.0725 112.714 59.5233V64.4213C112.714 68.028 109.755 70.9519 106.104 70.9519H105.31C105.039 70.9519 104.785 70.8204 104.63 70.6002L103.779 69.3845C102.623 70.3617 101.123 70.9519 99.4824 70.9519H96.2092C95.9381 70.9519 95.6842 70.8204 95.5299 70.6002L94.6869 69.3971C93.5335 70.3668 92.0388 70.9519 90.4057 70.9519H80.7062C80.435 70.9519 80.1812 70.8204 80.0268 70.6002L79.1554 69.3566C77.7811 70.3678 76.0446 70.9519 74.1047 70.9519H41.6206C41.3495 70.9519 41.0956 70.8204 40.9413 70.6002L40.0982 69.3971C38.9449 70.3667 37.4501 70.9519 35.817 70.9519H13.6099C9.95936 70.9519 7 68.028 7 64.4213V59.5233C7 59.0725 7.36992 58.707 7.82624 58.707H10.305C10.7613 58.707 11.1312 59.0725 11.1312 59.5233V64.4213C11.1312 65.7738 12.241 66.8702 13.6099 66.8702H35.817C37.186 66.8702 38.2958 65.7738 38.2958 64.4213V59.5233C38.2958 59.0725 38.6657 58.707 39.122 58.707H41.6007C42.057 58.707 42.427 59.0725 42.427 59.5233V64.4213C42.427 65.2873 42.2563 66.114 41.9465 66.8702H48.8491C48.5393 66.114 48.3686 65.2873 48.3686 64.4213V61.9723C48.3686 58.3655 51.328 55.4417 54.9786 55.4417C58.6291 55.4417 61.5885 58.3655 61.5885 61.9723V64.4213C61.5885 65.2873 61.4179 66.114 61.108 66.8702ZM57.4573 61.9723V64.4213C57.4573 65.7738 56.3475 66.8702 54.9786 66.8702C53.6096 66.8702 52.4998 65.7738 52.4998 64.4213V61.9723C52.4998 60.6197 53.6096 59.5233 54.9786 59.5233C56.3475 59.5233 57.4573 60.6197 57.4573 61.9723Z"
                fill="white"
              />
              <path
                d="M15.1277 91.7882C14.6548 91.7882 14.3149 92.1215 14.3149 92.5851V103.741C14.3149 104.828 13.7973 105.335 12.6892 105.335H7.81285C7.3398 105.335 7 105.669 7 106.132V108.523C7 108.987 7.3398 109.32 7.81285 109.32H12.6892C16.347 109.32 18.3791 107.327 18.3791 103.741V102.055L19.3279 103.398C19.4797 103.613 19.7295 103.741 19.9963 103.741H40.6273C42.2581 103.741 43.7488 103.153 44.8904 102.181L46.1367 103.741H70.6434C73.0628 103.741 75.1606 102.826 76.6188 101.306L78.0967 103.398C78.2486 103.613 78.4984 103.741 78.7652 103.741H99.6749C103.267 103.741 106.179 100.887 106.179 97.3664V92.5851C106.179 92.145 105.815 91.7882 105.366 91.7882H102.927C102.478 91.7882 102.114 92.145 102.114 92.5851V97.3664C102.114 98.6867 101.022 99.757 99.6749 99.757H77.7645C78.2924 98.8124 78.6302 97.7362 78.7361 96.5695H78.772V95.7726C78.772 91.203 75.3045 87.8038 70.6434 87.8038H68.6113L72.7157 82.6204C73.116 82.1459 72.7718 81.4287 72.1436 81.4287H69.0209C68.5236 81.4287 68.052 81.6463 67.7349 82.0221L60.8892 90.5929C60.4231 91.1456 60.5641 91.7882 61.2956 91.7882H70.6434C72.9697 91.7882 74.7077 93.492 74.7077 95.7726C74.7077 98.0532 72.9697 99.757 70.6434 99.757H46.6585C46.9634 99.0188 47.1313 98.2118 47.1313 97.3664V92.5851C47.1313 92.145 46.7673 91.7882 46.3183 91.7882H43.8793C43.4303 91.7882 43.0663 92.145 43.0663 92.5851V97.3664C43.0663 98.6867 41.9743 99.757 40.6273 99.757H18.3791V92.5851C18.3791 92.1215 18.0393 91.7882 17.5663 91.7882H15.1277Z"
                fill="white"
              />
              <path
                d="M35.3325 106.73C35.2884 106.32 34.9644 106.034 34.5247 106.034H28.0219L27.9226 106.039C27.5016 106.082 27.2091 106.398 27.2091 106.827V109.207L27.2142 109.304C27.2582 109.715 27.5822 110 28.0219 110H34.5247L34.6241 109.995C35.045 109.952 35.3376 109.636 35.3376 109.207V106.827L35.3325 106.73Z"
                fill="white"
              />
              <path
                d="M17.5693 83.8194C18.0088 83.8194 18.3329 84.105 18.377 84.5157L18.3821 84.6126V86.9923C18.3821 87.4215 18.0894 87.7376 17.6686 87.7806L17.5693 87.7856H15.1299C14.6904 87.7856 14.3663 87.5001 14.3222 87.0893L14.3171 86.9923V84.6126C14.3171 84.1836 14.6098 83.8674 15.0306 83.8244L15.1299 83.8194H17.5693Z"
                fill="white"
              />
              <path
                d="M100.112 83.8194C100.552 83.8194 100.876 84.105 100.92 84.5157L100.925 84.6126V86.9923C100.925 87.4215 100.632 87.7376 100.211 87.7806L100.112 87.7856H97.267C96.8274 87.7856 96.5033 87.5001 96.4592 87.0893L96.4541 86.9923V84.6126C96.4541 84.1836 96.7468 83.8674 97.1676 83.8244L97.267 83.8194H100.112Z"
                fill="white"
              />
              <path
                d="M65.3535 81.4287C65.1026 81.4287 64.8658 81.5422 64.7117 81.7364L59.5199 88.2791C59.4161 88.41 59.5112 88.6007 59.6804 88.6007H60.4932C60.7441 88.6007 60.9809 88.4871 61.1349 88.293L66.3267 81.7502C66.4306 81.6194 66.3354 81.4287 66.1663 81.4287H65.3535Z"
                fill="white"
              />
              <path
                d="M108.649 83.8194C108.649 83.3793 109.013 83.0225 109.462 83.0225H111.901C112.35 83.0225 112.714 83.3793 112.714 83.8194V102.945C112.714 103.385 112.35 103.741 111.901 103.741H109.462C109.013 103.741 108.649 103.385 108.649 102.945V83.8194Z"
                fill="white"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 80 80"
              fill="none"
            >
              <path
                d="M40.2086 66.6112C34.1483 66.6112 28.286 65.382 22.7825 62.9582C17.4681 60.6184 12.7435 57.282 8.73926 53.0422L13.1577 48.8699C20.2611 56.392 29.8679 60.5343 40.2086 60.5343C50.5493 60.5343 59.8545 56.5166 66.9249 49.2211L71.2893 53.4504C63.0632 61.9376 52.0246 66.6112 40.2086 66.6112Z"
                fill="#FAFAFA"
              />
              <path
                d="M53.1453 50.1636C49.6664 50.1636 46.3841 48.037 45.0874 44.5941C43.4169 40.1561 45.6682 35.1869 50.1046 33.5164C54.5426 31.846 59.5118 34.0973 61.1837 38.5352C62.8542 42.9732 60.6029 47.9424 56.1665 49.6128C55.1714 49.988 54.1509 50.1636 53.1453 50.1636ZM52.2463 39.2016C50.9451 39.6923 50.2832 41.1496 50.774 42.4524C51.2648 43.7551 52.7221 44.4155 54.0248 43.9247C55.326 43.4339 55.9879 41.9766 55.4971 40.6754C55.0063 39.3727 53.549 38.7108 52.2463 39.2016Z"
                fill="#FAFAFA"
              />
              <path
                d="M49.4717 13.3898L25.5627 48.4129L30.5815 51.8391L54.4906 16.816L49.4717 13.3898Z"
                fill="#FAFAFA"
              />
              <path
                d="M26.9147 32.271C25.7065 32.271 24.5029 32.0128 23.3712 31.501C21.2791 30.5525 19.6807 28.8476 18.8718 26.6969C18.0628 24.5477 18.1379 22.2109 19.0864 20.1188C20.0349 18.0266 21.7398 16.4282 23.8905 15.6193C26.0397 14.8103 28.3765 14.8854 30.4687 15.8339C32.5608 16.7824 34.1592 18.4874 34.9681 20.638C36.6386 25.076 34.3873 30.0452 29.9494 31.7172C28.9633 32.0879 27.9383 32.274 26.9147 32.274V32.271ZM26.9207 21.1423C26.6205 21.1423 26.3204 21.1963 26.0307 21.3059C25.4004 21.543 24.8991 22.0128 24.6214 22.6266C24.3438 23.2405 24.3213 23.9264 24.5584 24.5567C24.7955 25.187 25.2653 25.6883 25.8791 25.966C26.493 26.2436 27.1788 26.2661 27.8092 26.029C29.1119 25.5382 29.7723 24.0809 29.2815 22.7782C29.0444 22.1479 28.5746 21.6466 27.9608 21.3689C27.6291 21.2189 27.2749 21.1423 26.9207 21.1423Z"
                fill="#FAFAFA"
              />
            </svg>
          </div>
          {offerProducts.map((product) => (
            <CarouselItem
              key={product.id}
              className="pl-1 cursor-pointer basis-44"
            >
              <div className="">
                <Card className="h-72 rounded-none border-0">
                  <CardContent className="p-0">
                    <Link
                      href={`/search/?q=${product.title.replaceAll(" ", "-")}`}
                      className="flex flex-col items-center justify-center p-2"
                    >
                      <div className="relative mb-5">
                        <Image
                          alt={product.title}
                          width={140}
                          height={140}
                          src={product.thumbnail}
                        />
                        <span className="lg:hidden px-2 py-0.5 absolute bottom-0 left-0 rounded-full text-white text-xs bg-red-600">
                          %{product.discount}
                        </span>
                      </div>
                      <div className="h-10 text-[13px] text-gray-600 mb-5">
                        {product.title.slice(0, 36)}
                        {product.title.length > 36 ? "..." : ""}
                      </div>
                      <div className="flex justify-between items-start w-full">
                        <span className="px-2 py-0.5 rounded-full text-white text-xs bg-red-600">
                          %{product.discount}
                        </span>
                        <div>
                          <div className="text-sm font-bold text-gray-800 flex gap-1 items-center">
                            {(
                              product.price -
                              (product.price * product.discount) / 100
                            ).toLocaleString()}
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.696 17.76L9.48 16.776C9.96 16.712 10.4 16.62 10.8 16.5C11.208 16.388 11.556 16.224 11.844 16.008C12.14 15.792 12.368 15.508 12.528 15.156C12.688 14.804 12.768 14.364 12.768 13.836C12.768 13.292 12.668 12.84 12.468 12.48C12.268 12.12 12.008 11.94 11.688 11.94C11.52 11.94 11.364 12.004 11.22 12.132C11.076 12.26 10.956 12.432 10.86 12.648C10.772 12.864 10.728 13.1 10.728 13.356C10.728 13.5 10.76 13.62 10.824 13.716C10.888 13.804 10.98 13.876 11.1 13.932C11.228 13.98 11.388 14.016 11.58 14.04C11.772 14.064 11.996 14.076 12.252 14.076H14.784C14.952 14.076 15.072 14.124 15.144 14.22C15.224 14.308 15.264 14.416 15.264 14.544C15.264 14.672 15.208 14.792 15.096 14.904C14.984 15.008 14.84 15.06 14.664 15.06H11.796C11.436 15.06 11.1 15.008 10.788 14.904C10.484 14.8 10.236 14.64 10.044 14.424C9.86 14.2 9.768 13.908 9.768 13.548C9.768 13.212 9.82 12.892 9.924 12.588C10.028 12.276 10.168 12 10.344 11.76C10.528 11.512 10.74 11.316 10.98 11.172C11.228 11.028 11.496 10.956 11.784 10.956C12.152 10.956 12.48 11.064 12.768 11.28C13.056 11.496 13.284 11.824 13.452 12.264C13.62 12.696 13.704 13.244 13.704 13.908C13.704 14.652 13.552 15.292 13.248 15.828C12.952 16.372 12.504 16.804 11.904 17.124C11.312 17.444 10.576 17.656 9.696 17.76ZM14.6602 15.06L14.7802 14.076C15.2522 14.076 15.6202 14.06 15.8842 14.028C16.1482 13.988 16.3362 13.896 16.4482 13.752C16.5602 13.6 16.6162 13.364 16.6162 13.044C16.6162 12.844 16.5842 12.608 16.5202 12.336C16.4562 12.056 16.3722 11.76 16.2682 11.448C16.1642 11.136 16.0522 10.828 15.9322 10.524L16.9042 10.164C17.0082 10.42 17.1042 10.712 17.1922 11.04C17.2882 11.368 17.3682 11.692 17.4322 12.012C17.4962 12.332 17.5282 12.612 17.5282 12.852C17.5282 13.252 17.4722 13.592 17.3602 13.872C17.2562 14.152 17.0882 14.38 16.8562 14.556C16.6242 14.732 16.3242 14.86 15.9562 14.94C15.5962 15.02 15.1642 15.06 14.6602 15.06ZM17.2762 8.916C17.1082 8.916 16.9642 8.86 16.8442 8.748C16.7322 8.628 16.6762 8.488 16.6762 8.328C16.6762 8.168 16.7322 8.028 16.8442 7.908C16.9642 7.788 17.1082 7.728 17.2762 7.728C17.4362 7.728 17.5722 7.788 17.6842 7.908C17.8042 8.028 17.8642 8.168 17.8642 8.328C17.8642 8.488 17.8042 8.628 17.6842 8.748C17.5722 8.86 17.4362 8.916 17.2762 8.916ZM15.6322 8.916C15.4642 8.916 15.3202 8.86 15.2002 8.748C15.0882 8.628 15.0322 8.488 15.0322 8.328C15.0322 8.168 15.0882 8.028 15.2002 7.908C15.3202 7.788 15.4642 7.728 15.6322 7.728C15.7922 7.728 15.9282 7.788 16.0402 7.908C16.1602 8.028 16.2202 8.168 16.2202 8.328C16.2202 8.488 16.1602 8.628 16.0402 8.748C15.9282 8.86 15.7922 8.916 15.6322 8.916Z"
                                fill="#383838"
                              />
                              <path
                                d="M3.492 17.06C2.852 17.06 2.36 16.988 2.016 16.844C1.68 16.7 1.448 16.476 1.32 16.172C1.192 15.868 1.12 15.476 1.104 14.996L0.864 8.432H1.848L2.088 14.612C2.104 15.004 2.14 15.308 2.196 15.524C2.26 15.732 2.396 15.876 2.604 15.956C2.82 16.036 3.156 16.076 3.612 16.076C3.78 16.076 3.9 16.124 3.972 16.22C4.052 16.308 4.092 16.416 4.092 16.544C4.092 16.672 4.036 16.792 3.924 16.904C3.812 17.008 3.668 17.06 3.492 17.06ZM3.49219 17.06L3.61219 16.076C3.83619 16.076 4.02419 16.028 4.17619 15.932C4.32819 15.836 4.47619 15.676 4.62019 15.452C4.76419 15.228 4.92019 14.928 5.08819 14.552C5.32019 14.04 5.54819 13.652 5.77219 13.388C6.00419 13.124 6.23219 12.944 6.45619 12.848C6.68819 12.752 6.91619 12.704 7.14019 12.704C7.41219 12.704 7.66419 12.776 7.89619 12.92C8.12819 13.056 8.33219 13.24 8.50819 13.472C8.68419 13.704 8.82019 13.96 8.91619 14.24C9.02019 14.512 9.07219 14.784 9.07219 15.056C9.07219 15.536 8.98819 15.92 8.82019 16.208C8.65219 16.488 8.43619 16.692 8.17219 16.82C7.91619 16.94 7.64819 17 7.36819 17C7.12019 17 6.80019 16.952 6.40819 16.856C6.02419 16.76 5.53619 16.516 4.94419 16.124L5.41219 15.368C5.80419 15.616 6.15619 15.788 6.46819 15.884C6.78819 15.972 7.05219 16.016 7.26019 16.016C7.49219 16.016 7.67619 15.984 7.81219 15.92C7.94819 15.848 8.04819 15.748 8.11219 15.62C8.17619 15.492 8.20819 15.348 8.20819 15.188C8.20819 14.956 8.15219 14.724 8.04019 14.492C7.92819 14.26 7.78419 14.068 7.60819 13.916C7.44019 13.764 7.26019 13.688 7.06819 13.688C6.92419 13.688 6.78419 13.728 6.64819 13.808C6.51219 13.888 6.37219 14.036 6.22819 14.252C6.08419 14.468 5.92019 14.78 5.73619 15.188C5.54419 15.62 5.36019 15.964 5.18419 16.22C5.01619 16.468 4.84419 16.652 4.66819 16.772C4.49219 16.892 4.30819 16.968 4.11619 17C3.93219 17.04 3.72419 17.06 3.49219 17.06Z"
                                fill="#383838"
                              />
                              <path
                                d="M0.36 6.012C0.36 5.82 0.376 5.616 0.408 5.4C0.448 5.176 0.504 4.94 0.576 4.692C0.656 4.436 0.752 4.168 0.864 3.888L1.728 4.224C1.648 4.448 1.576 4.66 1.512 4.86C1.456 5.06 1.412 5.248 1.38 5.424C1.356 5.6 1.344 5.768 1.344 5.928C1.344 6.344 1.452 6.688 1.668 6.96C1.884 7.232 2.18 7.436 2.556 7.572C2.932 7.708 3.356 7.776 3.828 7.776C4.364 7.776 4.812 7.704 5.172 7.56C5.54 7.416 5.832 7.224 6.048 6.984C6.264 6.752 6.416 6.492 6.504 6.204C6.6 5.916 6.648 5.632 6.648 5.352C6.648 5.048 6.588 4.68 6.468 4.248C6.356 3.816 6.144 3.28 5.832 2.64L6.732 2.184C6.892 2.488 7.036 2.808 7.164 3.144C7.3 3.472 7.408 3.812 7.488 4.164C7.576 4.508 7.62 4.86 7.62 5.22C7.62 5.532 7.58 5.852 7.5 6.18C7.428 6.508 7.304 6.824 7.128 7.128C6.952 7.44 6.716 7.716 6.42 7.956C6.132 8.204 5.772 8.4 5.34 8.544C4.916 8.688 4.408 8.76 3.816 8.76C3.352 8.76 2.908 8.704 2.484 8.592C2.068 8.488 1.7 8.324 1.38 8.1C1.068 7.876 0.82 7.592 0.636 7.248C0.452 6.904 0.36 6.492 0.36 6.012ZM3.984 1.224C3.816 1.224 3.672 1.168 3.552 1.056C3.44 0.936 3.384 0.796 3.384 0.636C3.384 0.476 3.44 0.336 3.552 0.216C3.672 0.0959998 3.816 0.0359999 3.984 0.0359999C4.144 0.0359999 4.28 0.0959998 4.392 0.216C4.512 0.336 4.572 0.476 4.572 0.636C4.572 0.796 4.512 0.936 4.392 1.056C4.28 1.168 4.144 1.224 3.984 1.224Z"
                                fill="#383838"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-400 line-through text-sm text-right">
                            {product.price.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
          <CarouselItem className="w-full flex flex-col gap-4 items-center justify-center bg-white pl-1 cursor-pointer basis-44">
            <Link href="incredible-offers">
              <ArrowLeft
                size={45}
                className="border p-2 border-sky-500 text-sky-500 rounded-full"
              />
              <span className="text-gray-500">مشاهده همه</span>
            </Link>
          </CarouselItem>
        </CarouselContent>
        {/* <CarouselPrevious className="transition-all !z-20 w-10 h-10 !hover:bg-rose-500 left-5 top-40 !opacity-100 !bg-white" /> */}
        {/* <CarouselNext className="transition-all !z-20 w-10 h-10 !hover:bg-rose-500 right-20 top-40 !opacity-100 !bg-white" /> */}
      </Carousel>
    </div>
  );
}
