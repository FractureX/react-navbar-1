import { ChevronDown } from "lucide-react"
import type { TMenu } from "../../../types"
import { useState } from "react"
import { motion } from "framer-motion"

type Props = {
    menu: TMenu
}

const DesktopMenu = ({ menu }: Props) => {
    const hasSubMenu = menu.subMenu !== null
    const [isHover, setIsHover] = useState(false)

    // Función para activar / desactivar menú
    const toggleHoverMenu = () => {
        setIsHover(!isHover)
    }

    // Variantes de animaciones
    const subMenuAnimate = {
        enter: {
            opacity: 1,
            rotateX: 0,
            transition: {
                duration: 0.5
            },
            display: "block"
        },
        exit: {
            opacity: 0,
            rotateX: -15,
            transition: {
                duration: 0.5
            },
            display: "none"
        }
    }

    return (
        <motion.li className="group/link" onHoverStart={toggleHoverMenu} onHoverEnd={toggleHoverMenu}>
            <span className="flex-center gap-2 cursor-pointer px-3 py-1 rounded-xl hover:bg-white/5">
                {menu.title}
                {hasSubMenu && (<ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />)}
            </span>
            {
                hasSubMenu && (
                    <motion.div className="flex flex-row sub-menu"
                        initial="exit"
                        animate={isHover ? "enter" : "exit"}
                        variants={subMenuAnimate}>
                        <div className={`grid gap-7 grid-cols-${menu.subMenu!.length}`}>
                            {
                                menu.subMenu!.map((subMenu, i) => (
                                    <div key={i} className="">
                                        <div className="flex flex-col">
                                            <span>
                                                {subMenu.title}
                                            </span>
                                            <div className="flex flex-col gap-4">
                                                {
                                                    subMenu.subMenuItems.map((subMenuItem, i) => (
                                                        <div key={i} className="flex flex-center gap-4 group/menubox cursor-pointer">
                                                            <div className="bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-white group-hover/menubox:text-gray-900 duration-300">
                                                                {subMenuItem.icon && <subMenuItem.icon />}
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <h6 className="font-semibold">
                                                                    {subMenuItem.name}
                                                                </h6>
                                                                <p className="text-sm text-gray-400">
                                                                    {subMenuItem.desc}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </motion.div>
                )
            }
        </motion.li>
    )
}

export {
    DesktopMenu
}