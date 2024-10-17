import { useState } from "react"
import type { TMenu } from "../../../types"
import { ChevronDown, Menu, X } from "lucide-react"
import {motion} from "framer-motion"

type Props = {
    MenuData: Array<TMenu>
}

export const MobileMenu = ({ MenuData }: Props) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen(!isOpen)
        setClicled(null)
    }
    const [clicked, setClicled] = useState<number | null>(null)

    return <div className="flex flex-col justify-center">
        <button onClick={toggleDrawer} className="z-[999] relative">
            {
                isOpen ?
                    <X /> :
                    <Menu />
            }
        </button>
        <motion.div className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-[#18181A] backdrop-blur text-white p-6" initial={{x: "-100%"}} animate={{x: isOpen ? "0%" : "-100%"}}>
            <ul>
                {
                    MenuData.map((menuItem, x) => { // Features
                        const hasSubMenu = menuItem.subMenu !== null
                        const isClicked = clicked === x
                        const subMenuDrawer = {
                            enter: {
                                height: "auto",
                                overflow: "hidden"
                            },
                            exit: {
                                height: 0,
                                overflow: "hidden"
                            }
                        }

                        return (
                            <li key={x}>
                                <span className="flex-center-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative" onClick={() => setClicled(isClicked ? null : x)}>
                                    {menuItem.title}
                                    {hasSubMenu && <ChevronDown className={`ml-auto ${isClicked && 'rotate-180'}`} />}
                                </span>
                                {
                                    hasSubMenu && (
                                        <ul>
                                            {
                                                menuItem.subMenu!.map((submenuItem, y) => { // Design
                                                    return (
                                                        <motion.ul key={y} className="ml-5" initial="exit" animate={isClicked ? "enter" : "exit"} variants={subMenuDrawer}>
                                                            {
                                                                submenuItem.subMenuItems.map((item, z) => {
                                                                    return (
                                                                        <li key={z} className="p-2 flex-center hover:bg-white/5 rounded-md cursor-pointer gap-x-2">
                                                                            {item.icon && <item.icon size={17}/>}
                                                                            <span className="">{item.name}</span>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </motion.ul>
                                                    )
                                                })
                                            }
                                        </ul>
                                    )
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </motion.div>
    </div>
}