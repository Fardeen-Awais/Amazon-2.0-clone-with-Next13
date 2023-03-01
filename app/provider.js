'use client'
import store from "@/store";
import { Provider } from 'react-redux'

export default function Store({children}){ //# 0009
    return <Provider store={store}>{children}</Provider>
}