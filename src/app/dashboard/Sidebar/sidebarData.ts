export const sidebarDashboard = [
  {
    id: 1,
    label: "सिर्जना",
    href: "/",
    disabled: false,
  },
  {
    id: 2,
    label: "प्रकार",
    href: "/",
    disabled: false,
  },
  {
    id: 3,
    label: "प्रकार",
    href: "/",
    disabled: false,
  },
];

export const sidebarSifaris = [
  {
    id: 1,
    // label: "ढाचा सिर्जना",
    label: "add new",
    href: "/",
    disabled: false,
  },
  {
    id: 2,
    // label: "सिफारिसको प्रकार",
    label: "approve",
    href: "/",
    disabled: false,
  },
  // {
  //   id: 3,
  //   label: "सिफारिसको प्रकार",
  //   href: "/",
  //   disabled: false,
  // },
];

export const systemConfiguration = [
  {
    id: 1,
    // label: "ढाचा सिर्जना",
    label: "office",
    href: "/dashboard/admin/dashboard/system-configuration/office",
    disabled: false,
  },
  {
    id: 2,
    // label: "सिफारिसको प्रकार",
    label: "office type",
    href: "/dashboard/admin/dashboard/system-configuration/office-type",
    disabled: false,
  },
  {
    id: 3,
    label: "designation",
    href: "/",
    disabled: false,
  },
  {
    id: 4,
    label: "sifaris type",
    href: "/dashboard/admin/dashboard/system-configuration/sifaris",
    disabled: false,
  },
  {
    id: 5,
    label: "document",
    href: "/dashboard/admin/dashboard/system-configuration/documents",
    disabled: false,
  },
  {
    id: 6,
    label: "family relation",
    href: "/",
    disabled: false,
  },
];

export const userConfiguration = [
  {
    id: 1,
    // label: "ढाचा सिर्जना",
    label: "users",
    href: "/dashboard/admin/dashboard/it-nagar",
    disabled: false,
  },
  {
    id: 2,
    // label: "सिफारिसको प्रकार",
    label: "roles",
    href: "/dashboard/admin/dashboard/user-configuration/roles",
    disabled: false,
  },
  {
    id: 3,
    label: "permissions",
    href: "/dashboard/admin/dashboard/user-configuration/permissions",
    disabled: false,
  },
  {
    id: 4,
    label: "public users",
    href: "/dashboard/familyprofile",
    disabled: false,
  },
];

export const sidebarElements = [
  {
    id: 1,
    name: "ड्यासबोर्ड",
    icon: "/assets/icons/sidebar/dashboard.svg",
    dropDownLinks: sidebarDashboard,
  },
  {
    id: 2,
    name: "system configuration",
    icon: "/assets/icons/sidebar/dashboard.svg",
    dropDownLinks: systemConfiguration,
  },
  {
    id: 3,
    // name: "सिफारिस",
    name: "user configuration",
    icon: "/assets/icons/sidebar/sifaris.svg",
    dropDownLinks: userConfiguration,
  },
  {
    id: 4,
    // name: "सिफारिस",
    name: "Sifaris",
    icon: "/assets/icons/sidebar/sifaris.svg",
    dropDownLinks: sidebarSifaris,
  },
  //   {
  //     id: 3,
  //     name: "कार्यकर्ता सिर्जना",
  //     icon: "/assets/icons/sidebar/employee.svg",
  //   },
];
