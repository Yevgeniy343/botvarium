import { FaBattleNet } from "react-icons/fa";

const sublinks = [
  {
    page: "Услуги",
    links: [
      { label: "Web-приложение", url: "/web-app" },
      { label: "Pwa-приложение", url: "/pwa-app" },
      { label: "ЛК клиентов", url: "/clients-pa" },
      { label: "ЛК партнеров", url: "/partners-pa" },
      { label: "Корпоративный портал", url: "/portal" },
      { label: "Мессенджер", url: "/messenger" },
    ],
  },
  {
    page: "Технологии",
    links: [
      { label: "Nodejs", url: "/technology/nodejs" },
      { label: "Docker", url: "/technology/docker" },
      { label: "MongoDB", url: "/technology/mongodb" },
      { label: "Redis", url: "/technology" },
      { label: "PostgreSQL", url: "/technology" },
      { label: "React", url: "/technology" },
      { label: "CSS", url: "/technology" },
      { label: "Angular", url: "/technology" },
      { label: "Nextjs", url: "/technology" },
      { label: "Django", url: "/technology" },
    ],
  },
  {
    page: "Знания",
    links: [
      // { label: "Веб разработка", icon: <FaBattleNet />, url: "/" },
      // { label: "Личные кабинеты", icon: <FaBattleNet />, url: "/" },
      // { label: "Технологии", icon: <FaBattleNet />, url: "/" },
      { label: "Галактика", url: "/knowledge" },
    ],
  },
  // {
  //   page: "company",
  //   links: [
  //     { label: "about", icon: <FaBattleNet />, url: "/#" },
  //     { label: "customers", icon: <FaBattleNet />, url: "/#" },
  //   ],
  // },
];

export default sublinks;
