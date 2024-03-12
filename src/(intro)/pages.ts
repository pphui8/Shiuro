import { nanoid } from "nanoid";

export interface Pages {
  id: string;
  icon: string;
  label: string;
  path: string;
}
  
export const allPages = [
  { id: nanoid(), icon: "home_4_line", label: "Start", path: "/start" },
  { id: nanoid(), icon: "user_1_line", label: "About me", path: "/about" },
  { id: nanoid(), icon: "cloud_line", label: "This site", path: "/this_site" },
  { id: nanoid(), icon: "look_up_line", label: "404 Not Found", path: "/404" },
  { id: nanoid(), icon: "code_line", label: "Code", path: "/code" },
];
  
export const initialTabs = [
  { id: nanoid(), icon: "user_1_line", label: "About me", path: "/about" },
  { id: nanoid(), icon: "home_4_line", label: "Start", path: "/start" },
]