export interface Pages {
  icon: string;
  label: string;
}
  
export const allPages = [
  { icon: "microscope_line", label: "Start" },
  { icon: "user_1_line", label: "About me" },
  { icon: "cloud_line", label: "This site" },
];
  
export const initialTabs = allPages.slice(0, 1);
  
export function getNextIngredient(
  ingredients: Pages[]
): Pages | undefined {
  const existing = new Set(ingredients);
  return allPages.find((ingredient) => !existing.has(ingredient));
}
  