
interface signUpLayoutProps{
    children: React.ReactNode
}

const signLayout = ({children}:signUpLayoutProps) => {
    return ( 
        <div className="w-full h-[100vh] flex items-center justify-center">
            {children}
        </div>
     );
}
 
export default signLayout;