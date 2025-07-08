import { isServer, QueryClient } from "@tanstack/react-query";

let queryClientInstance: QueryClient | null = null;
export const getQueryClient = () => {
 if(isServer){
  return makeQueryCLient();
 }
 else{
  if(!queryClientInstance)queryClientInstance = makeQueryCLient();
  return queryClientInstance
 }
 
}

const makeQueryCLient=()=>{
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60*1000,
      },
    },
  })
}