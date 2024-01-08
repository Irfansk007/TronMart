"use client"

import {Input} from "@/components/ui/input"
const LoginPage = () => {
    return ( 
        <div className="border-blue-700 border w-[30%]">
           <div>
            <p>Sign Up</p>
           </div>
           <div>
            <form>
              <Input placeholder="Enter the server name"/> 
            </form>
           </div>
           <div>new to account</div>
        </div>
     );
}
 
export default LoginPage;