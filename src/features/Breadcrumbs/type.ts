export type BreadcrumbItem = {
  label: string;
  route?: string;
};

export type BreadcrumbConfig =
  | BreadcrumbItem[]
  | ((params: Record<string, string>) => BreadcrumbItem[]);
