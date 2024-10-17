import { LucideProps } from "lucide-react"

type SubMenuItem = {
    name: string,
    desc: string,
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
}

type SubMenu = {
    title: string | null,
    subMenuItems: Array<SubMenuItem>
}

type TMenu = {
    title: string,
    subMenu: Array<SubMenu> | null
}

export type {
    SubMenuItem,
    SubMenu,
    TMenu
}