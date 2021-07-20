import React from 'react'
import { BackDrop } from "./backdrop";
import {SideBar} from "../sidebar/sidebar"

export default {
    title: "Busy Tomorrows/Backdrop",
    component: BackDrop
}

const Template = (args) => <BackDrop {...args} />

export const Default = Template.bind({})
Default.args = {
    children: <SideBar/>
}