import {
    Bolt,
    ShoppingBag,
    BookOpenText,
    BriefcaseBusiness,
    CircleHelp,
    TriangleAlert,
    Users,
    Lock,
    Dessert,
    ShieldPlus,
    MessageCircle,
    Images,
    Play,
    MapPin,
    Database,
    PanelsTopLeft,
    PanelTop
} from "lucide-react";
import { TMenu } from "../types"

// Menu data
export const MenuData: Array<TMenu> = [
    {
        title: "Features",
        subMenu: [
            {
                title: "Design",
                subMenuItems: [
                    {
                        name: "Design",
                        desc: "Responsive design",
                        icon: PanelsTopLeft
                    },
                    {
                        name: "Navigation",
                        desc: "Link pages",
                        icon: PanelTop
                    }
                ]
            },
            {
                title: "Scale",
                subMenuItems: [
                    {
                        name: "Management",
                        desc: "Site control",
                        icon: Bolt
                    },
                    {
                        name: "CMS",
                        desc: "Management content",
                        icon: Database
                    }
                ]
            }
        ]
    },
    {
        title: "Resources",
        subMenu: [
            {
                title: "Get started",
                subMenuItems: [
                    {
                        name: "Marketplace",
                        desc: "Browse templates",
                        icon: ShoppingBag
                    },
                    {
                        name: "Academy",
                        desc: "Watch lessions",
                        icon: Play
                    },
                    {
                        name: "Experts",
                        desc: "Jobs",
                        icon: BriefcaseBusiness
                    }
                ]
            },
            {
                title: "Programs",
                subMenuItems: [
                    {
                        name: "Meetups",
                        desc: "Upcoming events",
                        icon: MapPin
                    },
                    {
                        name: "Blog",
                        desc: "Posts",
                        icon: BookOpenText
                    },
                    {
                        name: "Gallery",
                        desc: "Images",
                        icon: Images
                    }
                ]
            }
        ]
    },
    {
        title: "Support",
        subMenu: [
            {
                title: null,
                subMenuItems: [
                    {
                        name: "Help",
                        desc: "Center",
                        icon: CircleHelp
                    },
                    {
                        name: "Community",
                        desc: "Project help",
                        icon: MessageCircle
                    },
                    {
                        name: "Emergency",
                        desc: "Urgent issues",
                        icon: TriangleAlert
                    }
                ]
            }
        ]
    },
    {
        title: "Enterprise",
        subMenu: [
            {
                title: "Overview",
                subMenuItems: [
                    {
                        name: "Enterprise",
                        desc: "Overview",
                        icon: ShieldPlus
                    },
                    {
                        name: "Curstomers",
                        desc: "Stories",
                        icon: Dessert
                    }
                ]
            },
            {
                title: "Features",
                subMenuItems: [
                    {
                        name: "Collaboration",
                        desc: "Design together",
                        icon: Users
                    },
                    {
                        name: "Security",
                        desc: "Your site secured",
                        icon: Lock
                    }
                ]
            }
        ]
    },
    {
        title: "Pricing",
        subMenu: null
    },
    {
        title: "Contact",
        subMenu: null
    }
]
