import { combineReducers } from "redux"
import * as recipes from "./recipes"

const rootReducer = combineReducers(recipes)

export {rootReducer}