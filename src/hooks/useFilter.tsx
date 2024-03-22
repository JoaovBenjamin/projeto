import { filterContext } from "@/contexts/filter-context";
import { useContext } from "react";

export function useFilter(){
   return useContext(filterContext)
}