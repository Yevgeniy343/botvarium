import { FaBattleNet } from "react-icons/fa";

const sublinks = [
  {
    page: "Услуги",
    links: [
      { label: "Web-приложение", url: "/web-app" },
      { label: "Pwa-приложение", url: "/pwa-app" },
      // { label: "ЛК клиентов", icon: <FaBattleNet />, url: "/" },
      // { label: "ЛК партнеров", icon: <FaBattleNet />, url: "/" },
      // { label: "Корпоративный портал", icon: <FaBattleNet />, url: "/" },
      // { label: "Мессенджеры", icon: <FaBattleNet />, url: "/" },
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
