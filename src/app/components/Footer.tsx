'use client '

import { Input } from "@/components/ui/input"
import { Github } from "lucide-react"
export default function Footer(){

    return (
        <div>
            <div>
                Contact us
            </div>
            <div className="flex flex-col justify-center items-center">
                <Input placeholder="Email"  />
                <Input placeholder="contact email" />
            </div>
            <Github/>
        </div>
    )
}