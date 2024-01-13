export interface Pages {
  icon: string;
  label: string;
  path: string;
}
  
export const allPages = [
  { icon: "microscope_line", label: "Start", path: "/start" },
  { icon: "user_1_line", label: "About me", path: "/about" },
  { icon: "cloud_line", label: "This site", path: "/this_site" },
];
  
export const initialTabs = allPages.slice(0, 2);
  
export function getNextIngredient(
  ingredients: Pages[]
): Pages | undefined {
  const existing = new Set(ingredients);
  return allPages.find((ingredient) => !existing.has(ingredient));
}
  